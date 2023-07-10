import { Accordion, AccordionDetails, AccordionSummary, Typography, Paper } from '@material-ui/core';
import { Stack, Divider } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AboutMeContent.css';
import prof_img from '../../static/img_prof_2048.jpeg';
import { PROFESSIONAL_PROFILE } from '../../static/constants';
import Timeline from '../../components/Timeline/Timeline';

function AboutMeContent() {

	return (
		<div className='AboutMeContent'>

			<br/>
			<br/>
			<br/>
			<br/>

			<Typography variant='h1' align='center'>
				Milton Sanchez
			</Typography>
			<br/>

			<Typography variant='h2' align='center'>
				Fullstack Software Engineer
			</Typography>

			<div className='ProfilePhotoImage'>
				<img src={prof_img} alt='hi!' width='240' height='240' />
			</div>

			<br/>
			<br/>

			<Typography variant='h2' align='center'>
				#OpenToWork
			</Typography>

			<br/>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography variant='h2' align='center'>
						Services
					</Typography>
				</AccordionSummary>
						<Stack sx={{
							paddingLeft: '25em',
							width: '50%',
						}} align='center' spacing={2} >
							<Paper sx={{
								maxWidth: '50%'
							}} elevation={6}>
								<Typography variant='h5' align='center'>
									Consulting
								</Typography>
								<Divider width='50%' sx={{ margin: '5px' }} />
								<Typography variant='body2'>
									I am currently available for consulting jobs.
								</Typography>
							</Paper>
							<Paper elevation={6}>
								<Typography variant='h5' align='center'>
									Tutoring / Workshops
								</Typography>
								<Divider width='50%' sx={{ margin: '5px' }} />
								<Typography variant='body2'>
									If you need help with your technical classes, projects, ideas, and you want to have a chat, reach out to me!
								</Typography>
							</Paper>
						</Stack>
				<AccordionDetails>

				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography variant='h2' align='center'>
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
				>
					<Typography variant='h2' align='center'>
						Professional profile
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Paper elevation='3'>
						<Typography alignText='center' variant='body1'>
							{PROFESSIONAL_PROFILE}
						</Typography>
					</Paper>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AboutMeContent;
