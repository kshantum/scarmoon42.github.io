import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { UserCircle, QrCode } from "lucide-react";
import { TeacherNavigation } from "./TeacherNavigation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface TeacherHomeProps {
  onNavigate: (page: "upload-umk" | "upload-pk" | "testing" | "student-checklist") => void;
  onLogout: () => void;
}

export function TeacherHome({ onNavigate, onLogout }: TeacherHomeProps) {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const lessonQrCode = "QR-LESSON-12345"; // В реальной системе это будет приходить с сервера

  const handleQrCodeClick = () => {
    // Переход на страницу чек-листа студентов
    onNavigate("student-checklist");
    setQrDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-gray-600">Роль</p>
              <div className="flex items-center gap-2">
                <p className="text-xl">Преподаватель</p>
                <UserCircle className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-xl mb-2">Информация о проведении открытого занятия:</h2>
            <p className="text-gray-700">_______________(дата)</p>
            <p className="text-gray-700">______________(время)</p>
            <p className="text-gray-700">__________(аудитория)</p>
            <Button 
              variant="outline" 
              className="gap-2 mt-3"
              onClick={() => setQrDialogOpen(true)}
            >
              <QrCode className="h-4 w-4" />
              QR-код для студентов
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4">
            Приветствуем Вас, Уважаемый преподаватель! Мы просим Вас загрузить
          </p>
          <p className="text-lg mb-4">
            учебно-методический комплекс (УМК), курсовые проекты (КП) и документы о повышении квалификации (ПК).
          </p>
          <p className="text-lg mb-4">
            Также, Вам необходимо пройти тестирование, которое проводится для оценки
          </p>
          <p className="text-lg mb-4">
            уровня знаний претендента в области проектной деятельности, методов обучения
          </p>
          <p className="text-lg mb-6">
            и эффективной коммуникации с обучающимися.
          </p>
          <p className="text-lg">
            Благодарим за участие!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2"
            onClick={() => onNavigate("upload-umk")}
          >
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="mb-4">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 120 120" 
                  className="text-purple-500"
                >
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00bcd4" />
                      <stop offset="100%" stopColor="#e91e63" />
                    </linearGradient>
                  </defs>
                  <rect 
                    x="20" 
                    y="30" 
                    width="80" 
                    height="60" 
                    rx="5" 
                    fill="none" 
                    stroke="url(#gradient1)" 
                    strokeWidth="3"
                  />
                  <line 
                    x1="30" 
                    y1="50" 
                    x2="70" 
                    y2="50" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                  />
                  <line 
                    x1="30" 
                    y1="60" 
                    x2="70" 
                    y2="60" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                  />
                  <line 
                    x1="30" 
                    y1="70" 
                    x2="60" 
                    y2="70" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                  />
                  <rect 
                    x="75" 
                    y="55" 
                    width="20" 
                    height="15" 
                    rx="2" 
                    fill="none" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-center text-lg">
                Загрузка УМК,<br />КП
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2"
            onClick={() => onNavigate("upload-pk")}
          >
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="mb-4">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 120 120" 
                  className="text-purple-500"
                >
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00bcd4" />
                      <stop offset="100%" stopColor="#e91e63" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M35 25 L85 25 L95 35 L95 85 L35 85 Z" 
                    fill="none" 
                    stroke="url(#gradient2)" 
                    strokeWidth="3"
                  />
                  <line 
                    x1="85" 
                    y1="25" 
                    x2="95" 
                    y2="35" 
                    stroke="url(#gradient2)" 
                    strokeWidth="3"
                  />
                  <path 
                    d="M45 45 L75 45 L75 70 L45 70 Z" 
                    fill="none" 
                    stroke="url(#gradient2)" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M55 60 L60 65 L65 55" 
                    fill="none" 
                    stroke="url(#gradient2)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline 
                    points="60,75 60,90 50,85" 
                    fill="none" 
                    stroke="url(#gradient2)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-center text-lg">
                Загрузка ПК
              </p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2"
            onClick={() => onNavigate("testing")}
          >
            <CardContent className="pt-8 pb-8 flex flex-col items-center">
              <div className="mb-4">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 120 120" 
                  className="text-purple-500"
                >
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00bcd4" />
                      <stop offset="100%" stopColor="#e91e63" />
                    </linearGradient>
                  </defs>
                  <rect 
                    x="25" 
                    y="20" 
                    width="70" 
                    height="80" 
                    rx="5" 
                    fill="none" 
                    stroke="url(#gradient3)" 
                    strokeWidth="3"
                  />
                  <rect 
                    x="38" 
                    y="35" 
                    width="10" 
                    height="10" 
                    rx="2" 
                    fill="none" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                  <line 
                    x1="55" 
                    y1="40" 
                    x2="80" 
                    y2="40" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                  <rect 
                    x="38" 
                    y="55" 
                    width="10" 
                    height="10" 
                    rx="2" 
                    fill="none" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                  <line 
                    x1="55" 
                    y1="60" 
                    x2="80" 
                    y2="60" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                  <rect 
                    x="38" 
                    y="75" 
                    width="10" 
                    height="10" 
                    rx="2" 
                    fill="none" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                  <line 
                    x1="55" 
                    y1="80" 
                    x2="80" 
                    y2="80" 
                    stroke="url(#gradient3)" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-center text-lg">
                Тестирование
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* QR Code Dialog */}
      <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>QR-код для чек-листа по открытому занятию</DialogTitle>
            <DialogDescription>Студенты могут отсканировать этот код для оценки занятия</DialogDescription>
          </DialogHeader>
          <div className="py-6 flex flex-col items-center">
            <div 
              className="w-64 h-64 bg-white border-4 border-purple-500 rounded-lg flex items-center justify-center cursor-pointer hover:border-purple-700 transition-colors"
              onClick={handleQrCodeClick}
            >
              <div className="text-center">
                <QrCode className="h-32 w-32 text-purple-500 mx-auto mb-4" />
                <p className="text-sm text-gray-600">Нажмите для предпросмотра</p>
                <p className="text-xs text-gray-500 mt-2">{lessonQrCode}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Покажите этот QR-код студентам для заполнения чек-листа
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}