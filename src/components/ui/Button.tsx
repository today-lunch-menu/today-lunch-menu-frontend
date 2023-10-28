type ButtonProps = {
  title: string;
  color: string;
};

export default function Button({ title, color }: ButtonProps) {
  const classes = `block w-full rounded bg-${color}-600 px-12 py-3 text-sm font-medium shadow hover:bg-${color}-700 focus:outline-none focus:ring active:bg-${color}-500 sm:w-auto`;

  return <button className={classes}>{title}</button>;
}
