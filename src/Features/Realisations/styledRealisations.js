import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from './background.png'

export const Wrapper = styled.div`
  background: #252A32;
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

export const GalleryWrapper = styled.div`
    column-count: 4;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
      column-count: 2;
      padding: 12px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      column-count: 1;
      padding: 12px;
    };
`;

export const Pics = styled.div`
  border: 1px solid white;
  box-shadow: 0 0 10px rgb(148, 152, 158);
  overflow: hidden;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    margin-top: 20px;
  };
  `;

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 0.5s linear;
  transition-timing-function:ease-in-out;
  transform: scale(1.04);


  &:hover {
    zoom: normal;
    transform: scale(1.1);
    opacity: 70%;
  }
    
`;

export const FullScreenWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      padding: 12px;
    };
`;

export const CustomSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;


    .swiper-button-prev {
        color: rgb(181, 90, 8);
    };

    .swiper-button-next {
        color: rgb(181, 90, 8);
    };
`;

export const CustomSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;

export const FullScreenImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    user-select: none;
`;

export const CloseButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 20px;
  color: ${({ theme }) => theme.color.mainColor};
  transition: 0.3s;
  cursor: pointer;
  right: 80px;
  background: transparent;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    right: 10px;
  };
  &:hover {
    transform: scale(1.2);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
  }
`;