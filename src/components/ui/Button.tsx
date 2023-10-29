type ButtonProps = {
  title: string;
  color: string;
  disabled?: boolean;
};

export default function Button({
  title,
  color,
  disabled = false,
}: ButtonProps) {
  const colorVariants: { [key: string]: string } = {
    blue: 'bg-blue-600 hover:bg-blue-500 text-white active:bg-blue-700',
    red: 'bg-red-500 hover:bg-red-400 text-white active:bg-red-700',
    yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black active:bg-yellow-500',
  };

  const classes = ` ${colorVariants[color]} block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto`;

  return (
    <button className={classes} disabled={disabled}>
      {title}
    </button>
  );
}
