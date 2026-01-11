import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WavyBackground } from "@/components/ui/wavy-background";
import { QuizContext } from "@/store/context-store";
import { useContext } from "react";

const Home = () => {
  const {
    email,
    setEmail,
    emailSubmitHandler: onClickHandler,
  } = useContext(QuizContext);
  return (
    <div>
      <WavyBackground containerClassName={"h-full"}>
        <div className="max-w-5xl md:max-w-4xl flex flex-col gap-y-6">
          <p className="text-3xl md:text-4xl lg:text-6xl  font-extrabold inter-var text-center  bg-clip-text text-transparent bg-linear-to-b from-foreground from-60% to-[#999]">
            Ready to Take the Quiz?
          </p>
          <p className="text-base md:text-lg  text-white font-normal inter-var text-center">
            Answer 15 questions within 30 minutes and view a detailed report at
            the end.
          </p>

          <div className="flex  flex-col w-full mt-4  items-center gap-4">
            <div className="w-full max-w-md text-center">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/20 backdrop-blur-md placeholder:text-white/85 text-foreground focus-visible:ring-white"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className="text-xs">
                Enter your email address to begin the quiz.
              </span>
            </div>
            <Button
              onClick={onClickHandler}
              disabled={!email.trim()}
              type="submit"
              className={
                "cursor-pointer max-w-3xs w-full font-bold disabled:cursor-not-allowed"
              }
            >
              Start Quiz
            </Button>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Home;
