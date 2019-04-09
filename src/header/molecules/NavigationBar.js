import React from 'react'
import styled, { keyframes } from 'styled-components'
import { breakpoint } from '../../theme/Mixins';
import { connect } from 'react-redux';

import NavigationLink from '../atoms/NavigationLink';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 314px;
  height: 37px;
  z-index: 2;
  
  ${breakpoint.down('m')`
    visibility: hidden;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 120px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 129px);
  background-color: #000;
  opacity: .45;
  display: inline-block;
  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  animation: ${props => props.visible ? fadeIn(.45) : fadeOut(.45)} .1s linear;
  transition: visibility .1s linear;  
`;

const fadeIn = (val) => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${val};
  }
`;

const fadeOut = (val) => keyframes`
  from {
    opacity: ${val};
  }

  to {
    opacity: 0;
  }
`;

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  render() {
    const { selected } = this.state;

    const nav = [
      { title: 'Shop', url: '/shop', menu: null },
      { title: 'Our Brands', url: null, 
        menu: [
          {title:'[statemade]', url:'/brands'}
        ] 
      },
      { title: 'Apparel', url: '/apparel', menu: null },
      { title: 'EMBER', url: '/blog', menu: null },
      { title: 'Investors', url: '/investors', menu: null },
    ];
    
    return (
      <>
        <Container>
          { nav.map((x, i) => 
            <NavigationLink
              item={x}
              onMouseEnter={x => { this.setState({ selected: x }) }}
              onMouseLeave={() => { this.setState({ selected: null }) }}
              key={`nav-dd-${x.title}${i}`} />
          )}

        </Container>
        <Overlay visible={(selected && selected.menu ? true : false)} />
      </>
    );
  }
};

// const mstp = state => ({ 
//   // menu: state.header.menu 
// })

// const mdtp = {
//   // closeAction: close,
// };

export default connect(null, null)(NavigationBar);
