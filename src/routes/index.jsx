import NotFound from "@/components/custom/404-not-found";
import EmailGuard from "@/components/custom/email-guard";
import CustomLoader from "@/components/custom/loader";
import QuizResultGuard from "@/components/custom/quiz-result-guard";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const MainLayout = lazy(()=>import("@/layouts/main-layout"))
const Home = lazy(()=> import("@/features/home/pages"))
const QuizPage = lazy(()=>import("@/features/quiz/pages"))
const ReportPage = lazy(()=>import("@/features/report/pages"))


const LazyWrapper = ({children})=>{
  return <Suspense fallback={<CustomLoader/>}>
    {children}
  </Suspense>
}
const router = createBrowserRouter([
  {
    
     path:"/",
     element:(
      <LazyWrapper>
        <MainLayout/>
      </LazyWrapper>
     ),
     children:[
      {
        path:'/',
        element:(
          <LazyWrapper>
            <Home/>
          </LazyWrapper>
        )
      },
      {
        path:'/quiz',
        element:(
          <LazyWrapper>
            <EmailGuard>
              <QuizPage/>
            </EmailGuard>
          </LazyWrapper>
        )
      },
      {
        path:'/quiz/result',
        element:(
          <LazyWrapper>
            <QuizResultGuard>
              <ReportPage/>
            </QuizResultGuard>
          </LazyWrapper>
        )
      },
       {
      path:"*",
      element:<NotFound/>
    }
     ]

  }
])

export default router