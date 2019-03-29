import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'

const MedmenLeaf = ({ color, secondaryColor, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 45"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="MM_Leaf" fill={color}>
        <g id="Group-2">
          <g id="Group">
            <polygon
              id="Fill-1"
              points="21.8889818 3.6e-05 18.0260727 18.980316 21.8889818 34.921116 25.7522545 18.980316"
            />
            <polygon
              id="Fill-2"
              points="21.0390545 41.166504 21.8888727 44.673624 21.8892364 44.673624 22.7390545 41.166504 21.8888727 36.990864"
            />
            <polygon
              id="Fill-3"
              points="21.2137091 35.237016 14.9482545 21.044016 5.02789091 12.352896 9.88498182 24.554016"
            />
            <polygon
              id="Fill-4"
              points="8.838 34.054056 21.2136364 35.908776 10.5292727 29.453976 -0.000181818182 28.264896"
            />
            <polygon
              id="Fill-5"
              points="13.7186545 36.974412 8.13029091 39.977532 14.4866545 39.811572 21.2135636 36.506412"
            />
            <polygon
              id="Fill-6"
              points="33.8933818 24.554088 38.7501091 12.352608 28.8301091 21.044088 22.5646545 35.237088"
            />
            <polygon
              id="Fill-7"
              points="33.2489455 29.453904 22.5645818 35.908704 34.9402182 34.053984 43.7784 28.264824"
            />
            <polygon
              id="Fill-8"
              points="22.5645455 36.506484 29.2918182 39.811644 35.6478182 39.977604 30.0594545 36.974484"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

MedmenLeaf.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}
MedmenLeaf.defaultProps = {
  color: theme.colors.primary,
  width: '44px',
  height: '45px',
}

export default MedmenLeaf
