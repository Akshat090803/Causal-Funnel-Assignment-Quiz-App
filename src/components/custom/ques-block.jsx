import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const QuesNavBlock = ({ className, value, onClick }) => {
  return (
    <Button
      variant="outline"
      className={cn("py-2 px-1 cursor-pointer border-2  w-full transition-all", className)}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default QuesNavBlock;
