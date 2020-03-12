import React from 'react';
import styles from './index.css';

function HeaderText() {
  return <div>这是标题</div>;
}

function StickyContent() {
  return <div>这是可以吸附的部分</div>;
}

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
    </div>
  );
}
