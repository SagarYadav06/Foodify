import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Blog from "./components/Blog"
import Hero from "./components/Hero" 

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Hero />  }/>
      <Route path="/about" element={ <About />  }/>
      <Route path="/blog" element={ <Blog />  }/>  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App