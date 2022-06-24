interface IIcon {
	active: boolean;
}

export const HomeIcon = ({ active }: IIcon) => {
	if (active) {
		return (
			<svg
				width="43"
				height="40"
				viewBox="0 0 43 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20.4802 1.66031L1.40016 18.8603C1.09016 19.1403 0.910156 19.5403 0.910156 19.9603L0.910156 37.6103C0.910156 38.4303 1.57016 39.0903 2.39016 39.0903H16.6302C16.6602 39.0903 16.6802 39.0703 16.6802 39.0403V31.5103C16.6802 28.9703 18.5302 26.6903 21.0602 26.4703C23.9102 26.2203 26.3002 28.4603 26.3002 31.2603L26.3002 39.0403C26.3002 39.0703 26.3202 39.0903 26.3502 39.0903H39.8002C40.6202 39.0903 41.2802 38.4303 41.2802 37.6103L41.2802 19.9403C41.2802 19.5303 41.1102 19.1403 40.8102 18.8603L22.4802 1.68031C21.9202 1.15031 21.0502 1.15031 20.4802 1.66031Z"
					fill="#262626"
					stroke="#262626"
					strokeWidth="1.5"
					strokeMiterlimit="10"
				/>
			</svg>
		);
	} else {
		return (
			<svg
				width="44"
				height="42"
				viewBox="0 0 44 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21.4802 2.66031L2.40016 19.8603C2.09016 20.1403 1.91016 20.5403 1.91016 20.9603L1.91016 38.6103C1.91016 39.4303 2.57016 40.0903 3.39016 40.0903H17.6302C17.6602 40.0903 17.6802 40.0703 17.6802 40.0403V32.5103C17.6802 29.9703 19.5302 27.6903 22.0602 27.4703C24.9102 27.2203 27.3002 29.4603 27.3002 32.2603L27.3002 40.0403C27.3002 40.0703 27.3202 40.0903 27.3502 40.0903H40.8002C41.6202 40.0903 42.2802 39.4303 42.2802 38.6103L42.2802 20.9403C42.2802 20.5303 42.1102 20.1403 41.8102 19.8603L23.4802 2.68031C22.9202 2.15031 22.0502 2.15031 21.4802 2.66031Z"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
			</svg>
		);
	}
};

export const ReelsIcon = ({ active }: IIcon) => {
	if (active) {
		return (
			<svg
				width="41"
				height="41"
				viewBox="0 0 41 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="1.5"
					y="1.5"
					width="37.37"
					height="37.37"
					rx="6.5"
					fill="#262626"
					stroke="#EFEFEF"
					strokeWidth="3"
				/>
				<line
					x1="1.05707"
					y1="11.4254"
					x2="38.7973"
					y2="10.9217"
					stroke="#EFEFEF"
					strokeWidth="3"
				/>
				<line x1="22.1777" y1="1.22039" x2="28.839" y2="11.2967" stroke="#EFEFEF" strokeWidth="2" />
				<line
					x1="10.1465"
					y1="0.995328"
					x2="17.1461"
					y2="11.4261"
					stroke="#EFEFEF"
					strokeWidth="2"
				/>
				<path
					d="M27.3022 23.7318C27.9748 24.1062 27.9899 25.0683 27.3294 25.4637L17.7901 31.173C17.1295 31.5684 16.2887 31.1004 16.2766 30.3307L16.1018 19.2147C16.0897 18.445 16.9154 17.9509 17.588 18.3252L27.3022 23.7318Z"
					fill="#EFEFEF"
				/>
			</svg>
		);
	} else {
		return (
			<svg
				width="38"
				height="38"
				viewBox="0 0 38 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20.7113 2.99951H12.1036L15.9955 8.7991L24.4706 8.68599L20.7113 2.99951ZM8 2.99951H9.69505L13.6083 8.83096L3 8.97255V7.99951C3 5.23809 5.23858 2.99951 8 2.99951ZM23.1088 2.99951L26.8471 8.65427L34.48 8.55239V7.99951C34.48 5.23809 32.2414 2.99951 29.48 2.99951H23.1088ZM3 29.4795V11.9728L34.48 11.5527V29.4795C34.48 32.2409 32.2414 34.4795 29.48 34.4795H8C5.23858 34.4795 3 32.2409 3 29.4795ZM8 -0.000488281C3.58172 -0.000488281 0 3.58124 0 7.99951V29.4795C0 33.8978 3.58172 37.4795 8 37.4795H29.48C33.8983 37.4795 37.48 33.8978 37.48 29.4795V7.99951C37.48 3.58123 33.8983 -0.000488281 29.48 -0.000488281H8ZM25.2666 23.704C25.9271 23.3086 25.912 22.3465 25.2394 21.9721L16.4374 17.0732C15.7647 16.6988 14.9391 17.193 14.9512 17.9627L15.1096 28.0349C15.1217 28.8046 15.9624 29.2726 16.623 28.8773L25.2666 23.704Z"
					fill="#262626"
				/>
			</svg>
		);
	}
};

