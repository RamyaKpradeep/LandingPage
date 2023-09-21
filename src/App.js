import Contact from './Contact';
import './App.css';
import About from './About';
import Home from './Home';
import Testimonial from './Testimonial';
import Work from './Work';
import Login from './Login';
import Register from './Register'

function App() {
  return (
    <div>
     <Home />
     <About /> 
     <Contact />
     <Testimonial />
     <Work/>
     <Login />
     <Register />
    </div>
  );
}

export default App;
