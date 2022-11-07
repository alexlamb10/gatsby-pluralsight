import React from "react";
import  * as styles from './layout.module.scss'
import Header from "./header";

export default ({children}) => (
    <div className={styles.container}>
        <Header />
        {children}
    </div>
)