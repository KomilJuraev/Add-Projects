import { useState } from 'react';

import Sidebar from './components/SideBar';
import Home from './components/Home';
import Form from './components/Form';
import ProjectDetails from './components/ProjectDetails';

import './index.css'

let objectIndex = 1;

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayProjectInfo, setDisplayProjectInfo] = useState(false);
  const [formInfo, setFormInfo] = useState([]);
  const [projectInfo, setProjectInfo] = useState({})
  const [projectDeleted, setProjectDeleted] = useState(false);

  function handleDisplayForms() {
    setDisplayForm((prevValue) => !prevValue);
    setDisplayProjectInfo(false);
    setProjectDeleted(false);
  }

  function handleSave(title, description, dueDate) {
    setFormInfo((prevValue) => ([
      ...prevValue,
      { 
        id: objectIndex++,
        title: title, 
        description: description,
        dueDate: dueDate
      }]));
      setDisplayForm(false);
      setProjectDeleted(false);
  }

  function handleProjectTitleClick(projectId) {
    const selectedProject = formInfo.find((eachProject) => eachProject.id === projectId);
    setProjectInfo(selectedProject);    
    setDisplayProjectInfo(true);
    setDisplayForm(false);
    setProjectDeleted(false);
  } 

  function handleDelete(projectId) {
    setFormInfo((prevValue) => prevValue.filter((eachProject) => eachProject.id !== projectId))
    setProjectDeleted(true);
    setDisplayProjectInfo(false);
    setDisplayForm(false);
  }
  
  return (
    <div className='main-div'>
      <Sidebar onSelect={!displayForm && handleDisplayForms} projectList={formInfo} onHandleClick={handleProjectTitleClick} />
      <div className="main-page">
        {!displayForm && !displayProjectInfo && <Home onSelect={handleDisplayForms} deleted={projectDeleted}/>}
        {displayForm && <Form onSelect={handleDisplayForms} onSave={handleSave} />}
        {displayProjectInfo && <ProjectDetails projectInfo={projectInfo} onDelete={handleDelete} />}
      </div>
    </div>
  );
}

export default App;
