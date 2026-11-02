import { useState } from "react";
import { CloseButton, CustomSlide, CustomSwiper, FullScreenImage, FullScreenWrapper, GalleryWrapper, Image, Header, Pics, Wrapper, HeaderTitle } from "./styledRealisations";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { closeImage, closeWrapper, openImage, openWrapper } from "../../Core/animations";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const Realisations = () => {
   const [fullScreen, setFullScreen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(-1);

   const smallImagesFolder = require.context('../../Common/Images/thumb', true, /\.jpg$/);
   const largeImagesFolder = require.context('../../Common/Images/fullScreen', true, /\.jpg$/);
   const smallImageKeys = smallImagesFolder.keys();
   const largeImageKeys = largeImagesFolder.keys();

   const openFullScreen = (index) => {
      setCurrentImageIndex(index);
      setFullScreen(true);
   };

   const closeFullScreen = () => {
      setFullScreen(false);
      setCurrentImageIndex(-1);
   };

   return (
      <>
         <Wrapper>
            <Header>
               <HeaderTitle>Galeria zdjęć</HeaderTitle>
            </Header>
            <GalleryWrapper>
               {smallImageKeys.map((imageKey, index) => (
                  <Pics key={imageKey} >
                     <Image
                        src={smallImagesFolder(imageKey)}
                        onClick={() => openFullScreen(index)} />
                  </Pics>
               ))}
            </GalleryWrapper>
         </Wrapper>

         {fullScreen && (
            <FullScreenWrapper
               as={motion.div}
               initial={closeWrapper}
               animate={fullScreen ? openWrapper : closeWrapper}
               transition={{ duration: 0.5 }}
            >
               <CustomSwiper
                  centeredSlides={true}
                  slidesPerView={1}
                  modules={[Navigation]}
                  spaceBetween={100}
                  loop={false}
                  navigation
                  grabCursor={true}
                  initialSlide={currentImageIndex}
               >
                  {largeImageKeys.map((imageKey) => (
                     <CustomSlide key={imageKey}>
                        <FullScreenImage
                           src={largeImagesFolder(imageKey)}
                           as={motion.img}
                           initial={closeImage}
                           animate={fullScreen ? openImage : closeImage}
                           transition={{ duration: 0.5 }}
                        />
                     </CustomSlide>
                  ))}
               </CustomSwiper>
               <CloseButton
                  onClick={() => closeFullScreen()}>
                  <AiOutlineClose size={35} color="white" />
               </CloseButton>
            </FullScreenWrapper>
         )}
      </>
   );
};
