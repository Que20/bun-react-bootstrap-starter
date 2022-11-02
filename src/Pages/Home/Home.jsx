import "./Home.css"
import logo from "./logo.svg"

export default function Home() {
  return (
    <div className="main">
      <img src={logo} className="react-logo" alt="logo" />
    </div>
  )
}