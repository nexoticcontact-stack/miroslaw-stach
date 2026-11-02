import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const Wrapper = styled.section`
    margin: 0 auto;
    padding: 40px;
    min-height: 100vh;
    background: #252A32;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
        padding: 10px;
    };
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    color: ${({ theme }) => theme.color.secondColor};
    margin-bottom: 0px;
    color: rgb(181, 90, 8);

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
        font-size: 28px;
    };
`;

export const Span = styled.h2`
    text-align: center;
    font-size: 48px;
    margin: 10px;
    font-weight: normal;
    color: white;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
        font-size: 24px;
    };
`;

export const TilesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1500px;
  margin: auto;
  align-items: center;
  margin-top: 100px;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    flex-direction: column;
    margin: 40px 0;
  };
`;

export const Tile = styled.a`
  background: #4E5156;
  text-decoration: none;
  padding: 20px;
  color: white;
  border-radius: 10px;
  display: grid;
  text-align: center;
  align-items: center;
  min-width: 320px;
  min-height: 320px;
  border: 4px solid  white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 11px 13px 28px 0px;
  transition: 0.5s;

  &:hover{
    transform: scale(1.02);
    box-shadow: rgba(255, 255, 255, 0.5) 8px 10px 25px 0px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
      min-height: 200px;
      min-width: 240px;
      padding: 10px;
  };
`;

export const TileTitle = styled.span`
  font-size: 36px;
  color: rgb(181, 90, 8);
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
      font-size: 24px;
  };
`;

export const TileLink = styled.span`
  font-size: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
      font-size: 16px;
  };
`;

export const TIleSVG = styled(SVG)`
  width: 100px;
  height: 100px;
  fill: white;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
      width: 60px;
      height: 60px;
  };
`;