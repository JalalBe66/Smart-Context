import react from "react"
import Header from "./Component/header"
import Accueil from "./Accueil"
import "./styleCSS/App.css"
import Footer from "./Component/footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Accueil/>
      <Footer/>
    </div>
  );
}

export default App;
