const InfoCard = ({title,value})=>{

  return (
    <div className="flex gap-x-2 items-center lg:text-base md:text-sm text-xs">
       <span className="">{title}</span>
       <span>:</span>
       <span className="font-semibold text-purple-500">{value || 0}</span>
    </div>
  )
}

export default InfoCard