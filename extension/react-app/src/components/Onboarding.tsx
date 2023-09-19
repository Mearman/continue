import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { defaultBorderRadius } from ".";
import Loader from "./Loader";
import YouTube from "react-youtube";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
  z-index: 200;

  color: white;
`;

const StyledSpan = styled.span`
  padding: 8px;
  border-radius: ${defaultBorderRadius};
  &:hover {
    background-color: #ffffff33;
  }
  white-space: nowrap;
`;

const Onboarding = () => {
  const [onboarded, setOnboarded] = useState(1);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setOnboarded(1);
    } else {
      setOnboarded(0);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <StyledDiv hidden={onboarded >= 1}>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <h1>Welcome to Continue</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {<YouTube videoId={"3Ocrc-WX4iQ"} />}
        </div>
        <p
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            textAlign: "center",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <StyledSpan>
            <a 
              href="https://continue.dev/docs"
              className="no-underline"
            >Read more on the Continue Docs</a>
          </StyledSpan>
        </p>
        <p
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            textAlign: "center",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <StyledSpan>
            <a 
              href="https://discord.gg/vapESyrFmJ"
              className="no-underline"
            >Ask questions on the Discord</a>
          </StyledSpan>
        </p>
        <p
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            textAlign: "center",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <StyledSpan>
            Click here to get started
          </StyledSpan>
        </p>
      </div>
    </StyledDiv>
  );
};

export default Onboarding;
