import './App.css'
import Sidemenu from './Sidemenu'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Content from './Content'



function App() {


  return (
    <>
    <div className='flex'>
    <Sidemenu/>
    <Content/>
    </div>
    </>
  )
}

export default App
