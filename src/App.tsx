import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import pageData from "./pageData.json"


function App() {

  return (
    <>
      <Header headers={pageData.header} />
      <Content  sections={pageData.secciones} />
      <Footer footer={pageData.footer} />
    </>
  )
}

export default App







