import styles from "./HeaderCartButton.module.css";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../Context/CartContext";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    useEffect(() => {
        if (cartCtx.item.length === 0) return;
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)

        return (() => {
            if (timer) {
                clearTimeout(timer);
            }
        })
    }, [cartCtx.totalAmount])

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 
                    000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 
                    18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                </svg>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartCtx.item.length}</span>
        </button>
    );
}

export default HeaderCartButton;