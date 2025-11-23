import { useState} from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined, 
    // undefined" there is no projects 
    // null : there is a projects but not selected
    projects: [],
  });

  

  function handleStartAddProject(){
    setProjectState(pre => {
      return {
        ...pre,
        selectedProjectId: null,
      }
    });
  }


  function handleAddProject(projectDate){
    setProjectState(pre =>{
      const newProject = {
        ...projectDate,
        id: Math.random()
      };
      return {
        ...pre,
        project: [...pre.projects,newProject]
      };
    });
  }

  console.log(projectState);

  let content ;
  if (projectState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  if (projectState.selectedProjectId === null)
     content = <NewProject onAdd={handleAddProject}/>
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar  onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}
 
export default App;
