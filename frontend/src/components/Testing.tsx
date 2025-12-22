import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { TeacherNavigation } from "./TeacherNavigation";

interface TestingProps {
  onBack: () => void;
  onLogout: () => void;
}

export function Testing({ onBack, onLogout }: TestingProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      text: "Какой метод обучения наиболее эффективен для развития критического мышления у студентов?",
      options: [
        "Лекционный метод",
        "Проблемное обучение",
        "Репродуктивный метод",
        "Догматический метод"
      ]
    },
    {
      id: 2,
      text: "Что является основной целью проектной деятельности в образовании?",
      options: [
        "Получение оценки",
        "Развитие самостоятельности и практических навыков",
        "Выполнение учебного плана",
        "Подготовка к экзаменам"
      ]
    },
    {
      id: 3,
      text: "Какой принцип коммуникации с обучающимися является наиболее важным?",
      options: [
        "Авторитарность",
        "Дистанцированность",
        "Взаимное уважение и диалог",
        "Формальность"
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    alert("Тестирование завершено! Ваши ответы отправлены.");
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

        <h2 className="text-2xl mb-6">Тестирование преподавателя</h2>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Вопрос {currentQuestion + 1} из {questions.length}</CardTitle>
              <span className="text-sm text-gray-500">
                {Object.keys(answers).length} из {questions.length} ответов
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-lg">{questions[currentQuestion].text}</p>

              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
              >
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Предыдущий вопрос
          </Button>

          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext}>
              Следующий вопрос
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
            >
              Завершить тестирование
            </Button>
          )}
        </div>

        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Тестирование проводится для оценки уровня знаний претендента в области 
            проектной деятельности, методов обучения и эффективной коммуникации с обучающимися.
          </p>
        </div>
      </main>
    </div>
  );
}