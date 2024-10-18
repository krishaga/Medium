import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Singup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Blog } from './Pages/Blog'
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
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
