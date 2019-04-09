import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MobileMenuLink from '../atoms/MobileMenuLink';
import MobileMenuSubNav from '../atoms/MobileMenuSubNav';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  background-color: #fff;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  width: 50px;
  height: 50px;
`;

const CloseIcon = styled.div`
  font-size: 50px;
  width: 50px;
  color: white;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  display: block;
  line-height: 50px;
  text-align: center;
`;

const MobileMenu = ({ closeAction, }) => {
  
  const nav = [
    {
      label: 'Shop',
      path: 'shop',
      subNav: null,
      page: null,
    },
    {
      label: 'Our Brands',
      path: null,
      subNav: null,
      page: {
        title: 'Our Brands',
        nav: [{
          label: '[statemade]',
          path: 'statemade',
          subNav: null,
          page: null,
        }],
      }
    },
    {
      label: 'Apparel',
      path: 'apparel',
      subNav: null,
      page: null,
    },
    {
      label: 'EMBER',
      path: 'blog',
      subNav: null,
      page: null,
    },
    {
      label: 'Investors',
      path: 'investors',
      subNav: null,
      page: null,
    },
    {
      label: 'Quick Links',
      path: null,
      subNav: [
        {
          label: 'Store Locator',
          path: 'stores',
          subNav: null,
          page: null,        
        },
        {
          label: 'Gift Cards',
          path: 'gift-cards',
          subNav: null,
          page: null,
        },
      ],
      page: null,
      open: false,
    },
    {
      label: 'Company',
      path: null,
      subNav: [
        {
          label: 'Our Team',
          path: 'who-we-are/#team',
          subNav: null,
          page: null,        
        },
        {
          label: 'What we do',
          path: 'what-we-do',
          subNav: null,
          page: null,
        },
        {
          label: 'News Room',
          path: 'newsroom',
          subNav: null,
          page: null,
        },
        {
          label: 'Careers',
          path: 'careers',
          subNav: null,
          page: null,
        },
      ],
      page: null,
      open: false,
    },
    {
      label: 'Help',
      path: null,
      subNav: [
        {
          label: 'Contact Us',
          path: 'contact',
          subNav: null,
          page: null,        
        },
        {
          label: 'FAQ',
          path: 'faq',
          subNav: null,
          page: null,
        },
      ],
      page: null,
      open: false,
    },
  ];

  return (
    <Container>
      <Menu>
        { nav.map((x, i) => {

          if (!x.subNav)
            return (
              <MobileMenuLink 
                nav={x}
                key={`mobile-menu${i}`} />
            )

          if (x.subNav)
              return (
                <MobileMenuSubNav 
                  nav={x}
                  key={`mobile-menu${i}`} />
              )
        })}
      </Menu>
      <Close onClick={() => closeAction()}>
        <CloseIcon>&times;</CloseIcon>
      </Close>
    </Container>
  );
};

export default MobileMenu;
