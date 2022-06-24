import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import WordCloud from 'wordcloud';
import { useEffect, useRef } from 'react';
// import BrowserOnly from '@docusaurus/BrowserOnly';
import wordcloudList from './wordcloudList';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
let WordCloud = null;
if (ExecutionEnvironment.canUseDOM) {
  WordCloud = require('wordcloud');
}

export default function HomepageFeatures() {
  const divRef =  useRef();
  useEffect(() => {
    WordCloud(divRef.current,{
      gridSize: 18,
      weightFactor: 3,
      fontFamily: 'Finger Paint, cursive, sans-serif',
      color: '#e4e4a6',
      backgroundColor: 'transparent',
      list:wordcloudList
    } );
    console.log(divRef);
  });
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ height: '400px' }} ref={ divRef }>
        </div>
      </div>
    </section>
  );

}
