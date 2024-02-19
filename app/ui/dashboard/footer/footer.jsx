import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mandarliev</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
}

export default Footer;
