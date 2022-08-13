import testSearch1 from '../assets/Rectangle 69.png';
import testSearch2 from '../assets/Rectangle 70.png';
import testSearch3 from '../assets/Rectangle 71.png';
import testSearch4 from '../assets/Rectangle 72.png';
import testSearch5 from '../assets/Rectangle 73.png';
import testSearch6 from '../assets/Rectangle 74.png';
import testSearch7 from '../assets/Rectangle 69.png';
import React from 'react';
import axios from 'axios';
import { IUsersStoriesInfo, setStoriesInfo } from '../redux/reducers/usersStoriesInfo';
import { useAppDispatch } from '../redux/hooks';
import { ISearchPagePostsData } from '../types/types';

const SearchPagePosts = () => {
	const dispatch = useAppDispatch();
	axios
		.get('http://localhost:3001/seacrhPagePosts')
		.then((res) => {
			console.log(res.data);
			res.data.forEach((e: ISearchPagePostsData) => {});
			// return res.data;
		})
		.catch((e) => {
			console.log(e);
		});

	return (
		<div className={'searchPageFirstPhotosBlock'}>
			<img src={testSearch1} className={'searchPageSmallPhoto'} />
			<img src={testSearch2} className={'searchPageSmallPhoto'} />
			<img src={testSearch3} className={'searchPageSmallPhoto'} />
			<img src={testSearch4} className={'searchPageMediumPhoto'} />
			<img src={testSearch5} className={'searchPageSmallPhoto'} />
			<img src={testSearch6} className={'searchPageSmallPhoto'} />
			<img src={testSearch7} className={'searchPageSmallPhoto'} />
		</div>
	);
};
export default SearchPagePosts;
