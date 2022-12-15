import React from 'react';
import PropTypes from 'prop-types';


class Nav extends React.Component {

    onLinkClickHandler = (e) => {
        e.preventDefault()

        const {currentPage} = this.props.currentPage;
        const nextPage = (currentPage + 1) % 6;

        this.props.onRoutPage(nextPage);
    }

    render() {

        const btnPrev = this.props.btnPrev;
        const btnNext = this.props.btnNext;

        return(
            <nav>
                {
                    (btnPrev!=='') && <a className="btn-prev" onClick={this.onLinkClickHandler}> {btnPrev} </a>
                }
                {
                    (btnNext!=='') && <a className="btn-next" onClick={this.onLinkClickHandler}> {btnNext} </a>
                }     
            </nav>
        );
    }
}

Nav.propTypes = {
    btnPrev: PropTypes.string.isRequired,
    btnNext: PropTypes.string.isRequired
}



export {Nav};