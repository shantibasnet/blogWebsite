import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Navbar from "./components/navbar";
import BlogPage from "./pages/blogpage";
import Footer from "./components/footer";







export default function App() {
  return (
    <>
    <div>
<Navbar/>
<Routes>
<Route path="" element={<HomePage/>}/>
<Route path="blog" element={<BlogPage/>}/>
</Routes>
<Footer/>
</div>
    </>
  )
}