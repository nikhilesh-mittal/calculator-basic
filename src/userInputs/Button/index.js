// React related imports
import React from 'react';

// Redux related imports.
import { connect } from 'react-redux';

// Import utils.
import CONSTANTS from '../../utils/constants';

// CSS related imports.
import './button.css';

/*
 *  display: Text to display on button.
 *  callbacks: Object which contains different callbacks i.e. onClick, onHover etc.
 *  value: Parent component is going to take action based on this value. Two buttons 
 *    performing same function will have same value.
 */
function Button({ config = {}, theme }) {
    const { display, callbacks = {}, value, type, subType, size } = config;

    // Relay on Click Callback to parent component.
    const clickCallback = () => {
        if (callbacks && callbacks.onClick) {
            callbacks.onClick({ type, subType, value });
        }
    }
    
    return (
        <button
            className={`base ${theme === CONSTANTS.DARK ? 'base-dark': ''}`}
            onClick={clickCallback}
            style={{ width: `${size}%` }}>
            {display}
        </button>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(Button);
