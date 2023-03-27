import './App.css';
import Progress_bar from './skills';

function Skills() {
return (
	
<div className="App">
	<h2 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Skills</h2>
	<br></br>
	<Progress_bar bgcolor="orange" progress='85' height={30} Name = 'html'/>
	<Progress_bar bgcolor="red" progress='90' height={30} Name = 'C++'/>
	<Progress_bar bgcolor="#99ff66" progress='70' height={30} Name = 'Java'/>
	<Progress_bar bgcolor="#ff00ff" progress='88' height={30} Name = 'Javascript'/>
	<Progress_bar bgcolor="#99ccff" progress='75' height={30} Name = 'Python'/>
	<Progress_bar bgcolor="grey" progress='90' height={30} Name = 'CSS'/>
</div>
	
);
}

export default Skills;
