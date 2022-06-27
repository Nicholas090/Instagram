import React, { useEffect, useState } from 'react';
import { LogoUserPage } from '../Components/LogoUserPage';
import SideBar from '../Components/SideBar';

const SearchPage = () => {
	const [formValue, setFormValue] = useState<string>('');
	const [isSubmit, setSubmit] = useState<boolean>(false);
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		console.log('here');
		e.preventDefault();
		setSubmit(true);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValue(e.target.value);
	};

	useEffect(() => {
		if (isSubmit) {
			console.log(formValue);
			setFormValue('');
			setSubmit(false);
		}
	}, [isSubmit]);
	return (
		<div>
			<LogoUserPage />
			<div className={'userSearchPageWrapper'}>
				<SideBar />
				<div className={'mainSearchContainerPage'}>
					<header className={'searchPageHeader'}>
						<form onSubmit={handleSubmit} style={{ width: '52%' }}>
							<input
								placeholder="Search"
								className={'searchPageInput'}
								name="searchPhoto"
								value={formValue}
								onChange={handleChange}
							/>
						</form>
						<div className={'searchPageTypesWrapper'}>
							<button>For you</button>
							<button>Trending</button>
							<button>Top</button>
							<button>Recent</button>
							<button>Reels</button>
						</div>
					</header>
					<div className={'searchPagePostWrapper'}>
						<div className={'searchPageFirstPhotosBlock'}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SearchPage;
