import { Outlet } from 'react-router-dom'
import Navbar from './elements/Navbar'
// bg-[#020617]
const Layout = () => {
  
  return (
    <div className="flex min-h-screen w-full bg-[#020617] text-white">
      <div className="fixed top-0 left-0 min-h-[80vh] w-fit z-10">
        <Navbar />
      </div>
      <div className="flex flex-1 ">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout