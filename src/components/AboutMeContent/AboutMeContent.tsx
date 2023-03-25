import { Accordion, AccordionDetails, AccordionSummary, Typography, Card, CardActionArea, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import './AboutMeContent.css';
import prof_img from '../../static/img_prof_2048.jpeg';
import { PROFESSIONAL_PROFILE } from '../../static/constants';
import Timeline from '../Timeline/Timeline';

function AboutMeContent() {
	const [toggle, setToggle] = useState(false)
	const [displayDetails, setDisplayDetails] = useState([{}]);

	return (
		<div className="AboutMeContent">

			<br/>
			<br/>
			<br/>
			<br/>

			<Typography variant="h1" align="center">
				Milton Sanchez
			</Typography>
			<br/>

			<Typography variant="h2" align="center">
				Fullstack Software Engineer
			</Typography>

			<div className="ProfilePhotoImage">
				<img src={prof_img} alt="hi!" width="240" height="240" />
			</div>

			<br/>
			<br/>

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
					<Timeline />
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
