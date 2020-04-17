import React from 'react'
import CreateProjectForm from './CreateProjectForm';
import './index.css'

function App (props) {
	return (
	  <div className="container mt-5">
	    <div className="display-4 mb-5">Create new project</div>
	    <CreateProjectForm />
	  </div>
	);
};

export default App;
