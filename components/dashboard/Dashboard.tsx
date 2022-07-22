import React from "react";
import styles from "./Dashboard.module.scss";

import { Customer, CustomerBtn, TimeTracking } from "components";
import { data } from "data/data";
import { useState } from "react";
export const Dashboard: React.FunctionComponent = () => {
    const [period, setPeriod] = useState("weekly");
    const [selected, setSelected] = useState<number>(1);
    const buttons = [
        { title: "daily" },
        { title: "weekly" },
        { title: "monthly" }
    ];

    return (
        <main className={styles.main}>
            <Customer
                time={buttons.map((button, index) => {
                    return (
                        <CustomerBtn
                            title={button.title}
                            key={index}
                            onChosen={() => {
                                setPeriod(button.title);
                                setSelected(index);
                            }}
                            activeBtn={selected === index ? "active" : null}
                        />
                    );
                })}
            />

            <div className={styles.main_time_tracking}>
                {data.map(item => {
                    return (
                        <TimeTracking
                            key={item.id}
                            title={item.title}
                            current={item.timeframes[period].current}
                            previous={item.timeframes[period].previous}
                            icon={item.icon}
                            activity={item.color}
                        />
                    );
                })}
            </div>
        </main>
    );
};
