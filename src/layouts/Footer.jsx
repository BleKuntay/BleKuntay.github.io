import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Mail from '../assets/mail.svg';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-3 mt-10">
            <div className="container mx-auto flex flex-col items-center justify-between">
                <div className="text-center">
                    <p className="text-lg font-semibold">Riki McDougall</p>
                    <p>Undergraduate Computer Science Student</p>
                </div>

                <div className="flex flex-row gap-4 mt-2">
                    <a href="https://github.com/BleKuntay" className="hover:underline" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="Github" className='w-10 bg-black p-1 rounded-lg hover:bg-gray-900 duration-300'/>
                    </a>
                    <a href="https://linkedin.com/in/rikimcdougall" className="hover:underline" target="_blank"
                       rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" className='w-10 bg-black p-1 rounded-lg hover:bg-gray-900 duration-300'/>
                    </a>
                    <a href="mailto:riki.dougall@binus.ac.id" className="hover:underline">
                        <img src={Mail} alt="Mail" className='w-10 bg-black p-1 rounded-lg hover:bg-gray-900 duration-300'/>
                    </a>
                </div>

                <div className="mt-2 text-sm text-gray-400">
                    <p>&copy; 2024 Riki McDougall. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
