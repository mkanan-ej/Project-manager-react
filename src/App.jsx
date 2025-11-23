import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined, 
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
      <ProjectSidebar  onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}
 
export default App;
