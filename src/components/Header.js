import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return(
            <header>
                <h2>{this.props.text}</h2>
            </header>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}


export {Header};
