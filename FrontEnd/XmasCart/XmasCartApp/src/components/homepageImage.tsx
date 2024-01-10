import React from "react";
import styles from "./HomePageImage.module.css";
import Carousel from "react-bootstrap/Carousel";

function HomePageImage() {
  return (
    <div>
      <div className={`jumbotron ${styles.jumbotronbg}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className={styles.display6}>Merry Christmas</h1>
              <p className={styles.textdesign}>Every day is Xmas in XmasMart</p>
            </div>
            <div className="col-md-4 text-right">
              <div className={styles.imgcontainer}>
                {/* Santa image */}
                <img
                  src="../src/assets/santa.jpeg"
                  alt="Santa Claus"
                  className={`img-fluid ${styles.imgfluid}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Larger Carousel */}
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-8 carouselcustom">
            <Carousel
              nextIcon={<span>&#9654;</span>}
              prevIcon={<span>&#9664;</span>}
            >
              <Carousel.Item>
                <img
                  src="../src/assets/offer5.jpeg"
                  alt="Carousel Image 1"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
                <Carousel.Caption>
                  <h3>Offer 1</h3>
                  <p>Description for Offer 1</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="../src/assets/offer2.jpeg"
                  alt="Carousel Image 2"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
                <Carousel.Caption>
                  <h3>Offer 2</h3>
                  <p>Description for Offer 2</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="../src/assets/offer6.jpeg"
                  alt="Carousel Image 3"
                  className="img-fluid"
                  style={{ maxHeight: "400px" }}
                />
                <Carousel.Caption>
                  <h3>Offer 3</h3>
                  <p>Description for Offer 3</p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* Add more Carousel.Items for additional offers */}
            </Carousel>
          </div>
          {/* Additional section to the right of the Carousel */}
          <div className="col-md-4">
            <div className={styles.additionalSection}>
              <p className={styles.masMessage}>
                Embrace the spirit of Christmas by gifting yourself and your
                cherished ones with the magic of
                <span className={styles.boldText}> Heartfelt Presents</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Space */}
      <div style={{ height: "20px" }}></div>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                &copy; 2022 XmasMart. All rights reserved. <br />
                Developed by Allen
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePageImage;
