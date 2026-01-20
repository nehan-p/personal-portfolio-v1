import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const contentStyle = {
    background: "white",
    color: "rgb(39, 40, 34)",
    padding: "24px 26px",
  } as React.CSSProperties;

  const contentArrowStyle = { borderRight: "7px solid white" };

  const iconStyle = { background: "#5000ca", color: "white" };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {/* FiscalElevate */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Oct 2025 – Dec 2026"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              AI Prompt Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              FiscalElevate · Remote
            </h4>

            <div className="timeline-tags">
              <span className="tag">LLM prompts</span>
              <span className="tag">Automation</span>
              <span className="tag">QA scoring</span>
              <span className="tag">Airtable + n8n</span>
            </div>

            <ul className="timeline-bullets compact">
              <li>
                Built prompt workflows for cold-email outreach using ChatGPT +
                Claude APIs.
              </li>
              <li>
                Ran batch QA loops to improve consistency, compliance, and speed
                of iteration.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Holiday Inn Express */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="May 2025 – Aug 2025"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Guest Services Representative
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Holiday Inn Express · Toronto, ON
            </h4>

            <div className="timeline-tags">
              <span className="tag">Process Design</span>
              <span className="tag">Ops Tooling</span>
              <span className="tag">Google Sheets</span>
              <span className="tag">HotelKey PMS</span>
            </div>

            <ul className="timeline-bullets compact">
              <li>
                Built a shared shift-handoff system in Google Sheets (faster
                handovers and fewer misses).
              </li>
              <li>
                Worked in HotelKey PMS across high-volume check-in/out workflows.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Holiday Inn Sudbury */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="May 2021 – Aug 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Guest Services Coordinator
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Holiday Inn · Sudbury, ON
            </h4>

            <div className="timeline-tags">
              <span className="tag">Workflow Standardization</span>
              <span className="tag">Training</span>
              <span className="tag">Ops Coordination</span>
              <span className="tag">Shared Tooling</span>
            </div>

            <ul className="timeline-bullets compact">
              <li>
                Standardized onboarding + internal workflows for smoother
                front-desk operations.
              </li>
              <li>
                Coordinated cross-team communication using Microsoft Teams and
                shared tools.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
