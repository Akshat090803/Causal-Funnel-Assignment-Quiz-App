import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const statusStyles = {
  correct: "bg-green-600 text-white",
  incorrect: "bg-red-600 text-white",
  unattempted: "bg-gray-500 text-white",
};

const QuestionCard = ({ userEvaluation }) => {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {userEvaluation.map((item, ind) => (
        <AccordionItem key={ind} value={`item-${ind}`}>
          <AccordionTrigger>
            <div className="flex w-full items-start justify-between gap-4 text-left">
              <p className="font-medium">
                <span className="mr-2 font-bold">{`Q${ind + 1}.`}</span>
                {item.question}
              </p>

              <Badge className={statusStyles[item.status]}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </Badge>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-3">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm font-semibold mb-1">Your Answer</p>
              <p className="text-sm">
                {item.answer ? item.answer : "Not Attempted"}
              </p>
            </div>

            <div className="rounded-lg bg-muted p-3">
              <p className="text-sm font-semibold mb-1">Correct Answer</p>
              <p className="text-sm text-green-600 font-medium">
                {item.correctAnswer}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionCard;
