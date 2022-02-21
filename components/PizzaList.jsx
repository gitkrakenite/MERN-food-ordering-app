import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LIFE'S TOO SHORT FOR BORING FOOD..</h1>
      <p className={styles.desc}>
        We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better. We welcome your appetite. Let our food satisfy your hunger. Let’s Eat Together!
      </p>

      <div className={styles.wrapper}>

        {pizzaList.map((pizza) => (

          <PizzaCard key={pizza._id} pizza={pizza} />
        ))

        }

      </div>
    </div>
  );
};

export default PizzaList;
