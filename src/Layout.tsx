import { Outlet } from 'react-router-dom'
import Navbar from './elements/Navbar'
import { AnimatedThemeToggler } from './components/magicui/animated-theme-toggler'
// bg-[#020617]
const Layout = () => {
  
  return (
    <div className="flex min-h-[100vh] dark:bg-[#020617] dark:text-white bg-amber-50 text-black">
      <div className="fixed top-0 left-0 min-h-[80vh] z-50  ">
        <Navbar />
      </div>
      <div className="flex flex-1 ">
        <Outlet />
      </div>
      <AnimatedThemeToggler className='fixed right-2 top-2 p-4'/>
    </div>
  )
}

export default Layout