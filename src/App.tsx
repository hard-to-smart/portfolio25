import Contact from './Contact'
import { RouterProvider,  createHashRouter } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import Projects from './elements/project/Projects'


const router = createHashRouter([
  {path: '/',
  element: <Layout/>,
  // errorElement: ()=> <>error</>,
  children: [
    {
        path:'',
        element: <Home/>
    },
    {
        path: 'projects',
        element: <Projects/>
    },
    {
        path: 'contact',
        element: <Contact/>
    }
]}
])

const App=()=>{
    return <RouterProvider router={router}/>
}

export default App;