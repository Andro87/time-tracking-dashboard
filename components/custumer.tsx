import React, { ReactNode } from "react";
import styles from "./customer.module.scss";

interface Props {
    readonly time: ReactNode;
}

const Customer: React.FunctionComponent<Props> = props => {
    const { time } = props;

    return (
        <div className={styles.customer_container}>
            <div className={styles.customer}>
                <img src="./images/image-jeremy.png" alt="" />
                <div>
                    <p> Report for</p> <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className={styles.customer_btn_wrapper}>{time}</div>
        </div>
    );
};

export default Customer;
