// React related imports
import React from 'react';

// Redux related imports
import { connect } from 'react-redux';

// CSS related imports
import './layout.css';

// Import utils
import CONSTANTS from '../../utils/constants';

// Import reusable components
import Settings from '../Settings';
import Calculator from '../Calculator';

function Layout({ theme }) {
    return (
        <div className={`layout-container ${theme === CONSTANTS.DARK ? 'layout-dark' : ''}`}>
            <Settings />
            <Calculator />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(Layout);
