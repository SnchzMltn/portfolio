import { Accordion, AccordionDetails, AccordionSummary, Typography, Paper, List, ListItem, Box } from '@material-ui/core';
import { Stack, Divider, LinearProgress } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AboutMeContent.css';

import prof_img from '../../static/img_prof_2048.jpeg';

import javaLogo from '../../static/icons/java.svg';
import pythonLogo from '../../static/icons/python.svg';
import sqlLogo from '../../static/icons/sql.svg';
import mongoLogo from '../../static/icons/mongodb.svg';
import reactLogo from '../../static/icons/react.svg';
import html5Logo from '../../static/icons/html5.svg';
import awsLogo from '../../static/icons/aws.svg';
import googleLogo from '../../static/icons/google.svg';

import { PROFESSIONAL_PROFILE } from '../../static/constants';

import Timeline from '../../components/Timeline/Timeline';

type Skill = {
	name: string,
	rate: number,
	progress: number,
	logo: any,
}

const skillsArray: Skill[] = [
	{name: "Java (JDK 8+)", rate: 5, progress: 100, logo: javaLogo},
	{name: "Python", rate: 4, progress: 80, logo: pythonLogo},
	{name: "Relational Database (SQL)", rate: 5, progress: 100, logo: sqlLogo}, 
	{name: "Non-relational Database (NoSQL)", rate: 4, progress: 80, logo: mongoLogo}, 
	{name: "React", rate: 3.5, progress: 75, logo: reactLogo}, 
	{name: "HTML5/CSS3", rate: 5, progress: 100, logo: html5Logo},
	{name: "Amazon Web Services", rate: 4, progress: 80, logo: awsLogo},
	{name: "Google Cloud Platform", rate: 3.5, progress: 75, logo: googleLogo},
]

function AboutMeContent() {

	return (
		<div className='AboutMeContent'>

			<br/>
			<br/>
			<br/>

			<Typography variant='h3' align='center'>
				Fullstack Software Engineer
			</Typography>

			<div className='ProfilePhotoImage'>
				<img src={prof_img} alt='hi!' width='240' height='240' />
			</div>

			<br/>
			<br/>

			<Typography variant='h4' align='center'>
				#OpenToWork
			</Typography>

			<br/>

			<Box sx={{ marginLeft: '25%', width: '50%' }}>
				<Paper>
					<List>
						{skillsArray.map((skill) => {
							return <>
								<Stack direction='row' sx={{
									paddingTop: '0.2%',
									paddingBottom: '0.2%',
									marginLeft: 'auto',
									marginRight: 'auto',
								}}  spacing={2}>
									<>
										<ListItem>
											<Box width='100%'>
												<Stack justifyContent='left' direction='row' spacing={2}>
													<Box width='10%'>
														<img alt={skill.name} width='24px' height='24px' src={skill.logo} style={{
															margin: '5px',
														}} />
													</Box>
													<Box width='40%' display='flex' alignItems='center'>
														<Typography  variant='body2' noWrap >
															{skill.name}
														</Typography>
													</Box>
													<Box paddingTop='1.5%' alignItems='right' width='50%'>
														<LinearProgress variant='determinate' value={skill.progress} />
													</Box>
												</Stack>
											</Box>
										</ListItem>
									</>
								</Stack>
								<Divider variant='middle' />
							</>
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
				<AccordionDetails>
					<Stack sx={{
						paddingLeft: '25%',
						width: '50%',
					}} spacing={2} >
						<Paper elevation={6}>
							<Typography variant='h5' align='center'>
								Consulting
							</Typography>
							<Divider sx={{ margin: '1%', width:'100%' }} />
							<Typography align='center' variant='body2'>
								I am currently available for consulting jobs.
							</Typography>
						</Paper>
						<Paper elevation={6}>
							<Typography variant='h5' align='center'>
								Tutoring / Workshops
							</Typography>
							<Divider sx={{ margin: '1%', width:'100%' }} />
							<Typography variant='body2' align='center'>
								If you need help with your technical classes, projects, ideas, and you want to have a chat, reach out to me!
							</Typography>
						</Paper>
					</Stack>
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
