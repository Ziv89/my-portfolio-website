import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Flex } from "@radix-ui/themes";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [buttonText, setButtonText] = useState("About");

  useEffect(() => {


    if (pathname.toString() === "/About") {

      setButtonText("Experience");
    } else if (pathname === "/Experience") {

      setButtonText("About");
    } else {
     if (pathname === "/about") {
      setButtonText("Experience");
    }
    else
    {
      setButtonText("About");
    }
  }
  }, [pathname]);

  const handleButtonClick = () => {
    const nextPage = buttonText === "Experience" ? "/experience" : "/about";
    navigate(nextPage);
  };

  return (
    <Heading className="App-header">
      <div className="header-flex">
        <span className="title">My Portfolio Page&nbsp;</span>
        <form className="form-container"></form>
      </div>

      <Flex align="center" direction="row" gap="10">
        <button
          className={`dropdown-menu ${pathname === "/" ? "disabled" : ""}`}
          onClick={() => navigate("/")}
          disabled={pathname === "/"}
        >
          Back To Main Page
        </button>

        {pathname !== "/" && (
          <button onClick={handleButtonClick}>
            {buttonText}
          </button>
        )}
      </Flex>
    </Heading>
  );
}

export default Header;
