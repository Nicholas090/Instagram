import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoLogin.png';

interface loginForm {
  email: string;
  password: string;
  FLname: string;
  userName: string;
}

const Registration = () => {
  const initialValues: loginForm = { email: '', password: '', FLname: '', userName: '' };
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
      console.log(`${formValues.FLname} success`);
      setFormValues({ email: '', password: '', FLname: '', userName: '' });
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
    if (!value.FLname) {
      errors.FLname = 'First name is required';
    } else if (value.FLname.length < 5) {
      errors.FLname = 'First name less than 5 characters ';
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
            <p className="formError">{formErr == null ? '' : formErr.FLname}</p>
            <input
              type="text"
              placeholder="Имя и фамилия"
              className="inpLogo"
              name="FLname"
              value={formValues.FLname}
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
      <div className="regBlcok">
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
