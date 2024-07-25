/* eslint-disable react/no-unknown-property */
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

import { logo } from "./assets/index.js";
import { Home, CreatePost } from "./pages/pages.js";
import { PiMagicWandFill } from "react-icons/pi";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-48 object-cover" />
          </Link>

          <Link to="/create-post" className="py-2 px-4 flex text-white items-center font-medium rounded-md bg-sky-700 hover:shadow-lg hover:shadow-gray-200 hover:bg-sky-600 transition-all ease-linear duration-200">
            Create
            <h1 className="inline-flex font-extrabold text-xl ms-1">
              <PiMagicWandFill />
            </h1>
          </Link>
        </header>

        <main className="sm:p-5 px-4 py-5 w-full bg-[#f9fafe] min-h-[calc(100vh-78px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
        

      </BrowserRouter>
    </>
  )
}

export default App