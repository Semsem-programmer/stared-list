import React from 'react';


class Constraints extends React.Component {

    state = {
        checkValue: true,
        quotaionNumber: 5,
    }

    onCheckChangeHandler = (e) => {
        this.setState({
            checkValue: e.currentTarget.checked,
        });
    }

    onChangeQuotionNumberHandler = (e) => {
        this.setState({
            quotaionNumber: e.currentTarget.value,
        });
    }

    render() {
        return(
            <form className='ListContainer'>
                <label id="discuss-checkbox">
                    شارك في النقاش أو النشاط <input type="checkbox" 
                    onChange={this.onCheckChangeHandler} />
                </label>
                <label>عدد الاقتباسات أكثر من: <input
                    type='number'
                    min='0'
                    inputMode='numeric'
                    pattern="[0-9]*"
                    required
                    value={this.state.quotaionNumber}
                    onChange={this.onChangeQuotionNumberHandler}
                    />
                </label>
            </form>
        );
    }
}



export {Constraints};