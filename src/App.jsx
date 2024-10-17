import './App.css'
import Header from "./layouts/Header.jsx";
import About from "./layouts/About.jsx";
import EduAndSkills from "./layouts/EduAndSkills.jsx";
import Projects from "./layouts/Projects.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
    return (
        <div className='bg-primary min-h-screen w-screen'>
            <Header />
            <About />
            <EduAndSkills />
            <Projects />
            <Footer />
        </div>
    )
}


export default App
