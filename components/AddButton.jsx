import Link from "next/link";
import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
    return (
        <>
            <div onClick={() => setClose(false)} className={styles.mainAddButton}>
                New Delicacy
            </div>

            <Link href='/admin'>
                <div onClick={() => setClose(false)} className={styles.mainAddButton}>
                    Orders
                </div>
            </Link>

        </>


    );
};

export default AddButton;