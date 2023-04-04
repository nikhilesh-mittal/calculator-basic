// React related imports
import React from 'react';

// Redux related imports.
import { connect } from 'react-redux';

// CSS related imports
import './display.css';

// Import utils.
import CONSTANTS from '../../utils/constants';

/*
 *  display: Text to display.
 */
function Display({ config = {}, theme }) {
    const { value } = config;

    return (
        <div className={`displayBase ${theme === CONSTANTS.DARK ? 'displayBase-dark' : ''}`}>
            {value}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(Display);
