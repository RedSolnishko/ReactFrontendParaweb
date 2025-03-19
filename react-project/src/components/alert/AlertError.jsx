import React from "react";
import ErrorIcon  from '../../assets/svg/alert/alert-circle.svg?react';
import CloseIcon  from '../../assets/svg/alert/x.svg?react';

const AlertError = () => {
    return(
        <div className="alert alert--error">
            <div className="alert__content"> 
                <ErrorIcon className="alert__icon" />
                <span className="alert__text">
                    Text1242412414
                </span>
                <CloseIcon className="alert__icon" />
            </div>
        </div>
    );
};

export default AlertError;