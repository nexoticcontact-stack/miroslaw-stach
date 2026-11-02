import styled from "styled-components";

export const AboutSection = styled.section`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  padding:80px;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreak}px){
    padding: 40px 20px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    padding: 20px 10px;
    gap: 10px;
  };
`;

export const AboutTitle = styled.h2`
  font-size: 54px;
  font-weight: normal;
  letter-spacing: 2px;
  text-align: center;
  color: rgb(181, 90, 8);

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 32px;
    margin: 10px 0px;
  };
`;

export const TextSection = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    padding: 12px;
  };`;

export const AboutSpan = styled.span`
  font-size: 28px;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 16px;
  };
`;

export const AboutImagesWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap:80px;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreak}px){
    flex-direction: column;
    padding: 12px;
    gap: 20px;
  };

`;

export const AboutImage = styled.img`
  max-width: 640px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 11px 13px 28px 0px;
  border-radius: 2px;
`;
