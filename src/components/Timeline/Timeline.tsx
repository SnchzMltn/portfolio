import { DialogContentText, DialogContent, Dialog, Typography, Button } from '@material-ui/core';
import { Timeline as TimelineC, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { XP } from '../../static/xp';
import React from 'react';
import './Timeline.css';

function Timeline() {
	const [open, setOpen] = React.useState(false);
	const [currentItemIndex, setCurrentItemIndex] = React.useState(-1);

	const handleOpen = (index: number) => () => {
		setOpen(() => true);
		setCurrentItemIndex(() => index);
	};

	const handleClose = (_index: number) => () => {
		setOpen(() => false);
		setCurrentItemIndex(() => -1);
	};

	return (
		<div className="Timeline">
			<TimelineC>
				{XP.map((item, i) => {
					return (
						<TimelineItem key={i}>
							<TimelineOppositeContent>
								<Typography variant='subtitle2'>
									{ item.dates }
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color='grey' variant='outlined' />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Button variant='outlined' key={item.index} onClick={handleOpen(item.index)}>
									<Typography variant='body2'>
										{item.role} @ ({item.company})
									</Typography>
								</Button>
							</TimelineContent>
						</TimelineItem>
					);
				})}
				{
					open &&
					<Dialog
						open={open}
						onClose={handleClose(currentItemIndex)}
					>
						<DialogContent>
							<DialogContentText>
								<Typography variant='h3'>
									{ XP[currentItemIndex].company} - {XP[currentItemIndex].role }
								</Typography>
								<Typography variant='h4'>
									{ XP[currentItemIndex].dates }
								</Typography>
								<Typography variant='body1'>
									<Typography variant='body2'>
										{ XP[currentItemIndex].description }
									</Typography>
									<br/>
									{ XP[currentItemIndex].tools? <Typography variant='h5'>Tools used:</Typography>: null }
									{
										<ul>
											{
												XP[currentItemIndex].tools.map(tool => {
													return (
														<li key={tool}>{tool}</li>
													)
												})
											}
											
										</ul>
									}
									<br/>
									{ XP[currentItemIndex].tools? <Typography variant='h5'>Other tools used:</Typography>: null }
									{
										<ul>
											{
												XP[currentItemIndex].extra_tools?.map(tool => {
													return (
														<li key={tool}>{tool}</li>
													)
												})
											}
											
										</ul>
									}
								</Typography>
							</DialogContentText>
						</DialogContent>
					</Dialog>
				}
			</TimelineC>
		</div>
	);
}

export default Timeline;
