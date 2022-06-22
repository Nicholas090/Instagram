import React, { useState } from 'react';

interface IProps {
	children: React.ReactNode;
	countAllStories: number;
	countMaxStories: number;
	storiesBlockWidth: number;
}

export const CarouselPost = ({
	children,
	countAllStories,
	countMaxStories,
	storiesBlockWidth,
}: IProps) => {
	const [offset, setOffset] = useState<number>(0);

	const ButtonClick = (side: 'left' | 'right'): void => {
		let offsetLength!: 532 | -532;
		if (side === 'left') {
			offsetLength = 532;
		} else if (side === 'right') {
			offsetLength = -532;
		}
		const newOffset = offset + offsetLength;
		const maxOffset = (countAllStories - countMaxStories) * storiesBlockWidth;
		setOffset(Math.max(newOffset, -maxOffset));
	};
	return (
		<div style={{ display: 'flex' }}>
			<div className="main-container-post">
				<div className="window-post">
					<div className="all-items-post" style={{ transform: `translateX(${offset}px)` }}>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
