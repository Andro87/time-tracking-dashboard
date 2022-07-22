import React from "react";
import styles from "./TimeTracking.module.scss";
import Ellipsis from "svgs/icon-ellipsis.svg";

interface Props {
    readonly title: string;
    readonly current: number;
    readonly previous: number;
    readonly icon: string;
    readonly activity: string;
}

export const TimeTracking: React.FunctionComponent<Props> = props => {
    const { title, current, previous, icon, activity } = props;
    return (
        <div
            className={`${styles.time_tracking_container} ${styles[activity]}`}
        >
            <img src={icon} alt="" className={styles.icon} />
            <div className={styles.time_tracking}>
                <div className={styles.time_activity}>
                    <p>{title}</p>
                    <Ellipsis className={styles.ellipsis} />
                </div>
                <div className={styles.time}>
                    <h2>{current}hrs</h2>
                    <p>Last Week - {previous}hrs</p>
                </div>
            </div>
        </div>
    );
};
