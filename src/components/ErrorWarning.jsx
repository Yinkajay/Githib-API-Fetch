import React from "react";
import styles from './ErrorWarning.module.css'

const ErrorWarning = ({ error }) => {
    return (
        <div className={styles['error-ctn']}>
            <h1>
                <b>Oops! Something went wrong!</b> <br />
            </h1>
            <h2>{error.message}</h2>
        </div>
    );
};

export default ErrorWarning;