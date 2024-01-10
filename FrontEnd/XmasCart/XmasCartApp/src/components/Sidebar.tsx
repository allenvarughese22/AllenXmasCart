import React from "react";
import styles from "./Sidebar.module.css"; // Import the CSS module for styling

const Sidebar = React.forwardRef((props, ref) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <p className={styles.xmartMenu}>Xmart Menu</p>
        <li>Best Offers</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </div>
  );
});

export default Sidebar;
