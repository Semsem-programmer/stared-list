import React from 'react';
import PropTypes from 'prop-types';

class ListContainer extends React.Component {

    renderSwitch(param) {
        switch(param) {
            case 'name':
                return(
                <textarea>
                </textarea>
                );
            case 'name number':
                return(
                <textarea>
                </textarea>
                );
          default:
            return null;
        }
    }

    render() {
        const type = this.props.type;
        return (
            <form className='ListContainer'>
                { this.renderSwitch(type) }
            </form>
        )
    }
}

ListContainer.propTypes = {
    type: PropTypes.string.isRequired,
};



export {ListContainer};