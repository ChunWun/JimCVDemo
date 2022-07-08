import React from "react";
import Skills from "./Skills";
import Summary from "./Summary";

const Brief = (props) => {
    return (
        <React.Fragment>
            <Summary />
            <Skills />
        </React.Fragment>
    )
}

export default Brief;