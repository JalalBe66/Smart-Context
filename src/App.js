import react from "react"
import Service1 from "./Service1"
import Form from "./stepForm/form"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Accueil from "./Accueil"
import "./styleCSS/App.css"
import Footer from "./Component/footer"
import Header from "./Component/header"
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="Service1" element={<Service1/>}/>
          <Route path="Service2" element={<Form/>}/>
          <Route path="FAQ" element={<FAQ/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
