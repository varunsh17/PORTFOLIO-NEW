import './App.css';
import Navigation from './components/navigation';
import Homepage from './components/homepage';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Projects from './components/projects';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>

    
    </div>
  );
}

export default App;
