import { Outlet } from 'react-router-dom'
import Navbar from './elements/Navbar'
// bg-[#020617]
const Layout = () => {
  
  return (
    <div className="flex min-h-[100vh] bg-[#020617] text-white">
      <div className="fixed top-0 left-0 min-h-[80vh] z-50  ">
        <Navbar />
      </div>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout