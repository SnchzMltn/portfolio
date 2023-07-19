import { Accordion, AccordionDetails, AccordionSummary, Typography, Paper, List, ListItem, Box } from '@material-ui/core';
import { Stack, Divider, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AboutMeContent.css';
import prof_img from '../../static/img_prof_2048.jpeg';
import { PROFESSIONAL_PROFILE } from '../../static/constants';
import Timeline from '../../components/Timeline/Timeline';

type Skill = {
	name: string,
	rate: number,
	progress: number,
}

const skillsArray: Skill[] = [
	{name: "Java (JDK 8+)", rate: 5, progress: 100},
	{name: "Python", rate: 4, progress: 80},
	{name: "Relational Database (SQL)", rate: 5, progress: 100}, 
	{name: "Non-relational Database (NoSQL)", rate: 4, progress: 80}, 
	{name: "React", rate: 3.5, progress: 75}, 
	{name: "HTML5/CSS3", rate: 5, progress: 100},
	{name: "AWS", rate: 4, progress: 80},
	{name: "GCP", rate: 3.5, progress: 75},
]

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

			<Box sx={{ paddingLeft: '25em', width: '50%' }}>
				<Paper elevation={3}>
					<List>
						{skillsArray.map((skill) => {
							return <Stack direction='row' sx={{
								paddingTop: '0.15em',
								paddingBottom: '0.15em',
								paddingLeft: '10em',
								width: '60%',
								}}  spacing={2}>
									<ListItem>{skill.name}</ListItem>
									<CircularProgress variant='determinate' value={skill.progress} />
							</Stack>;
						})}
					</List>
				</Paper>
			</Box>
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
						}} spacing={2} >
							<Paper elevation={6}>
								<Typography variant='h5' align='center'>
									Consulting
								</Typography>
								<Divider sx={{ margin: '5px', width:'100%' }} />
								<Typography align='center' variant='body2'>
									I am currently available for consulting jobs.
								</Typography>
							</Paper>
							<Paper elevation={6}>
								<Typography variant='h5' align='center'>
									Tutoring / Workshops
								</Typography>
								<Divider sx={{ margin: '5px', width:'100%' }} />
								<Typography variant='body2' align='center'>
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
					<Paper elevation={3}>
						<Typography align='center' variant='body1'>
							{PROFESSIONAL_PROFILE}
						</Typography>
					</Paper>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AboutMeContent;
