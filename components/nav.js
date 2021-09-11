import Link from 'next/link'

export default function Nav ({ items, uppercase }) {
  return (
    <ul className="inline-block w-full p-2">
      {items.map(({ link, text }) => (
        <li className={"float-left mr-4 tracking-widest" + (uppercase ? ' uppercase text-sm' : ' text-xs')}>
          <Link href={link}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};