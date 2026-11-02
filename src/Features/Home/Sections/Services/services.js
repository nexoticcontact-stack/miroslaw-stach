import React from 'react';
import { ServicesSection, ServicesContent, ServicesTitle, ServicesSpan, ServicesTileWrapper, CustomSlide, TileCaption, TileImage, ButtonWrapper, Button } from './styledServices';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar, EffectCoverflow } from 'swiper/modules';
import digger1 from '../../../Services/Services/services1.webp'
import digger2 from '../../../Services/Services/services2.webp'
import tractor from '../../../Services/Services/services3.webp'
import hauler from '../../../Services/Services/services4.webp'
import loader from '../../../Services/Services/services5.webp'
export const Services = () => {
    return (

        <ServicesSection>
            <ServicesContent>
                <ServicesTitle>Nasza oferta</ServicesTitle>
                <ServicesSpan>Nasza oferta obejmuje szeroki wachlarz usług, w tym m.in.:
                    wykonywanie prac ziemnych, budowlanych i drogowych, korytowanie, odwodnienia terenów,
                    wyburzenia oraz wiele innych. Posiadamy sprzęt o różnych rozmiarach, dzięki czemu jesteśmy w
                    stanie sprostać nawet najbardziej wymagającym projektom. Nasza flota maszynowa składa się z
                    nowoczesnych i wydajnych urządzeń, które są regularnie serwisowane i poddawane przeglądom
                    technicznym. Dzięki temu możemy zagwarantować naszym klientom nie tylko wysoką jakość wykonania
                    usług, ale również bezpieczeństwo pracy na placu budowy. Zapraszamy do zapoznania się z naszą pełną
                    ofertą, która dostępna jest w skecji "Usługi". Jesteśmy przekonani, że nasze usługi sprostają
                    Państwa oczekiwaniom, zapewniając profesjonalną i fachową obsługę. Zapewniamy takie usługi jak:
                </ServicesSpan>

            </ServicesContent>

            <ServicesTileWrapper

                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,

                    },

                    1000: {
                        spaceBetween: 70,
                        slidesPerView: 3,
                    },
                }}
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={1}
                modules={[Navigation, Scrollbar, EffectCoverflow,]}
                spaceBetween={20}
                navigation
                grabCursor={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                <CustomSlide backgroundURL={digger1}>
                    <TileCaption>Usługi koparką gąsienicową</TileCaption>
                </CustomSlide>

                <CustomSlide backgroundURL={digger2}>
                    <TileCaption>Usługi koparką kołową</TileCaption>
                </CustomSlide>

                <CustomSlide backgroundURL={tractor}>
                    <TileCaption>Usługi ciągnikiem rolniczym</TileCaption>
                </CustomSlide>

                <CustomSlide backgroundURL={hauler}>
                    <TileCaption>Wynajem wozideł budowlanych</TileCaption>
                </CustomSlide>

                <CustomSlide backgroundURL={loader}>
                    <TileCaption>Wynajem ładowarek 8.5 - 25 ton</TileCaption>
                    <TileImage src={loader} />
                </CustomSlide>
            </ServicesTileWrapper>

            <ButtonWrapper>
                <Button to='/usługi' onClick={() => window.scrollTo(0, 0)} >
                    Czytaj wiecej
                </Button>
            </ButtonWrapper>
        </ServicesSection>
    );
};

