import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { UserCircle, ChevronRight } from "lucide-react";
import { TeacherNavigation } from "./TeacherNavigation";

interface Candidate {
  id: string;
  name: string;
  position: string;
  department: string;
  applicationDate: string;
}

interface ExpertCandidateSelectionProps {
  onComplete: (candidateId: string) => void;
  onLogout: () => void;
}

export function ExpertCandidateSelection({ onComplete, onLogout }: ExpertCandidateSelectionProps) {
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "Иванов Иван Иванович",
      position: "Доцент",
      department: "Высшей математики",
      applicationDate: "15.11.2025",
    },
    {
      id: "2",
      name: "Петрова Мария Сергеевна",
      position: "Старший преподаватель",
      department: "Информатики",
      applicationDate: "20.11.2025",
    },
    {
      id: "3",
      name: "Сидоров Петр Александрович",
      position: "Профессор",
      department: "Физики",
      applicationDate: "25.11.2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />

      <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div>
              <p className="text-sm text-gray-600">Роль</p>
              <div className="flex items-center gap-2">
                <p className="text-xl">Эксперт</p>
                <UserCircle className="h-8 w-8" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl mb-8">Выберите кандидата для оценки:</h2>

          <div className="space-y-4">
            {candidates.map((candidate) => (
              <Card
                key={candidate.id}
                className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-purple-200"
                onClick={() => onComplete(candidate.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl mb-1">{candidate.name}</h3>
                          <p className="text-sm text-gray-500">
                            Дата подачи заявки: {candidate.applicationDate}
                          </p>
                        </div>
                        <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0 ml-4" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-sm text-gray-600 mb-1">Должность</p>
                          <p className="text-base">{candidate.position}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-sm text-gray-600 mb-1">Кафедра</p>
                          <p className="text-base">{candidate.department}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {candidates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                На данный момент нет кандидатов для оценки
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Выберите кандидата из списка для начала процесса экспертной оценки. 
            Вам будут доступны учебно-методические материалы кандидата и формы для оценки.
          </p>
        </div>
      </main>
    </div>
  );
}