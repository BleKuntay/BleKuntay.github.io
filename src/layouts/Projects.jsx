import Project from "../components/Project.jsx";
import SamplePic from '../assets/sample-project.png';
import ARWayangGolek from '../assets/ar-wayang-golek.jpg';
import ARAnimalCard from '../assets/ar-animal-card.jpg';
import PhotoBox from '../assets/PhotoBox.png';
import Calmind from '../assets/Calmind.jpg';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10 gap-5 text-white'>
            <h1 className='text-5xl font-semibold tracking-wide'>Projects</h1>
            <div className="flex flex-row justify-center gap-3">
                <Project picture={PhotoBox}
                         projectName="PhotoBox"
                         projectDetails="PhotoBox is a photo storage application that allows users to securely upload, store, and manage their photos. It is built using a modern tech stack that includes React for the frontend, Tailwind CSS for styling, Express.js for the backend, PostgreSQL for the database, and AWS for cloud storage."
                         projectUrl="https://github.com/BleKuntay/photobox"
                />
                <Project picture={ARAnimalCard}
                         projectName="AR Animal Card"
                         projectDetails="AR Animal Card is a group project application that utilizes augmented reality (AR) technology, developed using Unity and Vuforia. The app allows users to scan animal cards equipped with special markers using their mobile devices. Upon scanning the card, a corresponding 3D model of the animal will appear, providing an interactive and immersive experience."
                         projectUrl="https://github.com/BleKuntay/AR-Animal-Card"
                />
                <Project picture={ARWayangGolek}
                         projectName="AR Wayang Golek"
                         projectDetails="AR Wayang Golek is an individual project that leverages augmented reality (AR) technology, developed using Unity and Vuforia. The app allows users to experience the traditional Indonesian art of Wayang Golek in an interactive way by scanning markers to bring 3D models of Wayang Golek characters to life."
                         projectUrl="https://binusianorg-my.sharepoint.com/personal/riki_dougall_binus_ac_id/_layouts/15/guestaccess.aspx?share=Eh31nOK70QVMo3JWMHuMTHQBhmVll3rvkmx7Ki3IRUy-Ow&e=gHc1Sq"
                />
                <Project picture={Calmind}
                         projectName="Calmind"
                         projectDetails="Calmind is a mental health support application. The main features are Motivation, Talk Mind, and Talk Therapy. This is a group project, i am responsible for creating UI using React.js for Dashboard, Motivation, and Talk Therapy."
                         projectUrl="https://github.com/Richardrflsn/calmind-website.git"
                />
            </div>
        </div>
    );
}

export default Projects;