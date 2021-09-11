export default function Button ({text, disabled, click}) {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className="uppercase 
        rounded-none border-black border-2 
        py-3 px-8 text-xs
        hover:bg-black hover:text-white"
      >{text}</button>
  )
}