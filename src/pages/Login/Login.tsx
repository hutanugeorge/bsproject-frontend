import { motion } from 'framer-motion';
import React from 'react';
import * as motionProps from './motionProps';
import './index.css';

export default () => {
  return (
    <>
      <div className="login-wrapper">
        <div className="login__hero">
          <motion.h1
            {...motionProps.h1}
            drag
          >
            Login Hero Section
          </motion.h1>
        </div>
        <div className="login__form">
          <motion.h1 {...motionProps.h1}>Form</motion.h1>
        </div>
      </div>
    </>
  );
};
