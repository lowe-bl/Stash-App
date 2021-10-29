import Header from "./components/header";
import Footer from "./components/footer"

const { default: Homepage } = require("./pages/home");



function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
  
   
  
}

export default App;
