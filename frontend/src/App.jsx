import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}