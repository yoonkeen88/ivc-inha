import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  max-width: 700px;
  color: #555;
  line-height: 1.8;
`;

const IntroSection = () => {
  return (
    <Section>
      <Title>우리는 누구인가</Title>
      <Description>
        IVC(Inha Venture Club)는 인하대학교를 기반으로 창업, 혁신, 기술을 탐구하고
        실현하는 학생 중심의 단체입니다. 우리는 다양한 도전을 통해 더 나은 세상을
        만들어가고자 합니다.
      </Description>
    </Section>
  );
};

export default IntroSection;