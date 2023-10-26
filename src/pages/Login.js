import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Login = () => {
  const [userType, setUserType] = useState(null);

  const responseGoogle = async (response) => {
    console.log(response);
    //for login
    const user = await prisma.user.findUnique({
      where: {
        email: response.profileObj.email,
      },
    });
    if (!user) {
      await prisma.user.create({
        data: {
          email: response.profileObj.email,
          name: response.profileObj.name,
          googleId: response.profileObj.googleId,
          userType: userType,
        },
      });
    } else {
      // Update the user type if the user already exists
      await prisma.user.update({
        where: {
          email: response.profileObj.email,
        },
        data: {
          userType: userType,
        },
      });
    }

    const handleUserType = (type) => {
      setUserType(type);
    };

    const handleAuthAnimations = () => {
      let loginButton = document.querySelector(".login-button");
      let userTypeButton = document.querySelector(".user-type-button");

      loginButton.style.animation = "shake 0.5s";
      userTypeButton.style.animation = "fade-in 1s";
    };

    return (
      <div>
        <button onClick={() => handleUserType("bison")}>I'm a Bison</button>
        <button onClick={() => handleUserType("governmentAgent")}>
          I'm a Government Agent
        </button>
        <GoogleLogin
          clientId="YOUR_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  };
};

export default Login;
