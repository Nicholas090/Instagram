import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/LogoUserPage.png';
import { Context } from '../index';
import { IResponseError } from '../models/response/AuthResponse';
import { observer } from 'mobx-react-lite';

interface loginForm {
	email: string;
	password: string;
}

const SignIn = observer(() => {
	let navigate = useNavigate();
	const initialValues: loginForm = { email: '', password: '' };
	const [formValues, setFormValues] = useState<loginForm>(initialValues);
	const [formErr, setFormErr] = useState<Partial<loginForm> | null>(null);
	const [isSubmit, setSubmit] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | null>();
	const { store } = useContext(Context);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormErr(validate(formValues));
		setSubmit(true);
	};

	useEffect(() => {
		if (formErr === null && isSubmit) {
			const { email, password } = formValues;

			store
				.login(email, password)
				.then((e) => {
					console.log('success');
					setFormValues({ email: '', password: '' });
					setSubmit(false);
					setErrorMessage(null);
					navigate('/user');
				})
				.catch((e: IResponseError) => {
					console.log(`Error ${e}`);
					setSubmit(false);
					setErrorMessage(e.message);
				});
		}
	}, [isSubmit, formErr]);

	useEffect(() => {
		if (localStorage.getItem('token') && !store.setAuth) {
			store.checkAuth().then((res: boolean | undefined) => {
				if (res === true) {
					navigate('/home');
				}
			});
		}
	}, []);

	const validate = (value: loginForm) => {
		const errors: loginForm = {} as any;
		const regex = /^[a-z\d](\.?[a-z\d]){3,}@ukr\.net$/;
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
		if (Object.keys(errors).length === 0) {
			return null;
		}
		return errors;
	};

	return (
		<main>
			<article>
				<div className="loginWrap">
					<div className="loginBlock">
						<div className="instLogo">
							<img src={logo} alt="logo Instagram" />
						</div>
						<form onSubmit={handleSubmit}>
							<div className="block1Logo">
								<p className="formError">{formErr == null ? '' : formErr.email}</p>
								<input
									type="email"
									placeholder="Телефон, имя пользователя или эл. адрес"
									className="inpLogo"
									name="email"
									value={formValues.email}
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
							{errorMessage ? (
								<div>
									<p style={{ color: 'red', paddingLeft: 20, paddingRight: 20 }}>{errorMessage}</p>
								</div>
							) : null}
							<div className="blockLogoBtn">
								<button className="logoBtn">Submit</button>
							</div>
						</form>
					</div>
					<div className="regBlock">
						<p className="formRegLogText">
							У вас ещё нет аккаунта?{' '}
							<Link to="/register" className="formRegLog">
								Регистрация
							</Link>
						</p>
					</div>
				</div>
			</article>
		</main>
	);
});

export default SignIn;
