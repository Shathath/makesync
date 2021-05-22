import React from 'react';


export default function Icons (props){
	function getIcons(name,props){
		switch(name){
			case 'LIST':
				return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="9" y1="6" x2="20" y2="6" />
				<line x1="9" y1="12" x2="20" y2="12" />
				<line x1="9" y1="18" x2="20" y2="18" />
				<line x1="5" y1="6" x2="5" y2="6.01" />
				<line x1="5" y1="12" x2="5" y2="12.01" />
				<line x1="5" y1="18" x2="5" y2="18.01" />
			  </svg>)
			case 'KANBAN':
				return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-kanban" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="4" y1="4" x2="10" y2="4" />
				<line x1="14" y1="4" x2="20" y2="4" />
				<rect x="4" y="8" width="6" height="12" rx="2" />
				<rect x="14" y="8" width="6" height="6" rx="2" />
			  </svg>)
			case 'CALENDAR':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<rect x="4" y="5" width="16" height="16" rx="2" />
						<line x1="16" y1="3" x2="16" y2="7" />
						<line x1="8" y1="3" x2="8" y2="7" />
						<line x1="4" y1="11" x2="20" y2="11" />
						<rect x="8" y="15" width="2" height="2" />
					</svg>
				)
			case 'GEAR':
				return(
					<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings"  viewBox="0 0 24 24" strokeWidth="1.5"  fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
  							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  							<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  							<circle cx="12" cy="12" r="3" />
					</svg>
				)
			case 'PLUS':
				return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
  					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  					<line x1="12" y1="5" x2="12" y2="19" />
  					<line x1="5" y1="12" x2="19" y2="12" />
				</svg>)
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