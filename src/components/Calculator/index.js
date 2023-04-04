// React related imports
import React from 'react';

// Redux related imports
import { connect } from 'react-redux';

// CSS related imports
import './calculator.css';

// Import utils
import { baseConfig, scientificConfig } from '../../utils/config';
import myMath from '../../utils/math';
import CONSTANTS from '../../utils/constants';

// Import reusable components
import Button from '../../userInputs/Button';
import Display from '../../userOutputs/Display';

const getViewFromConfig = (config, callbacks) => config && config.map
    ? config.map(element => <Button
        key={`key-${element.value}`}
        config={{
            ...element,
            callbacks,
            size: 100 / config.length
        }}
    />) : null;

function Calculator(props) {
    const view = [];

    const onClick = (obj) => {
        props.buttonClick && props.buttonClick(obj);
    }

    baseConfig && baseConfig.map && baseConfig.map((row, index) => {
        return view.push(<div
            className={'rowContainer'}
            key={`row-${index}`}>
            {getViewFromConfig(row, { onClick })}
        </div>);
    })

    if (props.isScientific) {
        scientificConfig && scientificConfig.map
            && view.push(<div
                className={'rowContainer'}
                key={`row-${baseConfig && baseConfig.length}`}>
                {getViewFromConfig(scientificConfig, { onClick })}
            </div>);
    }

    return (<div className={`calc-container ${props.theme === CONSTANTS.DARK ? 'calc-container-dark' : ''}`}>
        <Display config={{
            value: myMath.getDisplayValue(props.history)
        }} />
        {view}
    </div>);
}

const mapStateToProps = state => {
    return {
        history: state.history,
        isScientific: state.isScientific,
        theme: state.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buttonClick: (payload) => dispatch(payload)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
