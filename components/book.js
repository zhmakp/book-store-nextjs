
import {useRouter} from 'next/router'

export default function Book (props) {
  const router = useRouter();
  return (
    <div
      className="relative w-3/12 overflow-hidden cursor-pointer m-4"
      onClick={() => router.push(`/books/${props.id}`)}>
      <div
        className="absolute
          flex justify-center
          items-center
          w-full h-full
          text-transparent
          hover:text-black
          hover:bg-gray-50">
        {props.title}
      </div>
      <img className="h-full" src={props.img}></img>
    </div>
  );
};