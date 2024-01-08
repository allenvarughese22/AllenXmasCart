import React from "react";
import styles from "./HomePageImage.module.css"; // Import the CSS module

function HomePageImage() {
  return (
    <div className={`jumbotron ${styles.jumbotronbg}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className={` ${styles.display6}`}>Merry Christmas</h1>
            <p className={styles.textdesign}>Every day is Xmas in XmasMart</p>
          </div>
          <div className="col-md-4 text-right">
            <div className={styles.imgcontainer}>
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
  );
}

export default HomePageImage;