export const LoopIcon = ({ active }: IIcon) => {
	if (active) {
		return (
			<svg
				width="43"
				height="44"
				viewBox="0 0 43 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.5801 36.4098C28.6873 36.4098 36.0701 29.027 36.0701 19.9198C36.0701 10.8126 28.6873 3.42981 19.5801 3.42981C10.473 3.42981 3.09015 10.8126 3.09015 19.9198C3.09015 29.027 10.473 36.4098 19.5801 36.4098Z"
					stroke="#262626"
					strokeWidth="6"
					strokeMiterlimit="10"
				/>
				<path
					d="M30.6301 32.1198L39.4301 40.9098"
					stroke="#262626"
					strokeWidth="6"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
			</svg>
		);
	} else {
		return (
			<svg
				width="40"
				height="42"
				viewBox="0 0 40 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.5801 35.4098C27.6873 35.4098 35.0701 28.027 35.0701 18.9198C35.0701 9.81263 27.6873 2.42981 18.5801 2.42981C9.47297 2.42981 2.09015 9.81263 2.09015 18.9198C2.09015 28.027 9.47297 35.4098 18.5801 35.4098Z"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
				<path
					d="M29.6301 31.1198L38.4301 39.9098"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
			</svg>
		);
	}
};

export const UserIcon = ({ active }: IIcon) => {
	if (active) {
		return (
			<svg
				width="43"
				height="41"
				viewBox="0 0 43 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21.4651 22.1148C27.0874 22.1148 31.6451 17.557 31.6451 11.9348C31.6451 6.3125 27.0874 1.75476 21.4651 1.75476C15.8428 1.75476 11.2851 6.3125 11.2851 11.9348C11.2851 17.557 15.8428 22.1148 21.4651 22.1148Z"
					fill="#262626"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
				<path
					d="M2.18512 34.9248C2.18512 30.9648 5.42512 27.7248 9.38512 27.7248L33.5551 27.7248C37.5151 27.7248 40.7551 30.9648 40.7551 34.9248V38.8148L2.18512 38.8148L2.18512 34.9248Z"
					fill="#262626"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
			</svg>
		);
	} else {
		return (
			<svg
				width="43"
				height="41"
				viewBox="0 0 43 41"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21.4651 22.1148C27.0874 22.1148 31.6451 17.557 31.6451 11.9348C31.6451 6.3125 27.0874 1.75476 21.4651 1.75476C15.8428 1.75476 11.2851 6.3125 11.2851 11.9348C11.2851 17.557 15.8428 22.1148 21.4651 22.1148Z"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
				<path
					d="M2.18512 34.9248C2.18512 30.9648 5.42512 27.7248 9.38512 27.7248L33.5551 27.7248C37.5151 27.7248 40.7551 30.9648 40.7551 34.9248V38.8148L2.18512 38.8148L2.18512 34.9248Z"
					stroke="#262626"
					strokeWidth="3"
					strokeMiterlimit="10"
				/>
			</svg>
		);
	}
};

