import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    transition: background-color 180ms linear, transform 200ms cubic-bezier(0, 0, 0.49, 1.7);

    &:hover,
    &:focus {
    transform: scale(1.1) ;
    background-color: var(--primary);
    &:active {
      transition: transform 100ms;
      transform: scale(0.95)
    }
  }
`;

export default Button;
