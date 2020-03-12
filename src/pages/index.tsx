import React from 'react';
import styles from './index.css';

function HeaderText() {
  return <div className={styles.title}>这是标题</div>;
}

function StickyContent() {
  return <div className={styles.stickyContent}>这是可以吸附的部分</div>;
}

export default function() {
  return (
    <div className={styles.normal}>
      <HeaderText />
      <StickyContent />
      <div className={styles.container}>
        <div className={styles.box}>1111</div>
        <div className={styles.box}>2222</div>
        <div className={styles.box}>3333</div>
      </div>
    </div>
  );
}
