import React, { useState } from 'react';

interface IProps {
	children: React.ReactNode;
	countAllStories: number;
	countMaxStories: number;
	storiesBlockWidth: number;
}

export const Carousel = ({
	children,
	countAllStories,
	countMaxStories,
	storiesBlockWidth,
}: IProps) => {
	const [offset, setOffset] = useState<number>(0);
	return (
		<div style={{ display: 'flex' }}>
			<div className="main-container">
				<div className="window">
					<div className="all-items" style={{ transform: `translateX(${offset}px)` }}>
						{children}
					</div>
				</div>
			</div>
			<div className={'carouselRightButtonWrapper'}>
				<div
					className={'carouselRightButton'}
					onClick={() =>
						setOffset((currentOffset) => {
							const newOffset = currentOffset - 115;
							const maxOffset = (countAllStories - countMaxStories) * storiesBlockWidth;
							return Math.max(newOffset, -maxOffset);
						})
					}
				>
					<svg
						width="20"
						height="36"
						viewBox="0 0 20 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18.9735 16.3961L18.9733 16.3959L3.55764 1.02285L3.55753 1.02275C2.85697 0.32453 1.72287 0.325803 1.02367 1.02627L1.02355 1.02638C0.324549 1.7271 0.326508 2.8619 1.02707 3.56057L1.02708 3.56058L15.1701 17.6646L1.02657 31.7685L1.0265 31.7686C0.326067 32.4673 0.324108 33.6015 1.02299 34.3023L1.02315 34.3024C1.37332 34.6532 1.83336 34.829 2.29207 34.829C2.74948 34.829 3.20782 34.6544 3.55747 34.3059L3.55757 34.3058L18.9729 18.9336C18.973 18.9335 18.9731 18.9334 18.9733 18.9332C19.3109 18.5971 19.5 18.1402 19.5 17.6646C19.5 17.1882 19.31 16.732 18.9735 16.3961Z"
							fill="black"
							stroke="black"
						/>
					</svg>
				</div>

				{/*<button />*/}
			</div>
		</div>
	);
};
