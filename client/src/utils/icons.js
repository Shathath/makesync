import React from 'react';


export default function Icons (props){
	function getIcons(name,props){
		switch(name){
			case 'LIST':
				return (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="9" y1="6" x2="20" y2="6" />
				<line x1="9" y1="12" x2="20" y2="12" />
				<line x1="9" y1="18" x2="20" y2="18" />
				<line x1="5" y1="6" x2="5" y2="6.01" />
				<line x1="5" y1="12" x2="5" y2="12.01" />
				<line x1="5" y1="18" x2="5" y2="18.01" />
			  </svg>)
			case 'KANBAN':
				return (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-kanban" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="4" y1="4" x2="10" y2="4" />
				<line x1="14" y1="4" x2="20" y2="4" />
				<rect x="4" y="8" width="6" height="12" rx="2" />
				<rect x="14" y="8" width="6" height="6" rx="2" />
			  </svg>)
			case 'CALENDAR':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<rect x="4" y="5" width="16" height="16" rx="2" />
						<line x1="16" y1="3" x2="16" y2="7" />
						<line x1="8" y1="3" x2="8" y2="7" />
						<line x1="4" y1="11" x2="20" y2="11" />
						<rect x="8" y="15" width="2" height="2" />
					</svg>
				)
			default :
				return null
		}
		
	}
	return (
		<React.Fragment>
			{getIcons(props.name,props)}
		</React.Fragment>
	)
}