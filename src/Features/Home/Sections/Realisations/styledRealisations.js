import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";

export const RealisationsSection = styled.section`
  background: rgb(255, 255, 255);
  padding: 20px 40px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    padding: 20px 10px;
  };
`;

export const RealisationsTitle = styled.h4`
  font-size: 54px;
  color: rgb(181, 90, 8);
  font-weight: normal;
  text-align: center; 
  
  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 32px;
    margin: 20px 0;
  };
`;

export const ImagesWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        gap: 10px;
    };
`;

export const GalleryImage = styled.img`
    width: 100%;
    transition: 0.3s linear;

    &:hover {
        transform: scale(1.04);
        cursor: pointer;
        opacity: 70%;
    }
`;

export const Pics = styled.div`
  overflow: hidden;
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

export const CustomSlide2 = styled(SwiperSlide)`
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
  color: white;
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

export const ButtonWrapper = styled.div`
  max-width: 1600px;
  margin: 40px auto;
  min-height: 40px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      margin: 20px auto;
  };
`;

export const Button = styled(Link)`
  float: right;
  color: white;
  padding: 10px 40px;
  background: rgb(181, 90, 8);
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    background: rgba(181, 90, 8, 0.8);
  }

  &:active {
    background: rgba(181, 90, 8, 0.6);
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

