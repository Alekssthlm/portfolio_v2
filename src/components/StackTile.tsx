export default function StackTile(props: { name: string; image: string }) {
  return (
    <div className="w-[10rem] h-[10rem] p-4 rounded-lg text-white font-bold text-[1.5rem] flex flex-col gap-2 items-center hover:scale-[1.10] transition-all ease-in-out duration-300 bg-[#515151] shadow-lg shadow-[#000000]">
      <img
        className="w-[4rem] lg:w-[6rem]"
        src={props.image}
        loading="lazy"
        alt={`Logo of ${props.name}`}
        width={512}
        height={512}
      />
      <span>{props.name}</span>
    </div>
  );
}
