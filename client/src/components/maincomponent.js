import React from 'react';
import Projects from './projects';
import KanbanBoard from './kanbanboard'

export default function MainComponent(props){
	const {name} = props;
	if(name === 'myprojects')
		return <Projects />
	else if(name ==='kanbanboard')
		return <KanbanBoard />
	else	
		return null
}