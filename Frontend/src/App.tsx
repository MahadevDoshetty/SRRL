import NavBar from "./components/NavBar";
import Register from "./components/Register";
import "./App.css";
import logo from '../src/assets/logo.png'

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <section id="home" className="section section-hero">
          <div className="hero container">
            <div className="hero-content">
              <h1>Moving India Forward</h1>
              <p className="lead">
                Efficient, safe and timely transport solutions tailored for your
                business.
              </p>
              <div className="hero-ctas">
                <a href="#services" className="btn btn-primary">
                  Our Services
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Contact
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src={logo}
                alt="truck"
                className="hero-truck"
              />
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container">
            <h2 className="section-title">About Us</h2>
            <p className="section-intro">
              We combine modern logistics technology with experienced operations to
              deliver reliability across long distances.
            </p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <div className="features-grid">
              <article className="feature-card">
                <h3>Full Truck Load</h3>
                <p>Dedicated routes & secure handling.</p>
              </article>
              <article className="feature-card">
                <h3>Part Load</h3>
                <p>Cost-effective consolidation options.</p>
              </article>
              <article className="feature-card">
                <h3>Warehousing</h3>
                <p>Short & long-term storage with tracking.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-section">
            <div className="contact-left">
              <h2 className="section-title">Contact & Registration</h2>
              <p className="section-intro">
                Fill the registration form — our operations team will reach out
                quickly.
              </p>
              <ul className="contact-list">
                <li>
                  <strong>Phone:</strong> +91-9704263866
                </li>
                <li>
                  <strong>Email:</strong> shreerenuka.roadline@gmail.com
                </li>
                <li>
                  <strong>Office:</strong> Hyderabad, India
                </li>
              </ul>
            </div>

            <div className="contact-right">
              <Register />
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Shree Renuka Roadlines — All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}