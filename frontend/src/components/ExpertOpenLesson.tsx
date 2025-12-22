import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Clock } from "lucide-react";
import { useState } from "react";
import { TeacherNavigation } from "./TeacherNavigation";

interface Candidate {
  id: string;
  name: string;
  position: string;
  department: string;
  applicationDate: string;
}

interface ExpertOpenLessonProps {
  candidate: Candidate | null;
  onBack: () => void;
  onLogout: () => void;
}

export function ExpertOpenLesson({ candidate, onBack, onLogout }: ExpertOpenLessonProps) {
  const [checklist, setChecklist] = useState({
    goals: false,
    structure: false,
    methods: false,
    materials: false,
    interaction: false,
    time: false,
    results: false,
  });

  const [comments, setComments] = useState("");

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setChecklist({ ...checklist, [key]: checked });
  };

  const handleSubmit = () => {
    alert("Чек-лист по открытому занятию сохранен!");
    onBack();
  };

  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />

      <main className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        {candidate && (
          <div className="mb-6 bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Кандидат:</p>
            <p className="text-lg">
              {candidate.name} — {candidate.position}, кафедра {candidate.department}
            </p>
          </div>
        )}

        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl">Чек-лист по открытому занятию</h2>
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Будет доступен в назначенное время</span>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Оценка проведения открытого занятия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="goals"
                  checked={checklist.goals}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("goals", checked as boolean)
                  }
                />
                <Label
                  htmlFor="goals"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Цели и задачи занятия четко сформулированы и доведены до студентов
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="structure"
                  checked={checklist.structure}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("structure", checked as boolean)
                  }
                />
                <Label
                  htmlFor="structure"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Структура занятия логична и последовательна
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="methods"
                  checked={checklist.methods}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("methods", checked as boolean)
                  }
                />
                <Label
                  htmlFor="methods"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Используются современные методы и технологии обучения
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="materials"
                  checked={checklist.materials}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("materials", checked as boolean)
                  }
                />
                <Label
                  htmlFor="materials"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Учебные материалы и визуальные средства способствуют усвоению материала
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="interaction"
                  checked={checklist.interaction}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("interaction", checked as boolean)
                  }
                />
                <Label
                  htmlFor="interaction"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Преподаватель эффективно взаимодействует с аудиторией, вовлекает студентов
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="time"
                  checked={checklist.time}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("time", checked as boolean)
                  }
                />
                <Label
                  htmlFor="time"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Время занятия распределено рационально
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id="results"
                  checked={checklist.results}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("results", checked as boolean)
                  }
                />
                <Label
                  htmlFor="results"
                  className="flex-1 cursor-pointer leading-relaxed"
                >
                  Проведена рефлексия и подведение итогов занятия
                </Label>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Label htmlFor="comments" className="mb-3 block">
                Комментарии и рекомендации
              </Label>
              <Textarea
                id="comments"
                placeholder="Введите ваши наблюдения, замечания и рекомендации по проведению занятия..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={5}
                className="resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={onBack}>
                Отмена
              </Button>
              <Button onClick={handleSubmit}>
                Сохранить оценку
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Чек-лист будет доступен для заполнения во время проведения открытого занятия. 
            Пожалуйста, внимательно наблюдайте за проведением занятия и объективно оцените 
            профессиональные навыки кандидата.
          </p>
        </div>
      </main>
    </div>
  );
}