import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import pageData from "./pageData.json"


function App() {
  const [count, setCount] = useState(0)

  console.log(pageData)

  return (
    <>
      <Header headers={pageData.header} />
      <Content  sections={pageData.secciones} />
      <Footer />
    </>
  )
}

export default App







