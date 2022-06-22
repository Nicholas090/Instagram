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

	// const leftButton = () => {
	// 	setOffset((currentOffset) => {
	// 		const newOffset = currentOffset + 115;
	// 		const maxOffset = (countAllStories - countMaxStories) * storiesBlockWidth;
	// 		return Math.max(newOffset, -maxOffset);
	// 	});
	// };

	const ButtonClick = (side: 'left' | 'right'): void => {
		let offsetLength!: 115 | -115;
		if (side === 'left') {
			offsetLength = 115;
		} else if (side === 'right') {
			offsetLength = -115;
		}
		const newOffset = offset + offsetLength;
		const maxOffset = (countAllStories - countMaxStories) * storiesBlockWidth;
		setOffset(Math.max(newOffset, -maxOffset));
	};
	return (
		<div style={{ display: 'flex' }}>
			<div className="main-container">
				<div className="window">
					<div className="all-items" style={{ transform: `translateX(${offset}px)` }}>
						{children}
					</div>
				</div>
			</div>

			<div className={'carouselButtonWrapper'}>
				<div className={'carouselButton'} onClick={() => ButtonClick('right')}>
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
			{offset >= 0 ? null : (
				<div className={'carouselButtonWrapper'}>
					<div className={'carouselButton'} onClick={() => ButtonClick('left')}>
						<svg
							width="20"
							height="36"
							viewBox="0 0 20 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.02653 18.933L1.02674 18.9332L16.4424 34.3062L16.4425 34.3064C17.1431 35.0046 18.2772 35.0033 18.9764 34.3028L18.9765 34.3027C19.6755 33.602 19.6735 32.4672 18.973 31.7685L18.973 31.7685L4.82991 17.6645L18.9735 3.56061L18.9735 3.56055C19.674 2.86183 19.6759 1.72762 18.977 1.02684L18.9769 1.02668C18.6267 0.675877 18.1667 0.500084 17.708 0.500084C17.2505 0.500084 16.7922 0.67469 16.4426 1.02317L16.4425 1.02326L1.02715 16.3955C1.02702 16.3956 1.0269 16.3957 1.02677 16.3959C0.689123 16.732 0.500033 17.1889 0.500033 17.6645C0.500033 18.1409 0.690048 18.5971 1.02653 18.933Z"
								fill="black"
								stroke="black"
							/>
						</svg>
					</div>

					{/*<button />*/}
				</div>
			)}
		</div>
	);
};
