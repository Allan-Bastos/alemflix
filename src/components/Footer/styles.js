import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  .fotimg {
    height: 50px;
    width: 50px;
    padding: 10px;
    text-align: center;
  }
  .twtimg {
    height: 50px;
    width: 60px;
    padding: 10px;
    text-align: center;
  }
`;
