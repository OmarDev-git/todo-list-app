



export default function A({path,description, children}){



  return (
    <a href={path} aria-label={description} className="block justify-center items-center w-full h-full "  target="_blank" rel="noopener noreferrer" >{children}</a>
  )
}