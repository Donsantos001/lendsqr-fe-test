import React, { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import Input from "../../components/Inputs/Input";
import { logIn } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import LoginImage from "../../assets/svgs/login.svg";
import AppLogo from "../../components/Logo/AppLogo";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      dispatch(logIn({ email: userData.email }));
      return navigate(state?.prev ?? "/dashbard");
    }
    alert("Please fill all fields");
  };

  return (
    <div className="login-main">
      <div className="login-app-logo">
        <AppLogo />
      </div>

      <div className="login-con">
        <div className="login-image-con">
          <div className="login-image">
            <img src={LoginImage} alt="" />
          </div>
        </div>

        <div className="login-form">
          <form action="">
            <div className="form-head">
              <h2>Welcome</h2>
              <p>Enter details to login</p>
            </div>

            <div className="input-con">
              <Input
                placeholder="Email"
                required={true}
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-con">
              <Input
                placeholder="Password"
                required={true}
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                type="password"
              />
            </div>

            <p>forgot password?</p>

            <Button
              text="LOG IN"
              type="submit"
              onCustomClick={handleFormSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
