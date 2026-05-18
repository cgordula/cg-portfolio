import React from 'react';
import './App.css';

function App() {
  return (
    <div>

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">CG</a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home" style={{ border: 'none' }}>
        <div className="hero-text">
          <div className="hero-label">Available for opportunities</div>
          <h1 className="hero-name">Carmina<br /><em>Gordula</em></h1>
          <p className="hero-role">Full Stack Developer &nbsp;/&nbsp; UI Engineer</p>
          <p className="hero-bio">
            Developer with a strong foundation in full-stack web development,
            AWS cloud infrastructure, and UI/UX design. Passionate about building
            clean, performant applications from concept to deployment.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#experience" className="btn btn-ghost">View work</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                <div className="avatar-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="14" r="7" stroke="#c8b89a" strokeWidth="1.5" />
                    <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="avatar-initials">CG</div>
                <div className="avatar-tag">Developer · Philippines</div>
              </div>
            </div>
            <div className="float-tag ft-1"><span>◆</span>AWS Certified</div>
            <div className="float-tag ft-2"><span>◆</span>React · Laravel</div>
            <div className="float-tag ft-3"><span>◆</span>Full Stack</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-category">🖥️ Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">ReactJS</span>
              <span className="skill-tag">jQuery</span>
              <span className="skill-tag">AJAX</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-category">⚙️ Backend</div>
            <div className="skill-tags">
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">CodeIgniter</span>
              <span className="skill-tag">NodeJS</span>
              <span className="skill-tag">ExpressJS</span>
              <span className="skill-tag">RESTful APIs</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-category">🗄️ Database &amp; Cloud</div>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">DigitalOcean</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-category">🔗 API &amp; System Architecture</div>
            <div className="skill-tags">
              <span className="skill-tag">RESTful API Design</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">System Architecture Basics</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-category">🤖 AI Tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Claude</span>
              <span className="skill-tag">ChatGPT</span>
              <span className="skill-tag">Cursor</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-category">🎨 Design &amp; Tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Photoshop</span>
              <span className="skill-tag">Illustrator</span>
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="exp-list">

          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-date">Feb 2023 – Present</div>
              <div className="exp-company">RevenueAds<br />Oklahoma, USA</div>
            </div>
            <div className="exp-content">
              <h3 className="exp-title">💻 Developer</h3>
              <ul className="exp-desc">
                <li>Front-end development and UI/UX design for web applications</li>
                <li>Trained and mentored newly hired developers on codebase standards and workflows</li>
                <li>Creating mockups and graphic design assets for the team</li>
                <li>Assisting with all aspects of software design, coding, and deployment</li>
                <li>Setting up and managing servers on AWS and DigitalOcean, handling deployments</li>
                <li>Building and extending features using PHP (CodeIgniter, Laravel), JavaScript, React, AJAX, and jQuery</li>
                <li>MySQL database management and administration</li>
                <li>Writing technical documentation for projects and processes</li>
              </ul>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-meta">
              <div className="exp-date">2012 – 2015</div>
              <div className="exp-company">Datascope Communication Phils. Inc.<br />Philippines</div>
            </div>
            <div className="exp-content">
              <h3 className="exp-title">🖧 System Administrator</h3>
              <ul className="exp-desc">
                <li>Managed and maintained company systems and network infrastructure</li>
                <li>Promoted from Data Entry/Encoder role based on technical performance</li>
                <li>Provided technical support and ensured uptime of critical systems</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </div>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-year">2006 – 2011</div>
            <div className="edu-degree">BS in Computer Engineering</div>
            <div className="edu-school">International Electronics and Technical Institute (IETI)</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Sep – Dec 2022</div>
            <div className="edu-degree">Full Stack Software Development</div>
            <div className="edu-school">Zuitt Learning Institute (Coding Bootcamp)</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Mar – Jun 2022</div>
            <div className="edu-degree">AWS re/Start Program</div>
            <div className="edu-school">Edukasyon.PH</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Issued Jul 2022</div>
            <div className="edu-degree">AWS Certified Cloud Practitioner</div>
            <div className="edu-school">Amazon Web Services (AWS)<br />Official certification in cloud fundamentals</div>
          </div>
        </div>
      </section>

         {/* PROJECTS */}
      <section id="projects">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
 
          <div className="project-card">
            <div className="project-image">
              <div className="project-img-placeholder"><span>🌐</span></div>
              <div className="project-overlay">
                <a href="https://cgordula.github.io/gordula-capstone-1/" target="_blank" rel="noreferrer" className="project-live">↗ Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Personal Web Portfolio</h3>
              <div className="project-links">
                <a href="https://github.com/cgordula/gordula-capstone-1" target="_blank" rel="noreferrer" className="project-link">
                  <span>⌥</span> GitHub
                </a>
                <a href="https://cgordula.github.io/gordula-capstone-1/" target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
 
          <div className="project-card">
            <div className="project-image">
              <div className="project-img-placeholder"><span>🛒</span></div>
              <div className="project-overlay">
                <a href="https://ecommerce-capstone-2-gordula.onrender.com/products" target="_blank" rel="noreferrer" className="project-live">↗ Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Ecommerce Backend API</h3>
              <div className="project-links">
                <a href="https://gitlab.com/batch-211-carmina/capstone-2-gordula" target="_blank" rel="noreferrer" className="project-link">
                  <span>⌥</span> GitLab
                </a>
                <a href="https://ecommerce-capstone-2-gordula.onrender.com/products" target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
 
          <div className="project-card">
            <div className="project-image">
              <div className="project-img-placeholder"><span>🎂</span></div>
              <div className="project-overlay">
                <a href="https://carmaj-swittut-cakeshop.vercel.app/" target="_blank" rel="noreferrer" className="project-live">↗ Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Cake Online Shop</h3>
              <div className="project-links">
                <a href="https://gitlab.com/batch-211-carmina/capstone-3-gordula" target="_blank" rel="noreferrer" className="project-link">
                  <span>⌥</span> GitLab
                </a>
                <a href="https://carmaj-swittut-cakeshop.vercel.app/" target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
 
          <div className="project-card">
            <div className="project-image">
              <div className="project-img-placeholder"><span>🎨</span></div>
              <div className="project-overlay">
                <a href="https://www.figma.com/proto/4EIm1kZ4TO6os9QQOEAM7e/Datagenetx?node-id=1-2&starting-point-node-id=32%3A70" target="_blank" rel="noreferrer" className="project-live">↗ Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Company Web App — UI Design Mockup</h3>
              <div className="project-links">
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="project-link">
                  <span>⌥</span> Figma
                </a>
                <a href="https://www.figma.com/proto/4EIm1kZ4TO6os9QQOEAM7e/Datagenetx?node-id=1-2&starting-point-node-id=32%3A70" target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
 
          <div className="project-card">
            <div className="project-image">
              <div className="project-img-placeholder"><span>🏥</span></div>
              <div className="project-overlay">
                <a href="https://www.figma.com/proto/ofp0fN24GKrycxeNpv6sAI/Yanhee-International-Hospital?node-id=1-2" target="_blank" rel="noreferrer" className="project-live">↗ Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">Hospital Website — UI Design Mockup</h3>
              <div className="project-links">
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="project-link">
                  <span>⌥</span> Figma
                </a>
                <a href="https://www.figma.com/proto/ofp0fN24GKrycxeNpv6sAI/Yanhee-International-Hospital?node-id=1-2" target="_blank" rel="noreferrer" className="project-link project-link-primary">
                  ↗ Live Demo
                </a>
              </div>
            </div>
          </div>
 
        </div>
      </section>
      <section id="education">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </div>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-year">2006 – 2011</div>
            <div className="edu-degree">BS in Computer Engineering</div>
            <div className="edu-school">International Electronics and Technical Institute (IETI)</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Sep – Dec 2022</div>
            <div className="edu-degree">Full Stack Software Development</div>
            <div className="edu-school">Zuitt Learning Institute (Coding Bootcamp)</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Mar – Jun 2022</div>
            <div className="edu-degree">AWS re/Start Program</div>
            <div className="edu-school">Edukasyon.PH</div>
          </div>
          <div className="edu-card">
            <div className="edu-year">Issued Jul 2022</div>
            <div className="edu-degree">AWS Certified Cloud Practitioner</div>
            <div className="edu-school">Amazon Web Services (AWS)<br />Official certification in cloud fundamentals</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-text">
            <h2 className="big-text">Let's build<br /><em>something</em><br />together.</h2>
            <p>Open to full-time, contract, or freelance roles in full-stack development, front-end engineering, or cloud infrastructure.</p>
            <a href="mailto:carminagordula@gmail.com" className="btn btn-primary">Send an email</a>
          </div>
          <div className="contact-links">
            <a href="mailto:carminagordula@gmail.com" className="contact-link">
              <div className="contact-link-icon">@</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">carminagordula@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/carmina-gordula-14a92773" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">in</div>
              <div className="contact-link-info">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">carmina-gordula-14a92773</div>
              </div>
            </a>
            <a href="https://cgordula.github.io/react-personal-portfolio/" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">↗</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Portfolio</div>
                <div className="contact-link-value">cgordula.github.io</div>
              </div>
            </a>
            <div className="contact-link" style={{ cursor: 'default' }}>
              <div className="contact-link-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
                  <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div className="contact-link-info">
                <div className="contact-link-label">Location</div>
                <div className="contact-link-value">Philippines · Remote-friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Carmina Gordula</p>
        <p>Developer · Philippines</p>
      </footer>

    </div>
  );
}

export default App;