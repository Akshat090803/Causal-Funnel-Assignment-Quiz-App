const Legend = ({ border, bg, text, title }) => {
  return (
    <div className="flex items-center gap-x-2">
      <span className={`h-3 w-3 shrink-0 rounded-full border-2 ${border} ${bg}`}></span>
      <span className={`h-px py-0.5 rounded-full w-full max-w-[90%] border-2 ${border} ${bg}`}></span>
      <span className={`${text} w-16 text-sm capitalize tracking-wider shrink-0 font-semibold`}>
        {title}
      </span>
    </div>
  );
};

export default Legend