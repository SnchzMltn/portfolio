import React from "react";
import { CardContent as CardContentC, Typography } from "@material-ui/core";

function CardContent(object: { role: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; company: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; tools: any[]; extra_tools: any[]; dates: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
	return (
		<CardContentC>
			
			<Typography>
				{object.description}

				<ul>
					<h3>Main tools used:</h3>
					{object.tools.map(tool => {
						return (
							<li key={tool}>{tool}</li>
						)
					})}
				</ul>

				{object.extra_tools?.map(extraTool => {
					return (
						<div>
							<ul>
								<li key={extraTool}>{extraTool}</li>
							</ul>
						</div>
					)
				})}

				<h3>{object.dates}</h3>
			</Typography>
		</CardContentC>
	)
}

export default CardContent;