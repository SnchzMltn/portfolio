import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { Timeline as TimelineC, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import React from 'react';
import { XP } from '../../static/xp';
import './Timeline.css';

function Timeline() {
	const [xpArray, setXpArray] = React.useState([]);
	const handleOpen = () => {
		setXpArray(prevState => {
			console.log(xpArray);
			console.log()
			return [...prevState];
		});
	};
	const handleClose = () => {
		setXpArray(arr => [...arr]);
	};

	return (
		<div className="Timeline">
			<TimelineC position='alternate'>
				{XP.map(item => {
					return (
						<TimelineItem>
							<TimelineSeparator>
							<TimelineDot />
							<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Button key={item.index} onClick={handleOpen}>
									{item.dates}
									<br />
									{item.role} @ ({item.company})
								</Button>
								<Dialog
									open={xpArray[item.index]}
									onClose={handleClose}
								>
									<Typography variant='h3' className='modal-header'>
										{item.dates} - {item.company} - {item.role}
									</Typography>
									<Typography variant='body2'>
										{item.description}
										{item.tools.map(tool => {
											return (
												<li>{tool}</li>
											)
										})}
									</Typography>
								</Dialog>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</TimelineC>
		</div>
	);
}

export default Timeline;