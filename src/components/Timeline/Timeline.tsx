import { XP } from '../../static/xp.js';
import TimelineItem from '../TimelineItem/TimelineItem';
import './Timeline.css';

function Timeline() {
	return (
		<div className="Timeline">
			{
				XP.map(object => {
					return (
						<TimelineItem key={object.index} props={object} />
					)
				})
			}
		</div>
	);
}

export default Timeline;