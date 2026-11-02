import styled from "styled-components";
import bg from '../../../../Common/Images/fullScreen/20230418_173640.jpg';

export const HeaderWrapper = styled.div`
  height: 100vh;
  background-image: url('${bg}');
  background-position: center;
  background-size: cover;
  box-shadow: 0px -511px 250px 277px rgba(0, 0, 0, 0.80) inset;  display: flex;
  align-items: end;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    height: 80vh;
    padding: 10px;
    box-shadow: 0px -111px 150px 100px rgba(0, 0, 0, 0.80) inset;  display: flex;
  };
`;

export const HeaderTitle = styled.h1`
  font-size: 100px;
  margin-bottom: 160px;
  letter-spacing: 6px;
  color: white;
  font-weight: normal;
  text-align: center;
  margin: 0 0 160px 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    font-size: 54px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 36px;
    letter-spacing: 4px;
    margin: 0 0 40px 0;
  };
`;

export const TitleSpan = styled.span`
  color: rgb(181, 90, 8);
`;

export const TitleText = styled.p`
  font-size: 54px;


  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    font-size: 36px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 28px;
  };
`;