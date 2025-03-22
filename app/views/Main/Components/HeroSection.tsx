import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>우리는 더 나은 가치를 만듭니다</Title>
      <SubText>창의적 혁신을 통해 문제를 해결하고, 세상을 연결합니다.</SubText>
    </HeroContainer>
  );
};

export default HeroSection;