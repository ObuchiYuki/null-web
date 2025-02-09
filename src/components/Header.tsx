import styled from "styled-components"

const _Header = styled.header`
  background: var(--system-background);
  padding: 16px;
  text-align: center;
`

export const Header = () => {
  return (
    <_Header>
      <h1>Nullとは？</h1>
    </_Header>
  )
}