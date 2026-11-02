import { Header, HeaderTitle, Photo, Section, ServiceWrapper, TextArea, Title, Wrapper } from "./styledServices"
import digger1 from './Services/services1.webp'
import digger2 from './Services/services2.webp'
import tractor from './Services/services3.webp'
import hauler from './Services/services4.webp'
import loader from './Services/services5.webp'

export const Services = () => {

    return (
        <Wrapper>
            <Header>
                <HeaderTitle>Nasza oferta</HeaderTitle>
            </Header>
            <Section>
                <ServiceWrapper>
                    <Photo src={digger1} />
                    <TextArea>
                        <Title> Usługi koparką gąsienicową</Title>
                        Oferujemy kompleksowe usługi koparką gąsienicową dla klientów prywatnych, firm budowlanych, deweloperów oraz inwestorów.
                        Nasze koparki to maszyna o wysokiej wydajności, pozwalająca na wykonanie nawet najtrudniejszych zadań związanych z pracami ziemnymi,
                        jak wykopy fundamentów, wykopy pod baseny, przepusty, wyburzenia, czy prace związane z budową dróg i parkingów.
                        Zapewniamy elastyczność w podejściu do potrzeb naszych klientów, dlatego oferujemy konkurencyjne ceny oraz dostosowanie usług do indywidualnych potrzeb.
                        Nasze usługi koparką gąsienicową są realizowane terminowo i z najwyższą starannością, co przekłada się na zadowolenie naszych klientów.
                        Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych usług
                    </TextArea>
                </ServiceWrapper>

                <ServiceWrapper reverse>
                    <TextArea>
                        <Title> Usługi koparką kołową</Title>
                        Oferujemy usługi koparką kołową o masie 18 ton. Nasz sprzęt jest nowoczesny i wydajny, co pozwala nam na wykonanie różnorodnych zadań związanych z pracami ziemnymi.
                        Dzięki koparce kołowej możemy wykonywać prace takie jak korytowanie, niwelacja terenu, wykopy pod fundamenty, podziemne instalacje, kanalizację,
                        a także prace związane z budową dróg i placów manewrowych.
                        Działamy szybko i sprawnie, zawsze z myślą o jak najlepszych efektach i satysfakcji klienta. Zapraszamy do skorzystania z
                        naszych usług i do kontaktu z nami w celu uzyskania szczegółowych informacji.
                        W naszej ofercie posiadamy rowniez młot wyburzeniowy, co pozwala nam na jeszcze większą elastyczność w wykonywaniu prac związanych z wyburzeniami, burzeniem ścian, fundamentów, a także przygotowaniem terenu pod budowę.
                    </TextArea>
                    <Photo src={digger2} />

                </ServiceWrapper>

                <ServiceWrapper>
                    <Photo src={tractor} />
                    <TextArea>
                        <Title> Usługi ciągnikiem rolniczym</Title>
                        Oferujemy usługi ciągnikiem rolniczym. Nasza firma dysponuje nowoczesnym ciągnikiem z przyczepą o pojemności 10 metrów sześciennych oraz beczką o
                        pojemności 10 000 litrów. Dzięki temu dysponujemy możliwością przewozu różnorodnych materiałów. W ramach naszych usług oferujemy między innymi polewanie dróg lub stabilizacji.

                        Oprócz transportu beczką, w naszej ofercie znajdują się usługi mulczerem leśnym które wykonywane są przez naszą specjalistyczną maszynę.
                        Dzięki niej jesteśmy w stanie szybko i skutecznie usuwać zadrzewienia oraz elementy roślinne w lesie, parkach czy przydrożach.
                        Dodatkowo w naszej ofercie znajdują się usługi zamiatarką uliczną.
                        Staramy się zawsze spełniać oczekiwania naszych klientów i zapewnić im wysoką jakość usług.
                    </TextArea>
                </ServiceWrapper>

                <ServiceWrapper reverse>
                    <TextArea>
                        <Title>Wynajem wozideł budowlanych </Title>
                        Oferujemy wynajem wozideł budowlanych o różnych nośnościach od 1,5 tony do 16 ton z doświadczonymi operatorami lub bez.
                        Zachęcamy do kontaktu w celu uzyskania szczegółowych informacji.
                    </TextArea>
                    <Photo src={hauler} />
                </ServiceWrapper>
                <ServiceWrapper>
                    <Photo src={loader} />
                    <TextArea>
                        <Title> Wynajem ładowarek 8.5 - 25 ton </Title>
                        Oferujemy wynajem ładowarek o masie od 8.5 do 25 ton, w tym ładowarek kołowych.
                        Maszyny są regularnie serwisowane i przeglądane, a nasze doświadczenie i wysoka jakość zapewniają niezawodność i bezpieczeństwo.
                        Skontaktuj się z nami, aby uzyskać więcej informacji.
                    </TextArea>
                </ServiceWrapper>

            </Section>

        </Wrapper >

    )
}
