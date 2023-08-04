import React from 'react';
import "./WorkPlanningBtn.css";

const WorkPlanningBtn = ({ onClick, submitClass, canSubmit }) => {


    return (
        <>
            <input type="button"
                className={submitClass}
                disabled={!canSubmit}
                id="submitBtn"
                value="WORK PLANNING"
                onClick={onClick} />
        </>
    );
}

export default WorkPlanningBtn;
