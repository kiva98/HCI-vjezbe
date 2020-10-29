import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
 
//nezz zasto ovo ne radi "navigationBar is not defined"
const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || 'navigationBar']}>
      {navTabs.map(tab => <li className={tab=== activeTab ? styles.active : ''}>
          {tab}</li>
      )}
  </nav>
)
 
export default NavigationBar