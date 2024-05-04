type Props = {
  name: string;
};
export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3 hover:text-gray-400 hover:underline transition">
      <span className=" font-bold">{name}</span>
    </button>
  );
}
