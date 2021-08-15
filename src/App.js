import './App.css';
import Home from "./Pages/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer"
import { Switch, Route } from "react-router-dom"
import Cart from "./Pages/Cart"
import StoreProvider from "./store/StoreProvider"
function App() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}

export default App;
