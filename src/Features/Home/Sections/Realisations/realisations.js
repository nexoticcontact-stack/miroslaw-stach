import React from 'react';
import { RealisationsSection, RealisationsTitle, Pics, GalleryImage, FullScreenWrapper, CustomSwiper, CustomSlide2, FullScreenImage, CloseButton, ButtonWrapper, Button, ImagesWrapper } from './styledRealisations';
import { AiOutlineClose } from 'react-icons/ai';
import img1 from '../../Realistaions//ROLKA_1.jpg';
import img22 from '../../Realistaions//ROLKA_10.jpg';
import img33 from '../../Realistaions//ROLKA_13.jpg';
import img4 from '../../Realistaions//ROLKA_3.jpg';
import img5 from '../../Realistaions//ROLKA_6.jpg';
import img6 from '../../Realistaions//ROLKA_8.jpg';
import { closeImage, closeWrapper, openImage, openWrapper } from '../../../../Core/animations';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export const Realisations = () => {

    const [fullScreen, setFullScreen] = useState(false);
    const [fullScreenSrc, setFullScreenSrc] = useState("");

    const data = [
        { id: 1, imgsrc: img1 },
        { id: 2, imgsrc: img22 },
        { id: 7, imgsrc: img33 },
        { id: 8, imgsrc: img4 },
        { id: 9, imgsrc: img5 },
        { id: 10, imgsrc: img6 },
    ];

    const openFullScreen = (src) => {
        setFullScreenSrc(src);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
        setFullScreenSrc("");
    };


    return (
        <RealisationsSection>
            <RealisationsTitle>Nasze realizacje</RealisationsTitle>

            <ImagesWrapper>
                {data.map((img) => (
                    <Pics key={img.id}>
                        <GalleryImage src={img.imgsrc} onClick={() => openFullScreen(img.imgsrc)} />
                    </Pics>
                ))}
            </ImagesWrapper>

            {fullScreenSrc && (
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
                        initialSlide={data.findIndex((img) => img.imgsrc === fullScreenSrc)}
                    >
                        {data.map((img) => (
                            <CustomSlide2 key={img.id}>
                                <FullScreenImage
                                    src={img.imgsrc}
                                    as={motion.img}
                                    initial={closeImage}
                                    animate={fullScreen ? openImage : closeImage}
                                    transition={{ duration: 0.5 }}
                                />
                            </CustomSlide2>))}

                    </CustomSwiper>
                    <CloseButton
                        onClick={() => closeFullScreen()}>
                        <AiOutlineClose size={35} />
                    </CloseButton>
                </FullScreenWrapper>)}
            <ButtonWrapper >
                <Button to='/galeria' onClick={() => window.scrollTo(0, 0)} >
                    Przejdź do galerii
                </Button>
            </ButtonWrapper>
        </RealisationsSection>

    );
};

