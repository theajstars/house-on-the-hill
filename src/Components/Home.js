import { Container } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import ManAvatar from "../Assets/IMG/Avatars/man-avatar.jpg";
import ManAvatar2 from "../Assets/IMG/Avatars/man-avatar-2.jpg";
import WomanAvatar from "../Assets/IMG/Avatars/woman-avatar.jpg";
import WomanAvatar2 from "../Assets/IMG/Avatars/woman-avatar-2.jpg";
import MeAvatar from "../Assets/IMG/Avatars/me.png";
import SundayServiceImage from "../Assets/IMG/raised-hands.jpg";
import BibleStudyImage from "../Assets/IMG/reading-bible.jpg";
import FridayPrayerImage from "../Assets/IMG/pray.jpg";
import AOS from "aos";

import { ToastProvider, useToasts } from "react-toast-notifications";

export default function Home() {
  const { addToast } = useToasts();

  const servicesRef = useRef();
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    setInterval(() => {
      const currentDate = new Date(Date.now());
      const futureDate = new Date(2021, 10, 28, 10, 30);
      const diff = futureDate - currentDate;
      const daysBetween = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursBetween = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesBetween = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsBetween = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(daysBetween < 10 ? `0${daysBetween}` : daysBetween);
      setHours(hoursBetween > 9 ? hoursBetween : `0${hoursBetween}`);
      setMinutes(minutesBetween > 9 ? minutesBetween : `0${minutesBetween}`);
      setSeconds(secondsBetween > 9 ? secondsBetween : `0${secondsBetween}`);
    }, 1000);
  }, []);
  const setFormSubmitted = () => {
    addToast("Your message has been received!", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return (
    <>
      <Container maxWidth="lg">
        <div className="home-jumbo">
          <div className="home-flex">
            <div className="home-left">
              <span className="left-header raleway">
                House on&nbsp; the hill
              </span>
              <div className="btn-purple raleway jumbo-btn">Join us</div>
            </div>
            <div className="home-right">
              <span className="next-day raleway">Sunday,</span>
              <span className="next-month raleway">November 22 2021</span>
              <div className="countdown">
                <span className="countdown-item">
                  <span className="countdown-value roboto">{days}</span>
                  <span className="countdown-unit roboto">days</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">{hours}</span>
                  <span className="countdown-unit roboto">hours</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">{minutes}</span>
                  <span className="countdown-unit roboto">minutes</span>
                </span>
                <span className="countdown-dot">
                  <i className="fas fa-circle"></i>
                </span>
                <span className="countdown-item">
                  <span className="countdown-value roboto">{seconds}</span>
                  <span className="countdown-unit roboto">seconds</span>
                </span>
              </div>
              <div
                className="btn-purple raleway jumbo-btn"
                onClick={scrollToServices}
              >
                View all services
              </div>
            </div>
          </div>
        </div>
        <div className="home-scripture jost">
          <b>2 Corinthians 5:17</b> - Therefore if any man be in Christ, he is a
          new creature: old things are passed away; behold, all things are
          become new.
        </div>

        <div className="meet-the-team">
          <center>
            <span className="purple-head raleway">Meet the Team</span>
          </center>
          <div className="team">
            <div className="teammate">
              <img src={MeAvatar} alt="" className="avatar" />
              <span className="teammate-name raleway">Dr AJ. Braavo</span>
              <span className="team-position raleway">Pastor in charge</span>
            </div>
            <div className="team-row-container" data-aos="fade-up">
              <div className="team-row">
                <div className="teammate">
                  <img src={WomanAvatar} alt="" className="avatar" />
                  <span className="teammate-name raleway">
                    Emmanuella Peter
                  </span>
                  <span className="team-position raleway">
                    Head. Protocol Unit
                  </span>
                </div>
                <div className="teammate">
                  <img src={WomanAvatar2} alt="" className="avatar" />
                  <span className="teammate-name raleway">Mayo Esther</span>
                  <span className="team-position raleway">
                    Financial Secretary
                  </span>
                </div>
              </div>
              <div className="team-row">
                <div className="teammate">
                  <img src={ManAvatar} alt="" className="avatar" />
                  <span className="teammate-name raleway">Madojemu Luis</span>
                  <span className="team-position raleway">
                    Head. Prayer Unit
                  </span>
                </div>
                <div className="teammate">
                  <img src={ManAvatar2} alt="" className="avatar" />
                  <span className="teammate-name raleway">GB stikkkks</span>
                  <span className="team-position raleway">Drummer boy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-services" ref={servicesRef}>
          <center>
            <span className="purple-head raleway">Our Services</span>
          </center>
          <div className="service-cards">
            <div className="service-card-container-left" data-aos="fade-right">
              <div className="service-card">
                <img
                  src={SundayServiceImage}
                  alt=""
                  className="service-card-img"
                />
                <div className="service-card-right-container">
                  <div className="service-card-right">
                    <div className="card-col">
                      <span className="service-card-header raleway">
                        Sundays
                      </span>
                      <span className="service-time roboto">
                        <span style={{ fontSize: "1.3rem" }}>
                          <i className="fas fa-clock"></i>&nbsp;
                        </span>
                        10:30
                      </span>
                    </div>
                    <p className="service-card-text jost">
                      Join us every sunday morning by 10:30 as we worship the
                      Lord.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-container-right" data-aos="fade-left">
              <div className="service-card">
                <img
                  src={BibleStudyImage}
                  alt=""
                  className="service-card-img"
                />
                <div className="service-card-right-container">
                  <div className="service-card-right">
                    <div className="card-col">
                      <span className="service-card-header raleway">
                        Tuesdays
                      </span>
                      <span className="service-time roboto">
                        <span style={{ fontSize: "1.3rem" }}>
                          <i className="fas fa-clock"></i>&nbsp;
                        </span>
                        06:45
                      </span>
                    </div>
                    <p className="service-card-text jost">
                      Every tuesday evening, join our Bible discussion session
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-container-left" data-aos="fade-right">
              <div className="service-card">
                <img
                  src={FridayPrayerImage}
                  alt=""
                  className="service-card-img"
                />
                <div className="service-card-right-container">
                  <div className="service-card-right">
                    <div className="card-col">
                      <span className="service-card-header raleway">
                        Fridays
                      </span>
                      <span className="service-time roboto">
                        <span style={{ fontSize: "1.3rem" }}>
                          <i className="fas fa-clock"></i>&nbsp;
                        </span>
                        04:00
                      </span>
                    </div>
                    <p className="service-card-text jost">
                      On Fridays, we engage a prayer session with communion
                      afterwards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <center>
        <span className="purple-head raleway">Get In Touch</span>
      </center>
      <br />
      <br />
      <br />
      <div className="purple-bg">
        <Container maxWidth="md">
          <div className="form-row">
            <form
              action="#"
              className="touch-form"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted();
              }}
            >
              <input
                type="text"
                className="touch-input raleway"
                spellCheck="false"
                placeholder="Name"
              />
              <input
                type="text"
                className="touch-input raleway"
                spellCheck="false"
                placeholder="Email"
              />
              <textarea
                type="text"
                className="touch-input raleway"
                placeholder="Email"
                spellCheck="false"
              />
              <button type="submit" className="raleway submit-touch">
                Submit
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
