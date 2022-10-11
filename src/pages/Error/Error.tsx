import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";
import NotFoundImage from "../../assets/svgs/errornotfound.svg";

type Props = {
  title?: string;
  message?: string;
};

const Error = ({ title, message }: Props) => {
  return (
    <div className="error-main">
      <div className="error-wrapper">
        <div className="error-image">
          <img src={NotFoundImage} alt="" />
        </div>

        <div className="error-content">
          <h2>
            {title || "This page is not the web page you are looking for"}
          </h2>
          <p>
            {message || (
              <span>
                Please check the url and try again, or go to{" "}
                <Link to={"/"}>home</Link>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
