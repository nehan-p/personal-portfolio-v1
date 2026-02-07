import React, { useEffect } from "react";
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
  // Smooth, non-bouncy reveal on scroll (IntersectionObserver)
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-tl-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const contentStyle: React.CSSProperties = {
    background: "rgba(13, 17, 22, 0.60)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.10)",
    borderRadius: "18px",
    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "26px 28px",
  };

  const contentArrowStyle: React.CSSProperties = {
    borderRight: "7px solid rgba(255, 255, 255, 0.12)",
  };

  const iconStyle: React.CSSProperties = {
    background: "#5000ca",
    color: "white",
    boxShadow: "0 12px 30px rgba(80, 0, 202, 0.35)",
  };

  return (
    <section id="history" className="timeline-section">
      <div className="timeline-inner">
        <div className="timeline-header" data-tl-reveal>
          <div className="timeline-kicker">MY EXPERIENCE</div>
          <h1 className="timeline-title">Career History</h1>
          <p className="timeline-subtitle">
            Roles where I shipped systems, improved workflows, and built reliability in real-world
            environments.
          </p>
        </div>

        {/* Important: disable the library's default "bounce" animation */}
        <VerticalTimeline animate={false} layout="1-column-left" lineColor="rgba(255,255,255,0.10)">
          {/* Expense Trend */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work tl-item"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Jan 2026 – Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="tl-card" data-tl-reveal>
              <h3 className="tl-role">Full Stack Software Developer Intern</h3>
              <h4 className="tl-org">Expense Trend · Remote</h4>

              <div className="tl-tags">
                <span className="tl-tag">Next.js</span>
                <span className="tl-tag">React</span>
                <span className="tl-tag">TypeScript</span>
                <span className="tl-tag">REST APIs</span>
                <span className="tl-tag">Node.js</span>
              </div>

              <ul className="tl-bullets">
                <li>
                  Built responsive analytics dashboards in Next.js/React with TypeScript to visualize
                  keyword difficulty, search volume, and rank trend signals across large keyword datasets.
                </li>
                <li>
                  Implemented client-side filtering/sorting, time-series charting, and API-driven state
                  flows to reduce manual analysis and speed up decision-making.
                </li>
                <li>
                  Integrated frontend modules with REST endpoints and added Node.js data transformation
                  routes to improve payload handling and end-to-end feature delivery.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* FiscalElevate */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work tl-item"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Oct 2025 – Dec 2025"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="tl-card" data-tl-reveal>
              <h3 className="tl-role">AI Prompt Engineering Intern</h3>
              <h4 className="tl-org">FiscalElevate · Remote</h4>

              <div className="tl-tags">
                <span className="tl-tag">ChatGPT API</span>
                <span className="tl-tag">Claude API</span>
                <span className="tl-tag">Airtable</span>
                <span className="tl-tag">n8n</span>
                <span className="tl-tag">QA scoring</span>
              </div>

              <ul className="tl-bullets">
                <li>
                  Designed and tuned prompt workflows for AI cold-email generation using ChatGPT API and
                  Claude API to improve tone consistency and personalization quality.
                </li>
                <li>
                  Ran batch testing loops in Airtable and n8n, scoring multi-email output sets for quality
                  and compliance before rollout.
                </li>
                <li>
                  Built reusable prompt templates and testing docs that standardized iteration cycles and
                  improved handoff speed across the team.
                </li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Holiday Inn Express */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work tl-item"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="May 2025 – Aug 2025"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="tl-card" data-tl-reveal>
              <h3 className="tl-role">Guest Services Representative</h3>
              <h4 className="tl-org">Holiday Inn Express · Toronto, ON</h4>

              <div className="tl-tags">
                <span className="tl-tag">Process Design</span>
                <span className="tl-tag">Ops Tooling</span>
                <span className="tl-tag">Google Sheets</span>
                <span className="tl-tag">HotelKey PMS</span>
              </div>

              <ul className="tl-bullets">
                <li>Built a shared shift-handoff system in Google Sheets (faster handovers, fewer misses).</li>
                <li>Worked in HotelKey PMS across high-volume check-in/out workflows.</li>
              </ul>
            </div>
          </VerticalTimelineElement>

          {/* Holiday Inn Sudbury */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work tl-item"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="May 2021 – Aug 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="tl-card" data-tl-reveal>
              <h3 className="tl-role">Guest Services Coordinator</h3>
              <h4 className="tl-org">Holiday Inn · Sudbury, ON</h4>

              <div className="tl-tags">
                <span className="tl-tag">Workflow Standardization</span>
                <span className="tl-tag">Training</span>
                <span className="tl-tag">Ops Coordination</span>
                <span className="tl-tag">Shared Tooling</span>
              </div>

              <ul className="tl-bullets">
                <li>Standardized onboarding + internal workflows for smoother front-desk operations.</li>
                <li>Coordinated cross-team communication using Microsoft Teams + shared tools.</li>
              </ul>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
