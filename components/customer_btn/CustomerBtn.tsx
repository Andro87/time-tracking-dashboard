import React from "react";
import styles from "./CustomerBtn.module.scss";

interface Props {
    readonly title: string;
    readonly onChosen: () => void;
    readonly activeBtn: string;
}

export const CustomerBtn: React.FunctionComponent<Props> = props => {
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
