import React from 'react';
import PropTypes from 'prop-types';

class Page extends React.Component {
    render() {
        return(
            <div id="page">
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    id: PropTypes.string.isRequired,   
}



export {Page};