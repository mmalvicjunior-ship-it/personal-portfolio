import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Newsletter } from "./components/Newsletter.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
