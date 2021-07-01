
import './App.css';
import Home from "./Pages/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { Link, Switch, Route } from "react-router-dom"
import Cart from "./Pages/Cart"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <Switch>
            
          <Route path="/cart" ><Cart /> </Route>
          <Route exact path="/"><Home /></Route>
       </Switch>
          
       <Footer />
      </section>
    </div>
  );
}

export default App;
