import { useState } from "react";
import { Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, category, description, link, tags = [] }) => {
  const primaryScreenshot = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(link)}?w=900`;
  const fallbackScreenshot = `https://api.microlink.io/?url=${encodeURIComponent(link)}&screenshot=true&meta=false&embed=screenshot.url`;

  const [imageSrc, setImageSrc] = useState(primaryScreenshot);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackScreenshot);
    }
  };

  // Clean display link for browser mockup
  const displayUrl = link.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <Col size={12} sm={6} lg={4} className="mb-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="proj-card-link"
        aria-label={`Open ${title} live preview`}
      >
        <div className="proj-card">
          {/* Browser frame mockup header */}
          <div className="proj-browser-bar">
            <div className="proj-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="proj-address-bar">
              <span className="live-indicator"></span>
              <span className="proj-url-text">{displayUrl}</span>
            </div>
            <span className="proj-external-icon">
              <BoxArrowUpRight size={13} />
            </span>
          </div>

          {/* Live site preview image container */}
          <div className="proj-imgbx">
            <img
              src={imageSrc}
              alt={`${title} live deployment preview`}
              onError={handleError}
              loading="lazy"
              className="proj-screenshot"
            />

            {/* Hover overlay with quick details and launch button */}
            <div className="proj-txtx">
              <span className="proj-category">{category || "Web Application"}</span>
              <h4>{title}</h4>
              <p className="proj-overlay-desc">{description}</p>
              <div className="proj-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="proj-tag">{tag}</span>
                ))}
              </div>
              <div className="proj-btn">
                <span>View Live Site</span>
                <BoxArrowUpRight size={14} className="ms-2" />
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="proj-card-footer">
            <div className="proj-footer-info">
              <span className="proj-badge">{category || "Live Project"}</span>
              <h5>{title}</h5>
            </div>
            <div className="proj-launch-icon" title="Open live site">
              <BoxArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
