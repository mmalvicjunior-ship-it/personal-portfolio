import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const allProjects = [
    {
      title: "Bakita Primary School",
      category: "Education Platform",
      description: "Full primary school portal featuring admissions, curriculum highlights, upcoming school events, and parent portal.",
      link: "https://bakita-primary-school.vercel.app/",
      tags: ["Next.js", "React", "Tailwind CSS", "Education"],
      icon: "🏫",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
      group: "platforms"
    },
    {
      title: "Vic Falls Clinic",
      category: "Healthcare System",
      description: "Modern clinical healthcare platform with online doctor appointment booking, specialties directory, and patient resources.",
      link: "https://vic-falls-clinic.vercel.app/",
      tags: ["Next.js", "Medical", "Booking", "Responsive"],
      icon: "🏥",
      gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
      group: "platforms"
    },
    {
      title: "Trust Connect",
      category: "On-Demand Services",
      description: "Verified on-demand trades marketplace connecting homeowners and businesses with background-checked local professionals.",
      link: "https://trust-connect-ashy.vercel.app/",
      tags: ["Full Stack", "Marketplace", "Bookings", "UI/UX"],
      icon: "🤝",
      gradient: "linear-gradient(135deg, #003087 0%, #0057d9 50%, #00b8a9 100%)",
      group: "platforms"
    },
    {
      title: "Ani Pulse",
      category: "Media & Entertainment",
      description: "Dynamic entertainment tracking web application delivering real-time trending updates, media search, and modern responsive UI.",
      link: "https://ani-pulse.vercel.app/",
      tags: ["React", "API Integration", "Web App"],
      icon: "⚡",
      gradient: "linear-gradient(135deg, #4c0519 0%, #881337 50%, #be123c 100%)",
      group: "apps"
    },
    {
      title: "Jumpstart",
      category: "Productivity Web App",
      description: "Fast and intuitive onboarding and productivity platform engineered to accelerate workflows and project kickoffs.",
      link: "https://jumpstart-blush.vercel.app/",
      tags: ["React", "Productivity", "Modern UI"],
      icon: "🚀",
      gradient: "linear-gradient(135deg, #311042 0%, #581c87 50%, #7e22ce 100%)",
      group: "apps"
    },
    {
      title: "Login & Register (Blue Theme)",
      category: "Authentication Flow",
      description: "Polished user authentication and registration portal with clean styling, validation, and seamless state handling.",
      link: "https://login-register-blue.vercel.app/",
      tags: ["Auth Flow", "Forms", "Frontend"],
      icon: "🔐",
      gradient: "linear-gradient(135deg, #0c1938 0%, #1e40af 50%, #3b82f6 100%)",
      group: "auth"
    },
    {
      title: "Login & Register (Glassmorphism)",
      category: "Identity & Access",
      description: "Glassmorphic authentication portal featuring smooth multi-form switching, validation, and purple neon styling.",
      link: "https://login-register-i6np.vercel.app/",
      tags: ["Authentication", "Glassmorphism", "React"],
      icon: "🔑",
      gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      group: "auth"
    },
  ];

  const platforms = allProjects.filter(p => p.group === "platforms");
  const appsAndAuth = allProjects.filter(p => p.group === "apps" || p.group === "auth");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Featured Projects</h2>
                <p>
                  Explore a showcase of my live deployed web applications, portals, and interactive platforms.
                  Click on any card to interact with the live deployed project.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects ({allProjects.length})</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Platforms & Portals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Apps & Systems</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          allProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          platforms.map((project, index) => {
                            return (
                              <ProjectCard
                                key={`platform-${index}`}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          appsAndAuth.map((project, index) => {
                            return (
                              <ProjectCard
                                key={`app-${index}`}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background glow"></img>
    </section>
  )
}
