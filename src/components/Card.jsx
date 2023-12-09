export const Card = ({ data }) => {
  return (
    <div
      className="  shadow-xl bg-slate-100 dark:bg-zinc-700
     m-2 hover:scale-[1.02] duration-300 transform
      transition-transform rounded-2xl dark:shadow-zinc-400/30"
    >
      <div className="object-cover">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          className="w-full h-full p-2 rounded-2xl"
        />
      </div>
      <div className=" p-2">
        <h1 className=" font-bold text-black font-Poppins text-xl dark:text-zinc-300">
          {data}
        </h1>
        <h1 className="text-black font-Poppins dark:text-zinc-300">Capital</h1>
        <div className=" flex items-center justify-start gap-2 ">
          <h2 className=" text-black font-Poppins text-sm dark:text-zinc-300">
            Currency
          </h2>
          <h2 className=" text-black text-sm bg-red-500 rounded-2xl px-1 pb-1">
            s
          </h2>
        </div>
      </div>
    </div>
  );
};
