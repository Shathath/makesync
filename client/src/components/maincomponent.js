import React from 'react';
import Projects from './projects';
import KanbanBoard from './kanbanboard'

export default function MainComponent(props){
	const {name} = props;
	if(name === 'projects')
		return <Projects />
	else if(name ==='kanbanboard')
		return <KanbanBoard />
	else if(name == 'projectdetails')
		return <KanbanBoard />
	else	
		return null
}