import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {

    handleFocus = (event) => event.target.select();

    render() {
        const dataResult = this.props.dataResult;

        return (
            <div className="div-result">
                <h3>المركز الأول</h3>
                <textarea type="text" readOnly="" value={dataResult.firstRank} onFocus={this.handleFocus} >
                </textarea>
                <h3>المركز الثاني</h3>
                <textarea readOnly="" value={dataResult.secondRank} onFocus={this.handleFocus}>
                </textarea>
                <h3>المركز الثالث</h3>
                <textarea readOnly="" value={dataResult.thirdRank} onFocus={this.handleFocus}>
                </textarea>
            </div>
        );
    }
}


Result.propTypes = {
    dataResult: PropTypes.object.isRequired
};


export {Result};