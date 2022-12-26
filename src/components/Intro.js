import React from 'react';
import PropTypes from 'prop-types';

class Intro extends React.Component {
    render() {
        return(
            <div className="intro-div">
                <h2>{this.props.text}</h2>
            </div>
        );
    }
}

Intro.propTypes = {
    text: PropTypes.string.isRequired,
}


export {Intro};
