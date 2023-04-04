// React related imports
import React from 'react';

// Redux related imports
import { connect } from 'react-redux';

// CSS related imports
import './settings.css';

// Import reusable components
import ToggleButton from '../../userInputs/ToggleButton';

// Import utils
import CONSTANTS from '../../utils/constants';

function Settings(props) {
    const onChange = (obj) => {
        props.buttonClick(obj);
    };

    return (
        <div className={'settings-container'}>
            <div className={'toggle-container'} >
                <ToggleButton
                    config={{
                        display: 'Scientific',
                        type: CONSTANTS.SCIENTIFIC,
                        value: props.isScientific,
                        callbacks: { onChange }
                    }}
                />
            </div>
            <div className={'toggle-container theme-container'} >
                <ToggleButton
                    config={{
                        display: props.theme,
                        type: CONSTANTS.THEME,
                        value: props.theme === CONSTANTS.DARK,
                        callbacks: { onChange }
                    }}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isScientific: state.isScientific,
        theme: state.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buttonClick: (payload) => dispatch(payload)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
