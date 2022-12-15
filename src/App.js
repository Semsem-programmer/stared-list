import React from 'react';
import './App.css';

import {Header} from './components/Header';
import {Page} from './components/Page';
import {Nav} from './components/Nav';
import {Constraints} from './components/Constraints';
import {ListContainer} from './components/ListContainer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Page id='starter-page'>
          <Header text="مرحبًا بك في مساعد إعداد قائمة التميز" />
          <Nav btnPrev=""  btnNext="ابدأ" />
        </Page>
        <Page id='constraint-page'>
          <Header text="شروط المركز الأول" />
          <Constraints />
          <Nav btnPrev="السابق"  btnNext="التالي" />
        </Page>
        <Page id='read-page'>
          <Header text="ألصق قائمة من أنهوا الورد هنا" />
          <ListContainer type='name'/>
          <Nav btnPrev="السابق"  btnNext="التالي" />
        </Page>
        <Page id='discusser-page'>
          <Header text="ألصق قائمة المشاركين في النقاش أو النشاط" />
          <ListContainer type='name'/>
          <Nav btnPrev="السابق"  btnNext="التالي" />
        </Page>
        <Page id='posts-page'>
          <Header text="ألصق قائمة مشاركات القراء كل قارئ وعدد مشاركاته أمامه" />
          <ListContainer type='name number'/>
          <Nav btnPrev="السابق"  btnNext="التالي" />
        </Page>
        <Page id='result-page'>
          <Header text="قائمة التميز جاهزة" />
          <Nav btnPrev="السابق"  btnNext="ابدأ من جديد" />
        </Page>
        
      </React.Fragment>
    );
  }

}

export default App;
