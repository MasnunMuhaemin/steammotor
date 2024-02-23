import { useState } from "react"


const Navbar = () => {
  const [color, setColor] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setColor(true)
    } else {
      setColor(false)
    }
  })

  return (
    <div className={`${color ? "bg-slate-400 duration-200" : "bg-transparent duration-200"} min-w-full fixed top-0 z-50 py-4 px-4`}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl">
          <p>Steam</p>
        </div>
        <div className="">
          <div className="flex gap-5 font-medium text-sm">
            <a href="#" className="hover:bg-slate-200 rounded-md text-white px-3 py-2 duration-500">Home</a>
            <a href="" className="hover:bg-slate-200 rounded-md text-white px-3 py-2 duration-500">Kata Mereka</a>
            <a href="" className="hover:bg-slate-200 rounded-md text-white px-3 py-2 duration-500">Galeri</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar