import Image from 'next/image';
import Link from 'next/link';
import '../styles/style.css';

export default function HomePage() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">PeersHub</div>
          <ul className="nav-links">
            <li><a href="#">Community Board</a></li>
            <li><a href="#">Collaboration</a></li>
            <li><a href="#">Classroom/Meet</a></li>
            <li><a href="#">Login/SignUp</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>PeersHub</h1>
            <p className="tagline">
              is a platform for CSE students to connect, collaborate, and grow through skill-sharing and real-world projects.
            </p>
            <p className="cta">Fuel Your Learning Journey with Peers.</p>
            <div className="buttons">
              <Link href="/login" className="login-btn">Login</Link>
              <Link href="/signup" className="signup-btn">SignUp</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/illustrations/Innovation-amico.png" alt="PeerHub platform illustration" width={500} height={500} />
          </div>
        </section>

        <section className="community-chat">
          <div className="chat-content">
            <h2>Community Chat</h2>
            <p className="chat-description">A real-time global chat space where peers can connect</p>
            <blockquote className="chat-quote">
              "Drop a message, ask questions, share news, or help others - connect with peers across the platform in real time."
            </blockquote>
            <button className="chat-btn">Chat Now</button>
          </div>
          <div className="chat-image">
            <Image src="/illustrations/Remote meeting-amico.png" alt="Community chat illustration" width={500} height={500} />
          </div>
        </section>

        <section className="collab-section">
          <div className="collab-container">
            <div className="collab-text">
              <h2>Collaboration Hub</h2>
              <p className="quote">
                “Turn ideas into impact—together.”
              </p>
              <p className="desc">
                Discover and connect with peers who share your passion... one collab at a time.
              </p>
              <a href="#" className="btn-purple">Connect Now</a>
            </div>
            <div className="collab-image">
              <Image src="/illustrations/Team work-amico.png" alt="Collaboration Illustration" width={500} height={500} />
            </div>
          </div>
        </section>

        <section className="classroom-section">
          <div className="classroom-container">
            <div className="classroom-image">
              <Image src="/illustrations/Remote team-amico.png" alt="Interactive Classroom Illustration" width={500} height={500} />
            </div>
            <div className="classroom-text">
              <h2>Interactive Classroom</h2>
              <p className="quote">
                “Where learning meets collaboration—live and hands-on.”
              </p>
              <p className="desc">
                A virtual space designed for real-time collaboration, live coding sessions...
              </p>
              <a href="#" className="btn-purple">Launch Virtual Room</a>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="team-title">Our Team</h2>
          <div className="team-grid">
            {[1,2,3,4].map(i => (
              <div className="team-card" key={i}>
                <Image src="/illustrations/user avatar.jpeg" alt="Team Member" width={150} height={150} />
                <h3>Member Name</h3>
                <p>Member Description - lorem ipsum student member hub lorem ipsum</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="text">
            <h2>About PeersHub</h2>
            <p><strong>Empowering Students. Enabling Success.</strong></p>
            <p>PeerHub is more than just a platform — it’s a growing ecosystem...</p>
          </div>
          <div className="image">
            <Image src="/illustrations/Computer.png" alt="About PeerHub" width={500} height={500} />
          </div>
        </section>

        <section className="section reverse">
          <div className="text">
            <h2>Our Mission</h2>
            <ul>
              <li>✓ Discover the strength of hands-on collaboration</li>
              <li>✓ Gain mentorship from fellow peers</li>
              <li>✓ Stay aligned with current market needs and future tech trends</li>
            </ul>
          </div>
          <div className="image">
            <Image src="/illustrations/Connected world-rafiki.png" alt="Our Mission" width={500} height={500} />
          </div>
        </section>

        <section className="section">
          <div className="text">
            <h2>Why PeersHub?</h2>
            <ul>
              <li>✓ A global student community always ready to connect</li>
              <li>✓ Peer-reviewed collaboration-driven project rooms</li>
              <li>✓ Active promotion through the ecosystem</li>
              <li>✓ Inspiration for the skills that matter in today’s job market</li>
            </ul>
          </div>
          <div className="image">
            <Image src="/illustrations/Questions-amico.png" alt="Why PeerHub" width={500} height={500} />
          </div>
        </section>

        <footer>
          <p>
            Built by students, for students. At PeerHub, we believe in growing together — one connection, one collaboration, and one breakthrough at a time.
          </p>
          <div className="footer-columns">
            <div className="footer-col">
              <h4>PeerHub</h4>
              <p>Email: support@peerhub.in<br />Location: India</p>
            </div>
            <div className="footer-col">
              <h4>Team PeerHub</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Collaboration Board</a></li>
                <li><a href="#">Classroom</a></li>
                <li><a href="#">Community Chat</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us on:</h4>
              <div className="social-icons">
                <a href="#">&#xf09a;</a>
                <a href="#">&#xf16d;</a>
                <a href="#">&#xf08c;</a>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 30, color: '#888' }}>&copy; 2025 PeerHub. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}                                                            