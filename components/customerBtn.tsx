import React from "react";
import styles from "./customerBtn.module.scss";

import { useState } from "react";

interface Props {
    readonly title: string;
    readonly onChosen: () => void;
    readonly activeBtn: string;
}

const CustomerBtn: React.FunctionComponent<Props> = props => {
    const { title, onChosen, activeBtn } = props;

    return (
        <button
            type="button"
            title={title}
            className={`${styles.customer_btn} ${styles[activeBtn]}`}
            onClick={() => onChosen()}
        >
            {title}
        </button>
    );
};

export default CustomerBtn;
