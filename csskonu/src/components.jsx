import styled, {css} from 'styled-components'

export const Title = styled.h1`
font-size: 3rem;
font-weight: 600;
text-decoration: underline;
background-color:black;
color: #fff;
${props => props.theme === 'dark' && css`
background: #fff;
color:#000;
&:hover {
    background: blue;
}
`}
`