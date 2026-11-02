import React from 'react';
import { AboutSection, TextSection, AboutTitle, AboutSpan, AboutImagesWrapper, AboutImage } from './styledAbout';
import img2 from '../../../../Common/Images/fullScreen/20220726_124154.jpg';
import img3 from '../../../../Common/Images/fullScreen/20220314_175517.jpg';

export const About = () => {
    return (
        <AboutSection>
            <TextSection>
                <AboutTitle>Dlaczego my?</AboutTitle>
                <AboutSpan>
                    Firma Mirosław Stach to dynamicznie rozwijająca się firma usługowa zlokalizowana w Przegini,
                    specjalizująca się w branży robót ziemnych. Nasza firma działa na rynku od ponad 7 lat i
                    cieszy się uznaniem wśród klientów, zarówno indywidualnych jak i biznesowych.
                    Nasza oferta skierowana jest do klientów poszukujących profesjonalnej i kompleksowej obsługi z
                    zakresu robót ziemnych. Nasza firma składa się z zespołu wykwalifikowanych i doświadczonych
                    specjalistów, którzy posiadają niezbędne kwalifikacje i umiejętności do wykonywania prac
                    związanych z robotami ziemnymi. Wszyscy nasi pracownicy są regularnie szkoleni w zakresie
                    najnowszych technologii i metod pracy, aby zapewnić naszym klientom usługi na najwyższym poziomie. Jesteśmy dumni z faktu, że w ciągu wielu lat działalności naszej firmy zdobyliśmy zaufanie wielu klientów, którzy zawsze mogą liczyć na naszą rzetelną i terminową obsługę. Dla naszej firmy najważniejsze jest zadowolenie klienta, dlatego dokładamy wszelkich starań, aby każde zlecenie było wykonane zgodnie z oczekiwaniami klienta. Zapraszamy do zapoznania się z naszą ofertą oraz skorzystania z naszych usług. Gwarantujemy fachową obsługę, konkurencyjne ceny oraz profesjonalne podejście do każdego klienta.
                </AboutSpan>
            </TextSection>
            <AboutImagesWrapper>
                <AboutImage src={img3} />
                <AboutImage src={img2} />
            </AboutImagesWrapper>
        </AboutSection>
    );
};
