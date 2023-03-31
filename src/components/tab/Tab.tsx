import * as React from 'react';
import { Tab as MUITab, Tabs as MUITabs, Box } from '@mui/material';
import './tab.css';
import Menu from '../menu/Menu'

export interface TabProps {
	labels?: string[];
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onTabClick?: (index: number) => void;
}

export default function Tab({ 
	labels,
	onClick,
	onTabClick,
	...props }: TabProps) {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleTabClick = (index: number) => {
		onTabClick && onTabClick(index);
	};

	return (
		<Box>
			<MUITabs
				value={value}
				onChange={handleChange}
				textColor="primary"
				indicatorColor="primary"
				aria-label="primary tabs"
				sx={{
					borderBottom: 1,
					borderColor: 'divider',
					display: 'inline-flex'
				}}
			>
				{labels &&
					labels.length > 0 &&
					labels.map((label, index) => (
						<MUITab
							key={label}
							value={index}
							label={label}
							sx={{ textTransform: 'none' }}
							onClick={(event) => {
								handleTabClick(index);
								onClick && onClick(event);
							}}
						/>
					))}
			</MUITabs>
		</Box>
	);
}
