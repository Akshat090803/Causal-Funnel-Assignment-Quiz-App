import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col w-full items-center gap-y-2">
        <span className="text-7xl">🧭</span>
        <span className="text-lg font-medium">Page not found</span>
        <span className="text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </span>
        <Button
          className="max-w-3xs w-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
