import React from 'react';
import './App.css';

import {Header} from './components/Header';
import {Page} from './components/Page';
import {Nav} from './components/Nav';
import {Constraints} from './components/Constraints';
import {ListContainer} from './components/ListContainer';

const PAGES = [
  'starter-page',
  'constraint-page',
  'read-page',
  'discusser-page',
  'posts-page',
  'result-page',
];


class App extends React.Component {

  state = {
    currentPage: 0,
    names: '',
    discusserNames: '',
    postsNames: '',
    isValidate: true,
  };

  validate = () => {
    return true;
  };

  showPage = (pageNo) => {
    if (this.validate()) {
      
      this.setState({
        currentPage: pageNo,
      });
    }
  };

  writeTextareaValue = (stateName, correctedLine) => {
    this.setState({
      [stateName]: correctedLine,
    });
  }

  changeValidate = (value) => {
    this.setState({
      isValidate: value,
    });
  }

/*
  writeNames = (correctedLine) => {
    this.setState({
      names: correctedLine,
    });
  }

  writeDiscusserNames = (correctedLine) => {
    this.setState({
      discusserNames: correctedLine,
    });
  }

  writePostsNames = (correctedLine) => {
    this.setState({
      postsNames: correctedLine,
    });
  }
*/

  render() {
    const currentPage = this.state.currentPage;
    const names = this.state.names;
    const discusserNames = this.state.discusserNames;
    const postsNames = this.state.postsNames;
    const isValidate = this.state.isValidate;

    return (
      <React.Fragment>
        {
          (PAGES[currentPage] === 'starter-page') && <Page id='starter-page'>
              <Header text="مرحبًا بك في مساعد إعداد قائمة التميز" />
              <Nav currentPage={currentPage} btnPrev=""  btnNext="ابدأ" onRoutPage={this.showPage} isValidate={true}/>
          </Page>
        } 
        {
          (PAGES[currentPage] === 'constraint-page') &&  <Page id='constraint-page'>
              <Header text="شروط المركز الأول" />
              <Constraints />
              <Nav currentPage={currentPage} btnPrev="السابق"  btnNext="التالي" onRoutPage={this.showPage} isValidate={true}/>
            </Page>
        }
        {
          (PAGES[currentPage] === 'read-page') && <Page id='read-page'>
              <Header text="ألصق قائمة من أنهوا الورد هنا" />
              <ListContainer type='name' names={names} onWrite={this.writeTextareaValue} isValidate={isValidate} changeValidate={this.changeValidate}/>
              <Nav currentPage={currentPage} btnPrev="السابق"  btnNext="التالي" onRoutPage={this.showPage} names={names} isValidate={isValidate}/>
            </Page>
        }
        {
          (PAGES[currentPage] === 'discusser-page') && <Page id='discusser-page'>
              <Header text="ألصق قائمة المشاركين في النقاش أو النشاط" />
              <ListContainer 
                type='disscusser' 
                names={names} 
                discusserNames={discusserNames} 
                onWrite={this.writeTextareaValue} 
                isValidate={isValidate} 
                changeValidate={this.changeValidate}
              />
              <Nav currentPage={currentPage} btnPrev="السابق"  btnNext="التالي" onRoutPage={this.showPage} isValidate={isValidate}/>
            </Page>
        }
        {
          (PAGES[currentPage] === 'posts-page') && <Page id='posts-page'>
              <Header text="ألصق قائمة مشاركات القراء كل قارئ وعدد مشاركاته أمامه" />
              <ListContainer 
                type='name number' 
                names={names} 
                postsNames={postsNames} 
                onWrite={this.writeTextareaValue} 
                isValidate={isValidate} 
                changeValidate={this.changeValidate}
              />
              <Nav currentPage={currentPage} btnPrev="السابق"  btnNext="التالي" onRoutPage={this.showPage} isValidate={isValidate}/>
            </Page>
        }
        {
          (PAGES[currentPage] === 'result-page') && <Page id='result-page'>
              <Header text="قائمة التميز جاهزة" />
              <Nav currentPage={currentPage} btnPrev="السابق"  btnNext="ابدأ من جديد" onRoutPage={this.showPage} isValidate={true}/>
            </Page>
        }      
      </React.Fragment>
    );
  }

}

export default App;
