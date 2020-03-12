import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
export default function() {
  return (
    <div className={styles.normal}>
      <div>css样式demo集合</div>
      <ul>
        <li>
          <Link to="/sticky-shadow">吸附头和单侧阴影</Link>
        </li>
      </ul>
    </div>
  );
}
