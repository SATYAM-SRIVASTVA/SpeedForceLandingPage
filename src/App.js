import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/services';
import Story from './Components/Story/Story';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/NavBar/navbar';
import Bikeservice from './Components/BikeService/bikeservice';
import Excellent from './Components/Excellent/excellent';
import Form from './Components/Form/form';

function App() {
  return (
    <>
    <Navbar/>
    <Bikeservice/>
    <Excellent/>
    <Cards/> 
    <Story/> 
    <Services/> 
      <Footer/>
      {/* <Form/> */}
    </>
  );
}

export default App;
