import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
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
      <Route path="/" element={ <Home />  }/>
      <Route path="/" element={ <Home />  }/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App