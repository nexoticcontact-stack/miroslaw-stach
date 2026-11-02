import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const ServicesSection = styled.section`
  background: rgb(78, 81, 86);
  width: 100%;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    padding: 20px 10px;
    gap: 10px;
  };
`;

export const ServicesContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
      padding: 12px;
    };
`;

export const ServicesTitle = styled.h3`
  font-size: 54px;
  color: rgb(181, 90, 8);
  font-weight: normal;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 32px;
    margin: 10px 0px;
  };
`;

export const ServicesSpan = styled.span`
  font-size: 28px;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 16px;
  };
`;

export const ServicesTileWrapper = styled(Swiper)`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
      .swiper-slide-active{
      opacity: 1;
      scale: 1.2;
    }

    .swiper-button-next {
      color: rgb(181, 90, 8);
      position: fixed;
    }

    .swiper-button-prev {
      color: rgb(181, 90, 8);
      position: fixed;
    }
`;

export const CustomSlide = styled(SwiperSlide)`
  background-image: ${({ backgroundURL }) => `url(${backgroundURL})`};
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  scale: 0.8;
  position: relative; 
  box-shadow: -20px -232px 191px 16px rgba(0, 0, 0, 0.9) inset;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    box-shadow: -20px -82px 191px 16px rgba(0, 0, 0, 0.9) inset;
  };
`;

export const TileImage = styled.img`
  width:100%;
  visibility: hidden;
`;

export const TileCaption = styled.span`
  position: absolute;
  text-align: center;
  color: #fff; 
  bottom: 80px;
  text-align: center; 
  width: 100%;
  font-size: 28px;
  font-weight: 100;

  @media (max-width: ${({ theme }) => theme.breakPoint.thirdBreak}px){
    font-size: 16px;
    bottom: 40px;
  };
`;

export const ButtonWrapper = styled.div`
  max-width: 1600px;
  margin: 40px auto;
  min-height: 40px;
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
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

