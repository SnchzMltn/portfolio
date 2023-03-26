import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { Timeline as TimelineC, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import React from 'react';
import { XP } from '../../static/xp';
import './Timeline.css';

function Timeline() {
	const [xpArray, setXpArray] = React.useState(new Array(XP.length).fill(false));
	const handleOpen = (index: any) => () => {
		console.debug("executed handle open function!");
		setXpArray(prevState => {
			prevState[index] = true;
			return prevState;
		});
	};

	const handleClose = (index: number) => () => {
		console.debug("executed handle close function!");
		setXpArray(prevState => {
			prevState[index] = false;
			return prevState;
		});
	};

	const expandedElement = xpArray.find(value => { return value === true });

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
								<Button key={item.index} onClick={handleOpen(item.index)}>
									{item.dates}
									<br />
									{item.role} @ ({item.company})
								</Button>
								{xpArray[item.index] &&
										<Dialog
											open={xpArray[item.index]}
											onClose={handleClose(item.index)}
										>
											<Typography variant='h3'>
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
								}
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</TimelineC>
		</div>
	);
}

export default Timeline;
