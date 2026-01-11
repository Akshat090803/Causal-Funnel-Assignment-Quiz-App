import Header from "@/components/custom/header";
import QuizContextProvider from "@/store/context-store";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <QuizContextProvider>
      <div className="bg-black min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto p-10 pt-20 pb-5  flex-1 flex justify-center">
          <Outlet />
        </div>
      </div>
    </QuizContextProvider>
  );
};

export default MainLayout;
