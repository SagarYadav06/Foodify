import type { ReactNode } from "react"
import Navbar from "./Navbar.tsx"
import Footer from "./Footer"

interface Iprop {
    children: ReactNode
}
 
const Layout = ({ children }: Iprop ) => {
  return (
    <>
    <Navbar />
    <main>{ children }</main>
    <Footer />
    </>
  )
}

export default Layout