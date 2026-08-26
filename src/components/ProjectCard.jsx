import { useState } from "react";
import { Col } from "react-bootstrap";
import { BoxArrowUpRight, Globe, ShieldCheck } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  category,
  description,
  link,
  tags = [],
  icon = "🌐",
  gradient = "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
}) => {
  // Ordered screenshot providers that support JavaScript execution for React SPAs
  const sources = [
    `https://image.thum.io/get/width/800/crop/600/noanimate/${link}`,
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(link)}?w=900`,
    `https://api.microlink.io/?url=${encodeURIComponent(link)}&screenshot=true&meta=false&embed=screenshot.url`,
  ];

  const [srcIndex, setSrcIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  // Clean URL for browser mockup bar
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

          {/* Site preview container */}
          <div className="proj-imgbx" style={{ background: gradient }}>
            {/* Always-ready styled placeholder while screenshot loads or if offline */}
            <div className={`proj-fallback-view ${imageLoaded && !allFailed ? "proj-fallback-hidden" : ""}`}>
              <div className="proj-fallback-icon">{icon}</div>
              <div className="proj-fallback-title">{title}</div>
              <span className="proj-live-pill">
                <span className="pulse-dot"></span> Live Deployment
              </span>
            </div>

            {/* Dynamic live screenshot */}
            {!allFailed && (
              <img
                src={sources[srcIndex]}
                alt={`${title} live deployment preview`}
                onLoad={() => setImageLoaded(true)}
                onError={handleError}
                loading="lazy"
                className={`proj-screenshot ${imageLoaded ? "proj-screenshot-visible" : "proj-screenshot-hidden"}`}
              />
            )}

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
