import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Loader: React.FC = () => {
    return (
        <div className="d-flex justify-content-center">
            {" "}
            <div className="spinner-border" role="status">
                {" "}
            </div>
            {" "}
        </div>
    );
};
export default Loader;
