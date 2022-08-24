import AllRoutes from './All Routes/Routes';
import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
