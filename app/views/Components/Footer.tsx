import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

const Footer = () => {
  return (
    <FooterContainer>
      ⓒ {new Date().getFullYear()} Inha Venture Club. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;