import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

import * as motionProps from './motionProps';
import './index.css';

export default () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="navbar__wrapper">
        <motion.div className="navbar">
          <div className="navbar__left-side">
            <img
              className="navbar__left-side__logo"
              src={'public/logo.png'}
              alt="logo"
            />
            <motion.div {...motionProps.text}>
              <NavLink
                className="navbar__left-side__name"
                to={'/'}
              >
                BarberShop
              </NavLink>
            </motion.div>
          </div>
          <div className="navbar__middle">
            <motion.div
              className="navbar__middle__links"
              {...motionProps.ul}
            >
              {['Home', 'Pricing', 'About us', 'Contact'].map((element, index) => (
                <motion.div
                  key={index}
                  {...motionProps.text}
                >
                  <NavLink
                    className="navbar__middle__links__link"
                    to={`/${element}`}
                  >
                    {element}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="navbar__right-side">
            <motion.p
              className="navbar__right-side__login"
              {...motionProps.text}
            >
              Login/Signup
            </motion.p>
          </div>
          <div className="navbar__hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};
