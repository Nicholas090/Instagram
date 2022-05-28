import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoLogin.png';

interface loginForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const initialValues: loginForm = { email: '', password: '' };
  const [formValues, setFormValues] = useState<loginForm>(initialValues);
  const [formErr, setFormErr] = useState<loginForm | null>(null);
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
    if (formErr === null && isSubmit == true) {
      console.log(`${formValues} success`);
      setFormValues({ email: '', password: '' });
      setSubmit(false);
    }
  }, [isSubmit, formErr]);

  const validate = (value: loginForm) => {
    const errors: loginForm = {} as any;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
          <div className="blockLogoBtn">
            <button className="logoBtn">Submit</button>
          </div>
        </div>
      </form>
      <div className="regBlcok">
        <p className="formRegLogText">
          У вас ещё нет аккаунта?{' '}
          <Link to="/register" className="formRegLog">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
