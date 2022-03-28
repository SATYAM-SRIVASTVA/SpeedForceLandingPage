import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Services from './Components/services';
import Story from './Components/Story';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}
    <Cards/>
    <Story/>
     <Services/>
    <Footer/> 
    </>
  );
}

export default App;
