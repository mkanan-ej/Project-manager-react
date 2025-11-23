import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-2 text-center w-2/3 ">
            <img className='w-16 h-16 mx-auto object-contain' src={noProjectImage} alt="empty Projects Image" />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project seleted</h2>
            <p className='text-stone-400 mb-4'>selete a project or create new one.</p>
            <Button onClick={onStartAddProject} children={'create new project'}/>
        </div>
    );
}
