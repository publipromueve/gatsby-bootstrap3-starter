import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Head from '../components/Head'

import theme from '../styles/theme'
import media from '../styles/media'

const Container = styled.div`
  background-color: ${props => props.theme.mainColor};

  ${media.lg`padding: 0 20px;`};
`

export default () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Head
        title="Gatsby Starter"
        description="Gatsby Bootstrap 3 Starter"
        url="http://www.example.com"
        image="../"
      />
      <p>Hello world!</p>
    </Container>
  </ThemeProvider>
)
