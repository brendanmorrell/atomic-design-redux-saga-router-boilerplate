import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../theme/Mixins';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: inline-block;
  z-index: 2;
  vertical-align: top;
`;

const Title = styled.div`
  height: 37px;
  margin-right: 30px;
  box-sizing: border-box;
  transition: all 0.1s linear;
  ${breakpoint.down('l')`
    margin-right: 20px;
  `}

  &:hover {
    color: #960709;
    border-bottom: 3px solid #960709;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 37px;
  background-color: #fff;
  padding: 10px 15px;
  color: #222;

  div {
    transition: all 0.2s;
    padding: 8px 15px;

    &:hover {
      color: #960709;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

class NavigationLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  render() {
    const { item, onMouseEnter, onMouseLeave } = this.props;
    const { visible } = this.state;

    return (
      <Container
        onMouseEnter={() => {
          onMouseEnter(item);
          this.setState({ visible: true });
        }}
        onMouseLeave={() => {
          onMouseLeave();
          this.setState({ visible: false });
        }}
      >
        <Title>
          {item.url ? (
            <Link to={item.url}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
        </Title>

        {visible && item.menu && (
          <Menu>
            {item.menu.map(x => (
              <div key={`submenu-dd-${x.title}`}>
                <Link to="/shop">{x.title}</Link>
              </div>
            ))}
          </Menu>
        )}
      </Container>
    );
  }
}

export default NavigationLink;
