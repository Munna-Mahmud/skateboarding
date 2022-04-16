import React from 'react';
import error from '../../../../assets/errorr.jpg'

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <div>
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;