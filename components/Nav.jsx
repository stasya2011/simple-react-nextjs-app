import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => {
    return (
    <div className={styles.nav}>
        <Link href="/">Main page</Link>
        <Link href="/users">List of users page</Link>
      </div>
    );
};

export default Nav;
