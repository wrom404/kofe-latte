import { BrowserRouter, Routes, Route } from "react-router"
// import Page from "./pages/Page"
import Home from "./pages/Page"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App