import "./App.css"
import { Pages } from "./components/pages/Pages"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
    
  }, [])
  return (
    <>
      <Pages />
    </>
  )
}

export default App
