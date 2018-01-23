import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import media from '../styles/media'

const Container = styled.div`
  background-color: ${props => props.theme.mainColor};

  ${media.lg`padding: 0 20px;`}
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Container className="row">Hello world!</Container>
  </ThemeProvider>
)
