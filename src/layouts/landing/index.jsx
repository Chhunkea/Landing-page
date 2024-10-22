import Header from "../homepage/Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function LandingLayout() {
  return (
    <>
        <Header navbarGuest />
        <Outlet />
        <Footer />
    </>
  )
}

export default LandingLayout;
