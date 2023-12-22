import React, { useState } from "react";
import "./Timeline.css";
import "react-vertical-timeline-component/style.min.css";
import { GiInauguration } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Timeline = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  const showTimeline = (day) => {
    setSelectedDay(day);
  };
  return (
    <>
      <div className="days">
        <button onClick={() => showTimeline("day1")}>Day 1</button>
        <button onClick={() => showTimeline("day2")}>Day 2</button>
      </div>
      <div className="timeline">
        {selectedDay === "day1" && (
          <div
            className={`day1-timeline ${
              selectedDay === "day1" ? "" : "hidden"
            }`}
          >
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="10:00 AM - 10:30 AM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://www.cedars.hku.hk/image/cache/data/1692687236_Grand%20Hall%20Backdrop%203_1-1276x851.jpg"></img>
                  <h2>Inaugration ceremony</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="10:30 AM - 11:30 AM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg"></img>
                  <h2>Talk 1</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="11:30 AM - 12:30 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg"></img>
                  <h2>Talk 2</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="12:30 PM - 02:00 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/83/1d/51/delicious-veg-and-non.jpg"></img>
                  <h2>Lunch Break</h2>
                  <p>Mess</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="2:00 PM - 3:30 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg"></img>
                  <h2>Blind Coding</h2>
                  <p>CL-01</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="03:30 PM - 4:00 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg"></img>
                  <h2>Tea Break</h2>
                  <p>Cafeteria</p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        )}
        {selectedDay === "day2" && (
          <div
            className={`day2-timeline ${
              selectedDay === "day2" ? "" : "hidden"
            }`}
          >
            <VerticalTimeline lineColor="#000">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="10:00 - 10:30 "
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://www.cedars.hku.hk/image/cache/data/1692687236_Grand%20Hall%20Backdrop%203_1-1276x851.jpg"></img>
                  <h2>Inaugration ceremony</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="10:30 - 11:30 "
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg"></img>
                  <h2>Talk 1</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="11:30 AM - 12:30 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://tisch.nyu.edu/content/dam/tisch/clive-davis-institute/Soundtalksession1_crop.jpg.preset.600.jpeg"></img>
                  <h2>Talk 2</h2>
                  <p>LT-4</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="12:30 PM - 02:00 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/83/1d/51/delicious-veg-and-non.jpg"></img>
                  <h2>Lunch Break</h2>
                  <p>Mess</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="2:00 PM - 3:30 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg"></img>
                  <h2>Blind Coding</h2>
                  <p>CL-01</p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#000", color: "white" }}
                date="03:30 PM - 4:00 PM"
                icon={<GiInauguration />}
              >
                <div className="eventbox">
                  <img src="https://www.munatycooking.com/wp-content/uploads/2014/04/Indian-Tea-Karak-Chai-feature-image-2022-500x500.jpg"></img>
                  <h2>Tea Break</h2>
                  <p>Cafeteria</p>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        )}
      </div>
    </>
  );
};

export default Timeline;
