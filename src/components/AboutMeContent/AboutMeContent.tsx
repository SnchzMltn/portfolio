import { Accordion, AccordionDetails, AccordionSummary, Typography, Card, CardActionArea, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import './AboutMeContent.css';
import { XP } from '../../static/xp.js';
import { PROFESSIONAL_PROFILE } from '../../static/constants';
import CardContent from '../CardContent/CardContent';

function AboutMeContent() {
	const [toggle, setToggle] = useState(false)
	const [displayDetails, setDisplayDetails] = useState([{}]);

	return (
		<div className="AboutMeContent">

			<br/>
			<br/>

			<Typography variant="h1" align="center">
						Milton Sanchez
			</Typography>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography variant="h2">
						Experience
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box sx={{ maxWidth: '90%' }}>
						{XP.map(object => {
							return (<Card variant="outlined">
								<CardActionArea key={object.index} onClick={() => {
									setToggle(!toggle)
									setDisplayDetails(prevState => {
										let newState: {}[]
										if (prevState[object.index]) {
											delete prevState[object.index]
											newState = { ...prevState, [object.index]: !prevState[object.index] }
										} else {
											newState = { ...prevState, [object.index]: toggle }
										}
										return { ...newState }
									})
								}}>
									<Typography variant="h5" component="div" className="AccorAccordionDetailsTypographyTitle">
										{object.role} - {object.company}
									</Typography>
									{
									  displayDetails[object.index] ?
									    <CardContent 
										    role={object.role} 
											company={object.company} 
											description={object.description} 
											tools={object.tools} 
											extra_tools={object.extra_tools || []} 
											dates={object.dates} /> : null
									}
								</CardActionArea>
							</Card>)
						})}
					</Box>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography variant="h2">
						Professional profile
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						{PROFESSIONAL_PROFILE}
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AboutMeContent;
