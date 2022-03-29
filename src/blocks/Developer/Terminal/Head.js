import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'

const TerminalButton = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
`

const TerminalHead = styled.div`
  background-color: ${get('colors.valhalla.700')};
  grid-column: 1/-1;
  height: 44px;
  border-bottom: 2px solid ${get('colors.valhalla.100')};
  padding: 0 16px;
  display: flex;
  align-items: center;

  ${TerminalButton}:first-child {
    background-color: ${get('colors.hotPink')};
  }
  ${TerminalButton}:nth-child(2) {
    background-color: ${get('colors.lila')};
  }
  ${TerminalButton}:nth-child(3) {
    background-color: ${get('colors.dodgerBlue')};
  }

  ${TerminalButton}+${TerminalButton} {
    margin-left: 9px;
  }
`

const Head = () => {
  return (
    <TerminalHead>
      <TerminalButton />
      <TerminalButton />
      <TerminalButton />
    </TerminalHead>
  )
}

export default Head
