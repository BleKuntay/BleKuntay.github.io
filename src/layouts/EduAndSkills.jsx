import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";

const EduAndSkills = () => {
    return (
        <>
        <div className='grid grid-cols-2 gap-10 px-20'>
            <div className="flex flex-col items-center text-gray-200 bg-secondary py-10 rounded-lg shadow-2xl">
                <h2 className='text-6xl font-semibold tracking-wider'>Skills</h2>
                <ul className='grid grid-cols-2 text-center gap-x-8 gap-y-3 mt-3'>
                    <li className='text-utils'><strong className='text-white'>Backend Development</strong><br/>PHP, Node.js, Express.js</li>
                    <li className='text-utils'><strong className='text-white'>Database Management</strong><br/>SQL (MySQL)<br/>noSQL(MongoDB)</li>
                    <li className='text-utils'><strong className='text-white'>Frontend Development</strong><br/>React.js</li>
                    <li className='text-utils'><strong className='text-white'>Version Control</strong><br/>Basic Git, GitHub</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-gray-200 bg-secondary py-10 rounded-lg shadow-2xl'>
                <h2 className='text-6xl font-semibold tracking-wider'>Education</h2>
                <ul className='flex flex-col gap-3 mt-3 text-center'>
                    <li className='text-utils'><strong className='text-white'>Bina Nusantara University</strong><br/>Computer Science | 2022 - now</li>
                    <li className='text-utils'><strong className='text-white'>Mardi Yuana High School Sukabumi</strong><br/>Science | 2019 - 2022</li>
                </ul>
            </div>
            <div className="flex flex-col items-center text-gray-200 bg-secondary py-10 rounded-lg shadow-2xl">
                <h2 className='text-6xl font-semibold tracking-wider'>Soft Skills</h2>
                <ul className='grid grid-cols-2 text-center gap-x-8 gap-y-3 mt-3'>
                    <li>Teamwork</li>
                    <li>Time management</li>
                    <li>Communication</li>
                    <li>Adaptability</li>
                    <li className='col-span-2'>Problem-solving</li>
                </ul>
            </div>
            <div className='flex flex-col items-center text-gray-200 bg-secondary py-10 rounded-lg shadow-2xl'>
                <h2 className='text-6xl font-semibold tracking-wider'>Contact</h2>
                <div className='grid grid-cols-2 gap-3 mt-3 text-center'>
                    <a href="https://www.linkedin.com/in/riki-mcdougall-070350261"
                       className='rounded-lg flex flex-row items-center justify-start gap-3 text-white'>
                        <img src={LinkedIn} alt=""
                             className='bg-blue-700 w-fit p-3 rounded-lg hover:bg-blue-800 hover:transition '/>
                        <span>Riki McDougall</span>
                    </a>
                    <div className="cursor-default flex flex-row items-center justify-start gap-3 text-white">
                        <img src={Mail} alt="" className='bg-black p-3 rounded-lg'/>
                        <span>riki.dougall@binus.ac.id</span>
                    </div>
                    <a href="https://github.com/BleKuntay"
                       className='rounded-lg flex flex-row items-center justify-start gap-3 text-white'>
                        <img src={Github} alt=""
                             className='bg-black w-fit p-3 rounded-lg hover:bg-gray-900 hover:transition'/>
                        <span>Github</span>
                    </a>
                    <div className="cursor-default flex flex-row items-center justify-start gap-3 text-white">
                        <img src={Phone} alt="" className='bg-black p-3 rounded-lg'/>
                        <span>+62 812 6000 4960</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EduAndSkills;