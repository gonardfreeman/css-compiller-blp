import React, { Component } from 'react';
import Lesson1Style from '../../styles/grid/Lesson1.scss';

class Lesson1 extends Component {
  render() {
    // console.log(Lesson1Style);
    // console.log('item2' in Lesson1Style);
    // console.log(`${'item2' in Lesson1Style ? Lesson1Style.item2 : ''} test`);
    return (
      <div className={Lesson1Style.wrapper}>
        <div
          className={`${Lesson1Style.item} ${
            'item1' in Lesson1Style ? Lesson1Style.item1 : ''
          }`}
        />
        <div
          className={`${Lesson1Style.item} ${
            'item2' in Lesson1Style ? Lesson1Style.item2 : ''
          }`}
        />
        <div
          className={`${Lesson1Style.item} ${
            'item3' in Lesson1Style ? Lesson1Style.item3 : ''
          }`}
        />
        <div
          className={`${Lesson1Style.item} ${
            'item4' in Lesson1Style ? Lesson1Style.item4 : ''
          }`}
        />
        <div
          className={`${Lesson1Style.item} ${
            'item5' in Lesson1Style ? Lesson1Style.item5 : ''
          }`}
        />
        <div
          className={`${Lesson1Style.item} ${
            'item6' in Lesson1Style ? Lesson1Style.item6 : ''
          }`}
        />
      </div>
    );
  }
}

export default Lesson1;
