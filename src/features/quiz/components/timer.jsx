const Timer = ({ hours=null, minutes=null, seconds=null }) => {
  return (
    <div className="flex border-2 min-h-12 p-1 gap-x-1">
      {/* Minute */}
      {hours!=null && (
        <div className=" flex-1 border-r-2 border-white/70 px-2  flex items-center justify-center">
          {`${String(hours).padStart(2, "0")} min`}
        </div>
      )}
      {minutes != null && (
        <div className=" flex-1 border-r-2 border-white/70 px-2  flex items-center justify-center">
          {`${String(minutes).padStart(2, "0")} min`}
        </div>
      )}
      {/*  seconds*/}
      {seconds!=null && (
        <div className=" flex-1 border-l-2 border-white/70 px-2  flex items-center justify-center">
          {`${String(seconds).padStart(2, "0")} sec`}
        </div>
      )}
    </div>
  );
};

export default Timer;
