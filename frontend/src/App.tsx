
// import "./App.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { MainRoutes } from "./Routes/MainRoutes";


function App() {
  return (
    <div className="App">
       <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
