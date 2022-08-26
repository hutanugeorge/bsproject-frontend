import React from 'react';

import { motion } from 'framer-motion';

import './index.css';
import * as motionProps from './motionProps';
import { IFeatureCard } from '../../../types/components/Cards/FeatureCard';

export default ({ title, description, photo }: IFeatureCard) => {
  return (
    <>
      <motion.div
        className="feature-card"
        {...motionProps.card}
      >
        <div className={`feature-card__photo feature-card__photo-${photo}`}></div>
        <div className="feature-card__title">
          <p className="feature-card__title__text">{title}</p>
        </div>
        <div className="feature-card__description">
          <p className="feature-card__description__text">{description}</p>
        </div>
      </motion.div>
    </>
  );
};
