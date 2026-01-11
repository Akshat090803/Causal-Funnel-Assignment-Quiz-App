import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const QuizInfo = ({handleQuizStart}) => {
  return (
    <div className=" h-full flex items-center justify-center">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Info</CardTitle>
          <CardDescription className={"-mb-3"}>
            You are about to begin a timed quiz designed to assess your general
            knowledge and accuracy.
          </CardDescription>
        </CardHeader>
        <CardContent >
          <ul className="md:text-base text-sm space-y-0.5">
            <li>📋 15 Questions</li>
            <li>⏱️ 30-Minute Time Limit</li>
            <li>📊 Instant Results</li>
          </ul>

          <div className="mt-4 space-y-2">
            <h2 className="text-lg font-semibold">Quiz Rules</h2>
            <ul className="md:text-base text-sm space-y-0.5">
              <li>🔁 Navigate freely between questions</li>
              <li>⏰ Auto-submit when time ends</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleQuizStart} className={"cursor-pointer max-w-3xs w-full"}>Start Quiz</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizInfo;
