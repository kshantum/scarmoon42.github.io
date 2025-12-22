import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { TeacherNavigation } from "./TeacherNavigation";

interface UploadUMKProps {
  onBack: () => void;
  onLogout: () => void;
}

export function UploadUMK({ onBack, onLogout }: UploadUMKProps) {
  return (
    <div className="min-h-screen bg-white">
      <TeacherNavigation showLogout onLogout={onLogout} />
      <main className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>

        <h2 className="text-2xl mb-6">Загрузка учебно-методического комплекса (УМК) и курсовых проектов (КП)</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Загрузка файлов УМК</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg mb-2">Перетащите файлы сюда или нажмите для выбора</p>
                <p className="text-sm text-gray-500">Поддерживаемые форматы: PDF, DOC, DOCX, PPT, PPTX</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Загрузка курсовых проектов (КП)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg mb-2">Перетащите файлы сюда или нажмите для выбора</p>
                <p className="text-sm text-gray-500">Поддерживаемые форматы: PDF, DOC, DOCX</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onBack}>
              Отмена
            </Button>
            <Button>
              Загрузить
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}