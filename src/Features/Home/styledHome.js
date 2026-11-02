import styled from "styled-components";
import bg from '../../Common/Images/fullScreen/20220901_094422.jpg'

export const Wrapper = styled.section`
  background-image: url('${bg}');
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TileWrapper = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    min-height: 240px;
    padding: 10px;
  };
`;

export const Tile = styled.div`
  background: rgba(181,90,8,0.9);
  padding: 40px;
  font-size: 54px;
  border: 2px solid white;
  color: white;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreak}px){
    font-size: 23px;
    padding: 20px 10px;
  };
`;

export const Image = styled.img`
  width: 100%;
`;

