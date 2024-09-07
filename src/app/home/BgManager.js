'use client';
import { useEffect } from 'react';
import styles from './BgManager.module.css'; // We'll define animations in CSS.

export default function BgManager({ children }) {
  useEffect(() => {
    // Add a particle/star effect or any custom animations if needed.
  }, []);

  return (
    <div className={styles.spaceBackground}>
      {children}
    </div>
  );
}
