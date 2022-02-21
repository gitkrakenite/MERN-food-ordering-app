import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link"

import { useSelector } from "react-redux";

const Navbar = () => {



  const quantity = useSelector((state) => state.cart.quantity);


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>

          <Link href='/' passHref>
            <div className={styles.text} style={{ cursor: "pointer" }}>CHILLTONS!</div>
          </Link>

          <Link href='/' passHref>

            <div className={styles.text} style={{ cursor: "pointer" }}>THE BEST!</div>
          </Link>

          <div className={styles.text}>0702 610 175</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>

          <Link href='/'>
            <li className={styles.listItem} style={{ cursor: 'pointer' }}>Homepage</li>
          </Link>

          {/* <li className={styles.listItem}>Products</li> */}
          {/* <li className={styles.listItem}>Menu</li> */}
          <li className={styles.Logo}>Chilltons...</li>
          <li className={styles.listItem} style={{ opacity: 0.4 }}>Events</li>
          <li className={styles.listItem} style={{ opacity: 0.4 }}>Blog</li>
          <li className={styles.listItem}>Contact</li>

          <Link href='/admin'>
            <li className={styles.listItem}>Admin</li>
          </Link>

        </ul>
      </div>


      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>


    </div>
  );
};

export default Navbar;
