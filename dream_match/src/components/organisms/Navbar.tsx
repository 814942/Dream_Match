import Link from "next/link"


const Navbar: React.FC = () => (
  <header id="nav-container" className='w-11/12 m-auto text-white p-6'>
    <nav id='navbar' className='h-100'>
      <ul id='nav-list' className="bg-green-light shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-center items-center w-2/3 m-auto h-full bg-gray-200 rounded-3xl mt-2">
        <li className="text-white p-2 list-none border border-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:opacity-85 hover:cursor-pointer rounded-xl m-2">
          <Link href={"/"}>
            <span className="no-underline p-4">
              Inicio
            </span>
          </Link>
        </li>
        <li className="text-white p-2 list-none border border-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:opacity-85 hover:cursor-pointer rounded-xl m-2">
          <Link href={"/create"}>
            <span className="no-underline p-4">
              Crear equipo
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar