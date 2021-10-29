import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `
}

// 380 is th ebreaking point of mobile devices