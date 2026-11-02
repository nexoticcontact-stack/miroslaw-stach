import styled, { css } from "styled-components";
import bg from './Services/background.png';

export const Wrapper = styled.section`
  background: #252A32;
  min-height: 100vh;
  padding-bottom: 40px;
`;

export const Header = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("${bg}");
  background-position: center;
  background-size: cover;
  box-shadow: 0px -206px 64px 5px rgba(0, 0, 0, 0.84) inset;    display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 90px 90px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        height: 160px;
        box-shadow: 0px -136px 64px 5px rgba(0, 0, 0, 0.84) inset;    display: flex;
        border-radius: 0 0 45px 45px;
    };
`;

export const HeaderTitle = styled.h1`
    position: absolute;
    letter-spacing: 10px;
    font-size: 80px;
    color: white;
    font-weight: normal;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 80px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 32px;
        letter-spacing: 6px;
    };
`;

export const Section = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    grid-gap: 20px;
    padding: 10px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px) {
    grid-template-columns: 1fr;
  };
`;

export const Title = styled.div`
  padding-bottom: 20px;
  font-size: 28px;
  color: orange;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    font-size: 20px;
    padding-bottom: 12px;
  }`;

export const Photo = styled.img`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

export const TextArea = styled.div`
  color: white;
  font-size: 18px;
  max-width: 720px;
  text-align: justify;
  margin: 0;
  font-weight: normal;
  padding: 30px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 12px;
    padding: 12px
  };
`;

export const ServiceWrapper = styled.div`
  display: flex;
  background: #4E5156;
  gap: 20px;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.5) 11px 13px 28px 0px;




    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      flex-direction: column;
      gap: 12px;

        ${({ reverse }) => reverse && css`
            flex-direction: column-reverse;
        `};
    };
`;