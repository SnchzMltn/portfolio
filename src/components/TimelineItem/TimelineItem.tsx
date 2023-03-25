import './TimelineItem.css';

function TimelineItem(item: any) {
	return (
		<div className="Timeline">
			<p>
				{console.log(typeof(item))}
				I was a {item.props.role} during {item.props.dates}
			</p>
		</div>
	);
}

export default TimelineItem;