import React, { useEffect, useState } from "react";
import "./Timeline.css";
import "react-vertical-timeline-component/style.min.css";
import { GiInauguration } from "react-icons/gi";
import { FaLocationPin } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const showTimeline = (day) => {
    setSelectedDay(day);
  };

  const scheduleday1 = [
    {
      img: "https://www.cedars.hku.hk/image/cache/data/1692687236_Grand%20Hall%20Backdrop%203_1-1276x851.jpg",
      event: "Inaugration ceremony",
      location: "LT-4",
      icon: GiInauguration,
      time: "10:00 AM - 10:30 AM",
    },
    {
      img: "https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg",
      event: "Talk 1",
      location: "LT-4",
      icon: GiInauguration,
      time: "10:30 AM - 11:30 AM",
    },
    {
      img: "https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg",
      event: "Talk 2",
      location: "LT-4",
      icon: GiInauguration,
      time: "11:30 AM - 12:30 PM",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/83/1d/51/delicious-veg-and-non.jpg",
      event: "LUNCH BREAK",
      location: "MESS",
      icon: GiInauguration,
      time: "12:30 PM - 02:00 PM",
    },
    {
      img: "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg",
      event: "Blind Coding",
      location: "cl-01",
      icon: GiInauguration,
      time: "2:00 PM - 3:30 PM",
    },
    {
      img: "https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg",
      event: "TEA BREAK",
      location: "CAFETERIA",
      icon: GiInauguration,
      time: "03:30 PM - 4:00 PM",
    },
  ];

  const scheduleday2 = [
    {
      img: "https://www.cedars.hku.hk/image/cache/data/1692687236_Grand%20Hall%20Backdrop%203_1-1276x851.jpg",
      event: "Inaugration ceremony",
      location: "LT-4",
      icon: GiInauguration,
      time: "10:00  - 10:30 ",
    },
    {
      img: "https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg",
      event: "Talk 1",
      location: "LT-4",
      icon: GiInauguration,
      time: "10:30 AM - 11:30 AM",
    },
    {
      img: "https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg",
      event: "Talk 2",
      location: "LT-4",
      icon: GiInauguration,
      time: "11:30 AM - 12:30 PM",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/83/1d/51/delicious-veg-and-non.jpg",
      event: "LUNCH BREAK",
      location: "MESS",
      icon: GiInauguration,
      time: "12:30 PM - 02:00 PM",
    },
    {
      img: "https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg",
      event: "Blind Coding",
      location: "cl-01",
      icon: GiInauguration,
      time: "2:00 PM - 3:30 PM",
    },
    {
      img: "https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg",
      event: "TEA BREAK",
      location: "CAFETERIA",
      icon: GiInauguration,
      time: "03:30 PM - 4:00 PM",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const animationNames = ["zoom-in", "fade-up", "flip-left", "flip-right"];

  return (
    <div className="timelineSection">
      <div className="heading" data-aos="fade-up">
        <div>TIMELINE</div>
      </div>
      <div className="days">
        <button onClick={() => showTimeline("day1")} className="btn1">Day 1</button>
        <button onClick={() => showTimeline("day2")} className="btn1">Day 2</button>
      </div>
      <div className="timeline">
        {selectedDay === "day1" && (
          <div
            className={`day1-timeline ${
              selectedDay === "day1" ? "" : "hidden"
            }`}
          >
            <div
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "1.4rem",
              }}
            >
              {selectedDay}
            </div>
            <VerticalTimeline lineColor="#000">
              {scheduleday1.map((event, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "#000", color: "white" }}
                  date={event.time}
                  icon={<event.icon />}
                >
                  <div
                    className="eventbox"
                    data-aos={`${
                      animationNames[index % animationNames.length]
                    }`}
                  >
                    <img src={event.img}></img>
                    <div className="venue">
                      <h2>{event.event}</h2>
                      <p>
                        <FaLocationPin /> {event.location}
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}
        {selectedDay === "day2" && (
          <div
            className={`day2-timeline ${
              selectedDay === "day2" ? "" : "hidden"
            }`}
          >
            <div
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "1.2rem",
              }}
            >
              {selectedDay}
            </div>

            <VerticalTimeline lineColor="#FFF">
              {scheduleday2.map((event, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "#000", color: "white" }}
                  date={event.time}
                  icon={<event.icon />}
                >
                  <div
                    className="eventbox"
                    data-aos={`${
                      animationNames[index % animationNames.length]
                    }`}
                  >
                    <img src={event.img}></img>
                    <div className="venue">
                      <h2>{event.event}</h2>
                      <p>
                        <FaLocationPin /> {event.location}
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
