import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { TeacherNavigation } from "./TeacherNavigation";

interface Candidate {
  id: string;
  name: string;
  position: string;
  department: string;
  applicationDate: string;
}

interface ExpertSurveyProps {
  candidate: Candidate | null;
  onBack: () => void;
  onLogout: () => void;
}

export function ExpertSurvey({ candidate, onBack, onLogout }: ExpertSurveyProps) {
  const [answers, setAnswers] = useState({
    qualification: "",
    experience: "",
    competence: "",
    recommendation: "",
  });

  const [additionalComments, setAdditionalComments] = useState("");

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers({ ...answers, [question]: value });
  };

  const handleSubmit = () => {
    const allAnswered = Object.values(answers).every(value => value !== "");
    if (!allAnswered) {
      alert("Пожалуйста, ответьте на все вопросы анкеты");
      return;
    }
    alert("Анкета работодателя успешно заполнена!");
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
            <p className="text-lg">{candidate.name} — {candidate.position}, кафедра {candidate.department}</p>
          </div>
        )}

        <h2 className="text-2xl mb-8">Анкета работодателя</h2>

        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>1. Оценка квалификации кандидата</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers.qualification}
                onValueChange={(value) => handleAnswerChange("qualification", value)}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="excellent" id="q1-excellent" />
                    <Label htmlFor="q1-excellent" className="flex-1 cursor-pointer">
                      Отлично - полностью соответствует требованиям должности
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="good" id="q1-good" />
                    <Label htmlFor="q1-good" className="flex-1 cursor-pointer">
                      Хорошо - в основном соответствует требованиям
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="satisfactory" id="q1-satisfactory" />
                    <Label htmlFor="q1-satisfactory" className="flex-1 cursor-pointer">
                      Удовлетворительно - частично соответствует требованиям
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="poor" id="q1-poor" />
                    <Label htmlFor="q1-poor" className="flex-1 cursor-pointer">
                      Неудовлетворительно - не соответствует требованиям
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>2. Оценка практического опыта</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers.experience}
                onValueChange={(value) => handleAnswerChange("experience", value)}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="extensive" id="q2-extensive" />
                    <Label htmlFor="q2-extensive" className="flex-1 cursor-pointer">
                      Обширный опыт в профильной области
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="sufficient" id="q2-sufficient" />
                    <Label htmlFor="q2-sufficient" className="flex-1 cursor-pointer">
                      Достаточный опыт для данной должности
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="limited" id="q2-limited" />
                    <Label htmlFor="q2-limited" className="flex-1 cursor-pointer">
                      Ограниченный опыт
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="insufficient" id="q2-insufficient" />
                    <Label htmlFor="q2-insufficient" className="flex-1 cursor-pointer">
                      Недостаточный опыт
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>3. Оценка профессиональных компетенций</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers.competence}
                onValueChange={(value) => handleAnswerChange("competence", value)}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="high" id="q3-high" />
                    <Label htmlFor="q3-high" className="flex-1 cursor-pointer">
                      Высокий уровень компетенций
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="above-average" id="q3-above" />
                    <Label htmlFor="q3-above" className="flex-1 cursor-pointer">
                      Выше среднего
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="average" id="q3-average" />
                    <Label htmlFor="q3-average" className="flex-1 cursor-pointer">
                      Средний уровень
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="low" id="q3-low" />
                    <Label htmlFor="q3-low" className="flex-1 cursor-pointer">
                      Низкий уровень
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>4. Общая рекомендация</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers.recommendation}
                onValueChange={(value) => handleAnswerChange("recommendation", value)}
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="strongly-recommend" id="q4-strongly" />
                    <Label htmlFor="q4-strongly" className="flex-1 cursor-pointer">
                      Настоятельно рекомендую к приему на работу
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="recommend" id="q4-recommend" />
                    <Label htmlFor="q4-recommend" className="flex-1 cursor-pointer">
                      Рекомендую к приему на работу
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="conditional" id="q4-conditional" />
                    <Label htmlFor="q4-conditional" className="flex-1 cursor-pointer">
                      Рекомендую условно (с дополнительным обучением)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="not-recommend" id="q4-not" />
                    <Label htmlFor="q4-not" className="flex-1 cursor-pointer">
                      Не рекомендую к приему на работу
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Дополнительные комментарии</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Укажите дополнительную информацию о кандидате, его сильные и слабые стороны, рекомендации..."
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
                rows={6}
                className="resize-none"
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onBack}>
              Отмена
            </Button>
            <Button onClick={handleSubmit}>
              Отправить анкету
            </Button>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Анкета работодателя является важной частью оценки кандидата. Ваше мнение как эксперта 
            поможет принять взвешенное решение о приеме на работу.
          </p>
        </div>
      </main>
    </div>
  );
}