import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer"
import AddExpense from "./pages/add-expense";

const { default: Homepage } = require("./pages/home");



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/add-expense' component={AddExpense} />
      </Switch>
      
      <Footer />
    
    </Router>
  
  )
  
   
  
}

export default App;
