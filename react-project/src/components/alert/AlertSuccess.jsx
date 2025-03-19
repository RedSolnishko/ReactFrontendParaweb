import React from "react";
import CheckIcon  from '../../assets/svg/alert/check-circle.svg?react';
import CloseIcon  from '../../assets/svg/alert/x.svg?react';

const AlertSuccess = () => {
    return(
        <div className="alert alert--success">
            <div className="alert__content"> 
                <CheckIcon className="alert__icon" />
                <span className="alert__text">
                    Text
                </span>
                <CloseIcon className="alert__icon" />
            </div>
        </div>
    );
};

export default AlertSuccess;