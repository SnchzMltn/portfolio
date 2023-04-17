import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import linkedIn from '../../static/icons/linkedin-original.svg';
import github from '../../static/icons/github.svg';
import gmail from '../../static/icons/google-gmail.svg';


function ContactFromContent() {

	return(
		<div className="ContactFormContent">
			<Box sx={{ marginLeft: '15px'  }}>
				<br />
				<br />
				<Typography align='center' variant='h1'>
					Contact
				</Typography>
				<Typography align='left' variant='h4'>
					I'd like to hear from you!
				</Typography>
				<Typography align='left' variant='body1'>
					I'm currently open for work, please let me know via any of the channels below if you're intersted in working together!
				</Typography>
				<br />
				<Stack direction="row" alignItems="center" spacing={2} >
					<React.Fragment>
						<a href='https://www.linkedin.com/in/miltonsanchezm/'>
							<img src={linkedIn} height='40px' width='40px' alt='LinkedIn'/>
						</a>
					</React.Fragment>
					<React.Fragment>
						<a href='https://github.com/SnchzMltn'>
							<img src={github} alt='Github' height='40px' width='40px' />
						</a>
					</React.Fragment>
					<React.Fragment>
						<a href='mailto:snchzmltn1994@gmail.com'>
							<img src={gmail} alt='Mail' height='40px' width='40px' />
						</a>
					</React.Fragment>
				</Stack>
			</Box>
		</div>
	);
}

export default ContactFromContent;