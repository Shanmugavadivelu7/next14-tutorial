import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Cornerstohn</div>
      <div className={styles.text}>
        Cornerstohn Solutions © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
