import React from 'react'
import styled from 'styled-components'
import { px, pct } from '../utils'

const Wrapper = styled.nav({
  left: 0,
  boxSizing: 'border-box',
  zIndex: 3,
  width: pct(100),
  height: px(55),
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  fontSize: px(12),
  fontWeight: 500,
  background: '#054DA6',
  color: 'white',
  padding: 0
})

const StartWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: px(20)
})

const Title = styled.h1``

const TitleBar = () =>
  <Wrapper>
    <StartWrapper>
      <Title>Punch List</Title>
    </StartWrapper>
  </Wrapper>

export default TitleBar
