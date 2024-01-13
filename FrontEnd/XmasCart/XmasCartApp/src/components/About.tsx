import React from "react";
import "./About.css"; // Make sure the CSS file is named correctly and imported here

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1> XMasMart - EveryDay is Xmas here! </h1>

      <p>
        <span className="bold">XMasMart</span>, the innovative vision of{" "}
        <span className="italic">Allen</span>, launched on{" "}
        <span className="bold">December 25, 2023</span>. This e-commerce
        platform quickly became a beloved destination for festive Christmas
        essentials. At XMasMart, customers find everything from unique
        decorations to heartwarming gifts, embodying the joyous spirit of the
        season. More than just a store,{" "}
        <span className="bold italic">XMasMart</span> is a year-round
        celebration of Christmas, fostering a community that cherishes tradition
        and warmth.
      </p>

      <div className="contact-form-container">
        <form action="/submit-form" method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              rows={4}
              required
              className="form-control"
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
