import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { TeacherNavigation } from "./TeacherNavigation";

interface Candidate {
  id: string;
  name: string;
  position: string;
  department: string;
  applicationDate: string;
}

interface ExpertDocumentsProps {
  candidate: Candidate | null;
  onBack: () => void;
  onLogout: () => void;
}

export function ExpertDocuments({ candidate, onBack, onLogout }: ExpertDocumentsProps) {
  const handleDownload = (fileName: string) => {
    alert(`Скачивание файла: ${fileName}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>

          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm text-gray-600">Роль</p>
                <p className="text-xl">Эксперт</p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="text-xl mb-2">Информация о проведении открытого занятия:</h2>
              <p className="text-gray-700">_______________(дата)</p>
              <p className="text-gray-700">______________(время)</p>
              <p className="text-gray-700">__________(аудитория)</p>
            </div>
          </div>

          {candidate && (
            <div className="mb-6 bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Кандидат:</p>
              <p className="text-lg">{candidate.name} — {candidate.position}, кафедра {candidate.department}</p>
            </div>
          )}

          <h2 className="text-2xl mb-8">УМК, КП</h2>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <FileText className="h-8 w-8 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-lg">УМК</p>
                      <p className="text-sm text-gray-500">Учебно-методический комплекс</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => handleDownload("УМК.pdf")}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <FileText className="h-8 w-8 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-lg">КП</p>
                      <p className="text-sm text-gray-500">Курсовые проекты</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => handleDownload("КП.pdf")}
                    className="gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-gray-100 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              Документы предоставлены кандидатом для оценки. После ознакомления с материалами, 
              пожалуйста, заполните чек-лист по УМК,КП и анкету работодателя.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}