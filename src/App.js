
import './App.css';
import Home from "./Pages/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <section>
        <Header />
       
          <Home />
       <Footer />
      </section>
    </div>
  );
}

export default App;
