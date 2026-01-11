import NotFound from "@/components/custom/404-not-found";
import CustomLoader from "@/components/custom/loader";
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
            <QuizPage/>
          </LazyWrapper>
        )
      },
      {
        path:'/quiz/result',
        element:(
          <LazyWrapper>
            <ReportPage/>
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