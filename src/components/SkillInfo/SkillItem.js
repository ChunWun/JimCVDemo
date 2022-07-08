import styles from "./SkillItem.module.css";
import React from "react";


const SkillItem = (props) => {
    // const cartCtx = useContext(CartContext);

    // const addToCartHandler = (amount) => {
    //     cartCtx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: props.price
    //     });
    // };

    return (
        <React.Fragment>
            <li className={styles.meal}>
                <div>
                    <h3 >{props.name}</h3>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                    <div className={styles.price}>
                        ${props.price}
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default SkillItem;