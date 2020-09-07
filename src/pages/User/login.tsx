import React from 'react';
import { formatMessage } from 'umi-plugin-locale';
import {Button, NavBar, Icon} from 'antd-mobile';
import { Link } from 'umi';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
        <li><Link to="/me">{formatMessage({ id: 'index.me' })}</Link></li>
      </ul>
      <Button type='warning'></Button>
    </div>
  );
}
