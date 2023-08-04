import React from 'react';
import "./SwitchableTab.css";


const SwitchableTab = ({ nameOfTab, onClick, activeTab }) => {
    return (
        <div className={`${nameOfTab === activeTab ? 'active' : ''}`} onClick={() => onClick(nameOfTab)}>
            {nameOfTab}
        </div>
    );
}

export default SwitchableTab;
