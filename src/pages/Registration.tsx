import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logoLogin.png';
import { Context } from '../index';

interface IRegistration {
	email: string;
	password: string;
	userNickName: string;
	userName: string;
}

const Registration = () => {
	let navigate = useNavigate();
	const { store } = useContext(Context);

	const initialValues: IRegistration = { email: '', password: '', userNickName: '', userName: '' };
	const [formValues, setFormValues] = useState<IRegistration>(initialValues);
	const [formErr, setFormErr] = useState<IRegistration | null>(null);
	const [isSubmit, setSubmit] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormErr(validate(formValues));
		setSubmit(true);
		console.log(formErr);
		console.log(formValues);
	};

	useEffect(() => {
		if (formErr === null && isSubmit) {
			console.log(`${formValues} success`);
			const { email, password, userName, userNickName } = formValues;

			store
				.registration(email, password, userName, userNickName)
				.then((res: boolean | undefined) => {
					if (res === true) {
						setFormValues({ email: '', password: '', userNickName: '', userName: '' });
						setSubmit(false);
						navigate('/user');
					}
				})
				.finally(() => {
					setSubmit(false);
				});
		}
	}, [isSubmit, formErr]);

	const validate = (value: IRegistration) => {
		const errors: any = {} as any;
		const regex = /^[a-z0-9](\.?[a-z0-9]){1,}@ukr\.net$/;
		if (!value.email) {
			errors.email = 'Email is required';
		} else if (!regex.test(value.email)) {
			errors.email = 'Email is wrong';
		}
		if (!value.password) {
			errors.password = 'Password is required';
		} else if (value.password.length < 8) {
			errors.password = 'Password less than 8 characters ';
		}
		if (!value.userNickName) {
			errors.userNickName = 'Name is required';
		} else if (value.userNickName.length < 5) {
			errors.userNickName = 'Name less than 5 characters ';
		}
		if (!value.userName) {
			errors.userName = 'Username is required';
		} else if (value.userName.length < 5) {
			errors.userName = 'Username less than 5 characters ';
		}
		if (Object.keys(errors).length === 0) {
			console.log('я ТУТ');
			return null;
		}
		return errors;
	};

	return (
		<div className="loginWrap">
			<form onSubmit={handleSubmit}>
				<div className="loginBlock">
					<div className="instLogo">
						<img src={logo} alt="logo Instagram" />
					</div>
					<div className="block1Logo">
						<p className="formError">{formErr == null ? '' : formErr.email}</p>
						<input
							type="email"
							placeholder="Телефон или эл. адрес"
							className="inpLogo"
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
					<div className="block1Logo">
						<p className="formError">{formErr == null ? '' : formErr.userNickName}</p>
						<input
							type="text"
							placeholder="Имя и фамилия"
							className="inpLogo"
							name="userNickName"
							value={formValues.userNickName}
							onChange={handleChange}
						/>
					</div>
					<div className="block1Logo">
						<p className="formError">{formErr == null ? '' : formErr.userName}</p>
						<input
							type="text"
							placeholder="Имя пользователя"
							className="inpLogo"
							name="userName"
							value={formValues.userName}
							onChange={handleChange}
						/>
					</div>
					<div className="block2Logo">
						<p className="formError">{formErr == null ? '' : formErr.password}</p>
						<input
							type="password"
							placeholder="Пароль"
							className="inpLogo"
							name="password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
					<div className="blockLogoBtn">
						<button className="logoBtn">Submit</button>
					</div>
				</div>
			</form>
			<div className="regBlock">
				<p className="formRegLogText">
					Есть аккаунт?{' '}
					<Link to="/" className="formRegLog">
						Вход
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Registration;
