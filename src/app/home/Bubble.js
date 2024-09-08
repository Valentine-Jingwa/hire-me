//Bubble.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Bubble.module.css';

export default function Bubble({ title, link, icon, depth, x, y }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 800); // Match the supernova animation duration
  };

  // Calculate 3D transformation based on depth and apply x, y coordinates using vw and vh
  const depthTransform = `translateX(${x}) translateY(${y}) translateZ(${depth * 100}px) scale(${1 / depth})`;

  return (
    <Link href={link}>
      <div
        className={`${styles.bubble} ${isHovered ? styles.hovered : ''} ${isClicked ? styles.supernova : ''}`}
        style={{ transform: depthTransform }} // Apply depth transformation
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {icon}
        <span className={styles.bubbleText}>{title}</span>
      </div>
    </Link>
  );
}
