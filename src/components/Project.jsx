import { useState } from "react";
import Arrow from '../assets/arrow-right.svg';

// eslint-disable-next-line react/prop-types
const Project = ({ picture, projectName = "Project Name", projectDetails, projectUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    
    return (
        <div className='card text-white bg-secondary p-3 w-1/5 rounded-lg flex flex-col items-center justify-end'>
            <img src={picture} alt="" className='object-cover aspect-4/3'/>
            <h2 className='font-semibold text-2xl m-2'>
                {projectName}
            </h2>

            {/*TODO: Make modal for See Details*/}
            <button
                className='px-1 hover:px-0 w-full flex flex-row items-end justify-end duration-300'
                onClick={toggleModal}
            >
                See Details <img src={Arrow} alt=""/>
            </button>

            {/*Modal Component*/}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white shadow-2xl text-black p-6 rounded-lg w-1/3">
                        <img src={picture} alt="" className='w-full mb-3'/>
                        <h2 className="font-semibold text-xl mb-4">{projectName}</h2>
                        <p>{projectDetails}</p>
                        <div className="flex items-center justify-end mt-4 gap-3">
                            <button className='bg-utils hover:bg-emerald-700 duration-300 px-4 py-2 rounded text-white'>
                                <a href={projectUrl} className=''>
                                    See Repository
                                </a>
                            </button>

                            <button
                                className="px-4 py-2 bg-secondary hover:bg-black duration-300 text-white rounded"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;