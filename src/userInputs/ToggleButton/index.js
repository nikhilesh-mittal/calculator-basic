// React related imports
import React from 'react';

// Redux related imports
import { connect } from 'react-redux';

// CSS related imports.
import './toggleButton.css';

// Import utils.
import CONSTANTS from '../../utils/constants';

/*
 *  display: Text to display on button.
 *  callbacks: Object which contains different callbacks i.e. onClick, onHover etc.
 *  value: Parent component is going to take action based on this value. Two buttons 
 *    performing same function will have same value.
 */
function ToggleButton({ config = {}, theme }) {
    const { display, type, value, callbacks } = config;

    // Relay on Change Callback to parent component.
    const changeCallback = () => {
        if (callbacks && callbacks.onChange) {
            callbacks.onChange({ type, value: !value });
        }
    }

    return (
        <div className={'toggleButton-container'}>
            <label className={'switch'}>
                <input
                    type={'checkbox'}
                    onChange={changeCallback}
                    checked={value}
                />
                <span className={'slider round'} />
            </label>
            <div className={`toggleButton-text ${theme === CONSTANTS.DARK ? 'toggleButton-dark' : ''}`}>
                {display}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(ToggleButton);
