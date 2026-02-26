import './App.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import pageData from "./pageData.json"


function App() {

  return (
    <>
      <Header titulos={pageData.header.titulos} botones={pageData.header.botones} />
      <Content  sections={pageData.secciones} />
      <Footer footer={pageData.footer} />
    </>
  )
}

export default App