export const HeartIcon = ({ active }: IIcon) => {
	if (active) {
		return (
			<svg
				width="44"
				height="38"
				viewBox="0 0 44 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 2C6.925 2 2 6.925 2 13C2 24 15 34 22 36.326C29 34 42 24 42 13C42 6.925 37.075 2 31 2C27.28 2 23.99 3.847 22 6.674C20.9857 5.22921 19.6382 4.05009 18.0715 3.23649C16.5049 2.42289 14.7653 1.99875 13 2Z"
					stroke="#262626"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	} else {
		return null;
	}
};

interface IIconWithClick {
	active: boolean;
	onClick: () => void;
}

export const HeartLike = ({ active, onClick }: IIconWithClick) => {
	if (active) {
		return (
			<svg
				onClick={onClick}
				width="22"
				height="20"
				viewBox="0 0 22 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21.133 4.35059C18.8458 -2.10492 11.4121 -0.287332 10.7331 2.94042C9.80384 -0.4772 2.54886 -1.95303 0.333058 4.35059C-1.93733 10.8185 8.06152 16.9591 10.3313 18.6927C10.5626 18.8693 10.9172 18.8844 11.154 18.7153C13.4604 17.0677 23.3971 10.6958 21.133 4.35059Z"
					fill="#E92828"
				/>
			</svg>
		);
	} else {
		return (
			<svg
				onClick={onClick}
				width="19"
				height="22"
				viewBox="0 0 44 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13 2C6.925 2 2 6.925 2 13C2 24 15 34 22 36.326C29 34 42 24 42 13C42 6.925 37.075 2 31 2C27.28 2 23.99 3.847 22 6.674C20.9857 5.22921 19.6382 4.05009 18.0715 3.23649C16.5049 2.42289 14.7653 1.99875 13 2Z"
					stroke="#262626"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}
};
type IconClick = Pick<IIconWithClick, 'onClick'>;
export const CommentIcon = ({ onClick }: IconClick) => {
	return (
		<svg
			onClick={onClick}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.6432 15.1722C17.5975 15.0287 17.6196 14.8727 17.6988 14.7447C18.5482 13.3714 19.0391 11.7563 19.0391 10.0196C19.0391 5.03633 14.998 1 10.0196 1C5.03633 1 1 5.03633 1 10.0196C1 15.0028 5.03633 19.0391 10.0196 19.0391C11.8104 19.0391 13.4834 18.5155 14.8843 17.614C15.009 17.5338 15.1617 17.5083 15.3043 17.5489L17.8131 18.2629C18.1967 18.372 18.5474 18.0102 18.4263 17.6302L17.6432 15.1722Z"
				stroke="#262626"
				strokeWidth="1.5"
				strokeMiterlimit="10"
			/>
		</svg>
	);
};

export const MessageIcon = ({ onClick }: IconClick) => {
	return (
		<svg
			onClick={onClick}
			width="24"
			height="22"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 5.97803L19.5783 0.999997L15.8559 18.9138L10.323 10.7075L1 5.97803Z"
				stroke="#262626"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.2423 10.4062L19.5783 0.999762"
				stroke="#262626"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SaveIcon = ({ onClick }: IconClick) => {
	return (
		<svg
			onClick={onClick}
			width="16"
			height="19"
			viewBox="0 0 16 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.9584 17.1593C14.9584 17.9605 14.0634 18.4363 13.3992 17.9884L8.53837 14.7098C8.20042 14.4819 7.75795 14.4819 7.42001 14.7098L2.55918 17.9884C1.895 18.4363 1 17.9605 1 17.1593V2C1 1.44772 1.44772 1 2 1H13.9584C14.5107 1 14.9584 1.44772 14.9584 2V17.1593Z"
				stroke="#262626"
				strokeWidth="1.5"
				strokeMiterlimit="10"
			/>
		</svg>
	);
};
