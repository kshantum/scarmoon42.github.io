import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";

interface StudentChecklistProps {
  lessonId?: string;
}

export function StudentChecklist({ lessonId = "default" }: StudentChecklistProps) {
  const [ratings, setRatings] = useState({
    goalsCommunication: "",
    engagement: "",
    questions: "",
    conclusion: "",
    evaluation: "",
  });

  const questions = [
    {
      id: "goalsCommunication",
      text: "В начале проведения занятия преподавателем доведены до участников команды проекта цель, задачи и ход проведения занятия",
    },
    {
      id: "engagement",
      text: "В ходе проведения занятия преподаватель вовлекает всех участников команды в активную работу над проектом, учитывает индивидуальные особенности участников команды в ходе работы над проектом",
    },
    {
      id: "questions",
      text: "Преподаватель свободно и полно отвечает на вопросы участников команды проекта",
    },
    {
      id: "conclusion",
      text: "Преподаватель подводит итоги занятия, вовлекает всех участников команды проекта в процесс рефлексии о проделанной работе",
    },
    {
      id: "evaluation",
      text: "Преподаватель оценивает результаты работы участников команды над проектом, эффективность использования участниками команды ресурсов в ходе работы над проектом, личностный рост каждого участника команды проекта",
    },
  ];

  const handleRatingChange = (questionId: string, value: string) => {
    setRatings({ ...ratings, [questionId]: value });
  };

  const handleSubmit = () => {
    const allAnswered = Object.values(ratings).every(value => value !== "");
    if (!allAnswered) {
      alert("Пожалуйста, оцените все критерии");
      return;
    }
    alert("Спасибо! Ваша оценка отправлена.");
    // Очистить форму после отправки
    setRatings({
      goalsCommunication: "",
      engagement: "",
      questions: "",
      conclusion: "",
      evaluation: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-2xl">Чек-лист открытого занятия</h1>
          <p className="text-gray-600 mt-2">Оценка преподавателя студентами</p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <Card className="border-2 mb-6">
          <CardContent className="p-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>Инструкция:</strong> Проставьте баллы от 0 до 3, где:
              </p>
              <ul className="mt-2 space-y-1 text-sm ml-4">
                <li><strong>0</strong> - проявление целесообразно, но не наблюдается</li>
                <li><strong>1</strong> - проявление наблюдается редко</li>
                <li><strong>2</strong> - проявление наблюдается часто</li>
                <li><strong>3</strong> - проявление наблюдается постоянно</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <Card key={question.id} className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">
                  {index + 1}. {question.text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={ratings[question.id as keyof typeof ratings]}
                  onValueChange={(value) => handleRatingChange(question.id, value)}
                  className="flex gap-8"
                >
                  {[0, 1, 2, 3].map((score) => (
                    <div key={score} className="flex items-center space-x-2">
                      <RadioGroupItem value={score.toString()} id={`${question.id}-${score}`} />
                      <Label
                        htmlFor={`${question.id}-${score}`}
                        className="cursor-pointer text-lg"
                      >
                        {score}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button onClick={handleSubmit} className="w-full" size="lg">
            Отправить оценку
          </Button>
        </div>

        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Ваша оценка является анонимной и будет использована для улучшения качества преподавания.
            Спасибо за участие!
          </p>
        </div>
      </main>
    </div>
  );
}
