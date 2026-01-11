import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const NoQuizResult = ()=>{
  const navigate = useNavigate()
  return (
         <div className="w-full flex items-center justify-center"> 

         <div className="flex flex-col w-full items-center gap-y-2">
          <span className="text-7xl">🐣</span>
          <span>You have not taken a quiz </span>
          <Button className={'max-w-3xs w-full cursor-pointer'} onClick={()=>navigate('/')}>Take a Quiz</Button>

         </div>
         </div>
  )
}

export default NoQuizResult