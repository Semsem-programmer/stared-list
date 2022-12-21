import React from 'react';
import PropTypes from 'prop-types';

class ListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }

    state = {
        errorMsg: '',
    };

    namePattern = "[\u0621-\u064A /.\n]+";
    nameNumberPattern = "[\u0621-\u064A /.\n]+[ ]+[0-9]+";
    isValidate = this.props.isValidate;


    checkPattern = (text, pattern) => {

        const re = new RegExp( pattern , "g");

        var result;
        var fullLine = "";
        while ((result = re.exec(text)) !== null) {
            fullLine = fullLine + result[0];
        }
        fullLine = fullLine.replace(/\n{2,}/g, "\n");
        return fullLine;
    }

    checkAvailable = (persons, names) => {
        const strToArr = (str) => str.split("\n");
        const arrToSet = (str) => [...new Set(strToArr(str))];

        persons = this.checkPattern(persons, this.namePattern);

        let personSet = arrToSet(persons);
        let list = arrToSet(names);
 
        for (let i = 0; i < personSet.length; i++) {
            personSet[i] = personSet[i].trim();
        }

        for (let i = 0; i < list.length; i++) {
            list[i] = list[i].trim();
        }
        
        let error = '';
        
        personSet.forEach((value) => {
            if (!list.includes(value)) {
                error = error + 'الاسم(' + value + ') غير موجود في قائمة من أنهوا الورد، عليك حذفه أو تعديل قائمة من أنهوا الورد...' ;
            }
        });

        if (error === '') {
            return true;
        } else {
            this.setState({
                errorMsg: error,
            });
            return false;
        }
    }              

    validateNames = (e) => {
        e.preventDefault();

        const id = e.target.getAttribute("data-id");
        const pattern = e.target.getAttribute("data-pattern");
        const value = e.target.getAttribute("data-value");


        let correctedLine = this.checkPattern(value, pattern);

        if (id === "names") {
            this.props.onWrite(id, correctedLine);
            this.props.changeValidate(true);
        } else {
            const names = this.props.names;
            if (this.checkAvailable(correctedLine, names)) {
                this.props.onWrite(id, correctedLine);
                this.props.changeValidate(true);
            } else {
                this.props.changeValidate(false);
            }
        }
    }

    changeHandler = (e) => {
        if (this.isValidate === true) {
            this.props.changeValidate(false);
        }

        const {id, value} = e.currentTarget;
        this.props.onWrite(id, value);
    }

    renderSwitch(param) {
        const names = this.props.names;
        const discusserNames = this.props.discusserNames;
        const postsNames = this.props.postsNames;

        switch(param) {
            case 'name':
                return(
                    <>
                        <textarea id="names" value={names}  onChange={this.changeHandler}>
                        </textarea>
                        <button id="names-check-btn" data-id="names" data-pattern={this.namePattern} data-value={names} onClick={this.validateNames}>تحقق</button>
                    </>
                );
            case 'disscusser':
                return(
                    <>
                        <textarea id="discusserNames" value={discusserNames} onChange={this.changeHandler}>
                        </textarea>
                        <button id="discusserNames-check-btn" data-id="discusserNames" data-pattern={this.namePattern} data-value={discusserNames} onClick={this.validateNames}>تحقق</button>
                    </>
                );           
            case 'name number':
                return(
                    <>
                        <textarea id="postsNames" value={postsNames} onChange={this.changeHandler}>
                        </textarea>
                        <button id="postsNames-check-btn" data-id="postsNames" data-pattern={this.nameNumberPattern} data-value={postsNames} onClick={this.validateNames}>تحقق</button>
                    </>
                );
          default:
            return null;
        }
    }

    render() {
        const type = this.props.type;
        const errorMsg = this.state.errorMsg;
         
        return (
            <>
                <form className='ListContainer'>
                    { this.renderSwitch(type) }
                </form>
                <div className="errorMsg">{errorMsg}</div>
            </>
        )
    }
}

ListContainer.propTypes = {
    type: PropTypes.string.isRequired,
    isValidate: PropTypes.bool.isRequired,
    changeValidate:PropTypes.func.isRequired,
};



export {ListContainer};