import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { TeacherNavigation } from "./TeacherNavigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";

interface User {
  id: string;
  name: string;
  login: string;
  role: "Преподаватель" | "Эксперт" | "Внешний эксперт";
  isTemporary: boolean;
  expirationDate?: string;
}

interface SecretaryUserListProps {
  onBack: () => void;
  onLogout: () => void;
}

export function SecretaryUserList({ onBack, onLogout }: SecretaryUserListProps) {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Иванов Иван Иванович", login: "teacher", role: "Преподаватель", isTemporary: false },
    { id: "2", name: "Петрова Мария Сергеевна", login: "expert", role: "Эксперт", isTemporary: false },
    { id: "3", name: "Сидоров Петр Александрович", login: "sidorov", role: "Внешний эксперт", isTemporary: true, expirationDate: "2025-12-31" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    login: "",
    password: "",
    role: "" as User["role"] | "",
    isTemporary: false,
    expirationDate: "",
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.login || !newUser.password || !newUser.role) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    if (newUser.isTemporary && !newUser.expirationDate) {
      alert("Пожалуйста, укажите дату удаления для временного аккаунта");
      return;
    }

    const user: User = {
      id: Date.now().toString(),
      name: newUser.name,
      login: newUser.login,
      role: newUser.role as User["role"],
      isTemporary: newUser.isTemporary,
      expirationDate: newUser.isTemporary ? newUser.expirationDate : undefined,
    };

    setUsers([...users, user]);
    setNewUser({ name: "", login: "", password: "", role: "", isTemporary: false, expirationDate: "" });
    setIsDialogOpen(false);
    alert(`Пользователь создан!\nЛогин: ${newUser.login}\nПароль: ${newUser.password}`);
  };

  const handleDeleteUser = (id: string) => {
    if (confirm("Вы уверены, что хотите удалить этого пользователя?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleRoleChange = (role: string) => {
    setNewUser({ 
      ...newUser, 
      role: role as User["role"],
      isTemporary: role === "Преподаватель" || role === "Внешний эксперт"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        <div className="mb-8">
          <p className="text-sm text-gray-600">Роль</p>
          <p className="text-xl">Секретарь</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl">Список</h2>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Добавить пользователя
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Создание нового пользователя</DialogTitle>
                <DialogDescription>Введите данные нового пользователя</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">ФИО</Label>
                  <Input
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login">Логин</Label>
                  <Input
                    id="login"
                    placeholder="ivan_ivanov"
                    value={newUser.login}
                    onChange={(e) => setNewUser({ ...newUser, login: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="text"
                    placeholder="Введите пароль"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Роль</Label>
                  <Select value={newUser.role} onValueChange={handleRoleChange}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Эксперт">Эксперт</SelectItem>
                      <SelectItem value="Преподаватель">Претендент ППС</SelectItem>
                      <SelectItem value="Внешний эксперт">Внешний эксперт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {(newUser.role === "Преподаватель" || newUser.role === "Внешний эксперт") && (
                  <div className="flex items-center space-x-2 bg-amber-50 p-3 rounded-lg">
                    <Checkbox
                      id="temporary"
                      checked={newUser.isTemporary}
                      onCheckedChange={(checked) => 
                        setNewUser({ ...newUser, isTemporary: checked as boolean })
                      }
                    />
                    <Label htmlFor="temporary" className="text-sm cursor-pointer">
                      Временный аккаунт (будет автоматически удален после завершения процесса)
                    </Label>
                  </div>
                )}

                {newUser.isTemporary && (
                  <div className="space-y-2">
                    <Label htmlFor="expirationDate">Дата удаления</Label>
                    <Input
                      id="expirationDate"
                      type="date"
                      value={newUser.expirationDate}
                      onChange={(e) => setNewUser({ ...newUser, expirationDate: e.target.value })}
                    />
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Отмена
                  </Button>
                  <Button onClick={handleAddUser}>
                    Создать
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <p className="text-gray-600 mb-6">
          Уважаемый секретарь! Просим Вас распределить роли участникам.
        </p>

        <Card className="border-2">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2">
                  <tr>
                    <th className="px-6 py-4 text-left">ФИО</th>
                    <th className="px-6 py-4 text-left">Логин</th>
                    <th className="px-6 py-4 text-left">Роль</th>
                    <th className="px-6 py-4 text-left">Статус</th>
                    <th className="px-6 py-4 text-center">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4 text-gray-600">{user.login}</td>
                      <td className="px-6 py-4">
                        <Select defaultValue={user.role}>
                          <SelectTrigger className="w-48">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Эксперт">Эксперт</SelectItem>
                            <SelectItem value="Преподаватель">Претендент ППС</SelectItem>
                            <SelectItem value="Внешний эксперт">Внешний эксперт</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="px-6 py-4">
                        {user.isTemporary && (
                          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            Временный
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {users.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Список пользователей пуст. Добавьте первого пользователя.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}