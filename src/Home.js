import { Container } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <div className="home-jumbo">
          <div className="home-flex">
            <div className="home-left">
              <span className="left-header raleway">
                House on
                <br />
                the hill
              </span>
              <div className="btn-purple raleway jumbo-btn">Join us</div>
            </div>
            <div className="home-right">
              <span className="next-day raleway">Sunday,</span>
              <span className="next-month raleway">November 22 2021</span>
              <div className="countdown">
                <span className="countdown-item">
                  <span className="countdown-value roboto">5</span>
                  <span className="countdown-unit roboto">days</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">15</span>
                  <span className="countdown-unit roboto">hours</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">2</span>
                  <span className="countdown-unit roboto">minutes</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">35</span>
                  <span className="countdown-unit roboto">seconds</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
