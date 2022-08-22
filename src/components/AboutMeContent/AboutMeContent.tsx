import { Accordion, AccordionDetails, AccordionSummary, Typography, Card, CardContent, CardActionArea, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './AboutMeContent.css';

function AboutMeContent() {

	return (
		<div className="AboutMeContent">
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
					<Box sx={{maxWidth: '50%'}}>
						<Card variant="outlined" >
						<CardActionArea>
							<CardContent>
								<Typography variant="h2" component="div" className="AccorAccordionDetailsTypographyTitle">
									Technical Support Engineer - Twilio, Inc
								</Typography>
								<Typography>
									Several tasks performed, mainly focused on providing support in Levels 1, 2 and occasionally 3, within a 6-member team in charge of technically supporting the account security products developed and maintained in Colombia.
									End-user support is provided, aswell as developer and personalized (custom) support for implementations of the Authy API in order to provide MFA solutions for applications already on production stage. Several software solutions are used on a daily basis including:
									<ul>
										<li>Kibana</li>
										<li>DataDog</li>
										<li>PagerDuty</li>
										<li>Slack</li>
										<li>Postman</li>
										<li>Ngrok</li>
										<li>Development tools</li>
									</ul>
									<h3>
										April 23th 2018 - 01 October
									</h3>
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
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
						Proyects
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Graduated professional from the EAN University with a degree in Systems Engineering. Skills in functional programming, and advanced knowledge in Object Oriented Programming, specifically on design and abstraction. With knowledge of full-stack elements suchas MVVC architecture and database administration. High familiarity with different languages such as Java, C#, Python PL-SQL, PHP and also with different development environments (IDEs) such as Eclipse, Visual Studio 2017, .NET, PLSQL Developer and Yii. Experience in developing applications for Android and familiarity with data structures, algorithms and version management tools such as GIT and TFS. Excellent interpersonal skills and problem-solving oriented as well as a history with unique and original solutions throughout creativity. Consolidating more than three years of experience working in the complete software lifecycle including planning, consultancy, customer requirements definition, functional design, software development, testing, quality assurance (QA), implementation and maintenance.
          				</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default AboutMeContent;