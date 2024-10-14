import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Singup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Blog } from './Pages/Blog'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element= {<Singup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
