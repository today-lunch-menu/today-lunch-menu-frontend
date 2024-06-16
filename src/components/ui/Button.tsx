import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  title: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  title,
  color,
  onClick,
  disabled = false,
}: ButtonProps) {
  const colorVariants: { [key: string]: string } = {
    blue: 'bg-blue-600 hover:bg-blue-500 text-white active:bg-blue-700 disabled:bg-blue-200 disabled:text-gray-400',
    red: 'bg-red-500 hover:bg-red-400 text-white active:bg-red-700 disabled:bg-red-200 disabled:text-gray-400',
    yellow:
      'bg-yellow-300 hover:bg-yellow-400 text-black active:bg-yellow-500 disabled:bg-yellow-200 disabled:text-gray-400',
    green:
      'bg-green-500 hover:bg-green-400 text-white active:bg-green-700 disabled:bg-green-200 disabled:text-gray-400',
    gray: 'bg-gray-500 hover:bg-gray-400 text-white active:bg-gray-700 disabled:bg-gray-200 disabled:text-gray-400',
  };

  const classes = `${colorVariants[color]} block w-full rounded px-12 py-3 text-sm font-medium shadow focus:outline-none focus:ring sm:w-auto`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
}
