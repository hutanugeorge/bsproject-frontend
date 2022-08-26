import { motion } from 'framer-motion';
import React from 'react';

import * as motionProps from './motionProps';
import './index.css';
import FeatureCard from '../../components/Cards/FeatureCard';

export default () => {
  const services = [
    {
      title: "Man's Haricut",
      description: 'Full style and cut to suit your face shape, professionally styled.',
      photo: 'mans-haircut',
    },
    {
      title: 'Beard Trim',
      description: 'Keep your beard in great shape with a bit of extra attention with clippers,',
      photo: 'beard-trim',
    },
    {
      title: 'Treatment',
      description: 'Get full treatment by our professional stylist to keep your hair healty.',
      photo: 'treatment',
    },
    {
      title: 'Wash',
      description: 'Nourish your head and scalp with a full wash using our exclusive product.',
      photo: 'wash',
    },
  ];

  return (
    <>
      <div className="homepage">
        <div className="homepage__title-section">
          <div className="homepage__title-section__cta">
            <motion.p
              className="homepage__title-section__cta__text"
              {...motionProps.title}
            >
              BarberShop
            </motion.p>
            <motion.div
              className="homepage__title-section__cta__button"
              {...motionProps.ctaButton}
            >
              <p className="homepage__title-section__cta__button__text">Get a Haircut!</p>
            </motion.div>
          </div>
        </div>
        <div className="homepage__features-section">
          <div className="homepage__features-section__title">
            <p className="homepage__features-section__title__text">Our Services</p>
          </div>
          <div className="homepage__features-section__services">
            {services.map(({ title, description, photo }, index) => (
              <FeatureCard
                title={title}
                description={description}
                photo={photo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
