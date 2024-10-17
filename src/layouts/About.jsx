import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Phone from '../assets/phone.svg';
import Mail from '../assets/mail.svg';
import Profile from '../assets/Profile.jpg';

const About = () => {
    return (
        <section className='w-full flex flex-col-reverse xl:flex-row mb-10 mt-5'>
            <div className='w-full xl:w-[60%] px-5 xl:px-20 flex flex-col items-start justify-center text-gray-300'>
                <h1 className='text-4xl xl:text-6xl text-white font-semibold tracking-wide mb-5'>About Me</h1>
                <h3 className='text-xl xl:text-2xl'>Hello, I am</h3>
                <h2 className='text-2xl xl:text-3xl my-3 tracking-wider text-white font-semibold'>Riki<br/>McDougall</h2>
                <p className='text-base xl:text-2xl'>
                    I am an undergraduate Computer Science student at Bina Nusantara University.<br/>
                    I am also interested in <span className='text-utils'>Web Development</span> and <span
                    className='text-utils'>Internet of Things</span>.<br/>
                    I always seek to improve my skills and love learning new things, especially in technology.<br/>
                    Additionally, I enjoy working in a team.
                </p>
            </div>
            <div className='w-full xl:w-[40%] flex flex-col items-center justify-center gap-10'>
                <div className="rounded-full w-[70%] xl:w-[50%] mb-5 xl:mb-0 aspect-square flex items-center justify-center p-1 shadow-xl bg-gray-500">
                    <img src={Profile} alt="" className='rounded-full'/>
                </div>
            </div>
        </section>
    );
}

export default About;