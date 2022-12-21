import React from 'react';
import PropTypes from 'prop-types';


class Nav extends React.Component {

    onLinkClickHandler = (e) => {
        e.preventDefault()

        const {id} = e.currentTarget;
        const step = parseInt(id);
        
        const currentPage = this.props.currentPage;
        const nextPage = (currentPage + step) % 6;

        this.props.onRoutPage(nextPage);
    }

    render() {

        const btnPrev = this.props.btnPrev;
        const btnNext = this.props.btnNext;
        const isValidate = this.props.isValidate;

        return(
            <nav>
                {
                    (btnPrev!=='') && <button id='-1' className="btn-prev" onClick={this.onLinkClickHandler}> {btnPrev} </button>
                }
                {
                    (btnNext!=='') && <button id='1'  className="btn-next" onClick={this.onLinkClickHandler}
                                    disabled = {!isValidate}> {btnNext} </button>
                }     
            </nav>
        );
    }
}

Nav.propTypes = {
    btnPrev: PropTypes.string.isRequired,
    btnNext: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    onRoutPage: PropTypes.func.isRequired,
    isValidate: PropTypes.bool.isRequired,
}



export {Nav};