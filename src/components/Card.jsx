export default function Card({ children, imgSrc, imgAlt, ...props }) {
  return (
    <div
      {...props}
      className="grid grid-cols-1 shadow-lg bg-slate-100 rounded-2xl group"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full transition-transform rounded-md rounded-b-none group-hover:scale-110 duration-0"
      />
      <div className="p-4 my-2 break-all text-slate-900">{children}</div>
    </div>
  );
}
