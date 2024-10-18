import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Singup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Blogs } from './Pages/Blogs'
import {Home} from './Pages/Home'
import { CreateBlog } from './Pages/CreateBlog'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home/>} />
          <Route path="/signup" element= {<Singup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/home" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
