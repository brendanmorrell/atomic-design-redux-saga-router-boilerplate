import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
`
const IFrame = ({ url, path }) => (
  <Iframe src={url} frameBorder="0" allowFullScreen title={path} />
)

export default IFrame
