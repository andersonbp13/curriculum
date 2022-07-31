import {
  Container,
  DateItem,
  InfoCard,
  InfoItem,
  NetworkLinksCard,
} from 'components';
import { foto } from 'resources';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CurriculumPage = () => {
  const profile = [
    <div className='text-text-contenido contenido my-3'>
      Soy estudiante del pregrado de ingeniería de sistemas en la universidad de
      Antioquia y desarrollador Full-Stack, actualmente estoy cursando el décimo
      nivel de la carrera y hago parte del grupo de investigación GEPAR –
      semillero de videojuegos. Cuento con conocimientos en las siguientes
      tecnologías:
    </div>,
    <div className='text-text-contenido contenido my-3'>
      Java (80 %), SpringBoot (75 %), Unity(65 %), C# (65%), Flutter (75%),
      MariaDB (50%), Dart (75%), Angular (50%), PostgreSQL (50%),
      JavaScript(60%), React-Native (50%), Git (80%)
    </div>,
    <div className='text-text-contenido contenido my-3'>
      Tengo experiencia con Git-Flow, uso de servicios de Firebase (FCM, login,
      base de datos en tiempo real) y he desarrollado simuladores, aplicaciones
      en realidad aumentada y videojuegos con Unity. Además, estoy en la
      capacidad de realizar el análisis de requisitos y diseño de software
      usando patrones de diseño y desarrollo, generando la documentación
      requerida.
    </div>,
  ];

  const languages = [
    <InfoCard title='Español:'>
      <InfoItem title='Hablado: ' value='Nativo' />
      <InfoItem title='Escrito: ' value='Nativo' />
      <InfoItem title='Leído: ' value='Nativo' />
    </InfoCard>,
    <InfoCard title='Inglés:'>
      <InfoItem title='Hablado: ' value='Intermedio' />
      <InfoItem title='Escrito: ' value='Intermedio' />
      <InfoItem title='Leído: ' value='Intermedio' />
    </InfoCard>,
    <InfoCard title='Japonés:'>
      <InfoItem title='Hablado: ' value='Principiante' />
      <InfoItem title='Escrito: ' value='Principiante' />
      <InfoItem title='Leído: ' value='Principiante' />
    </InfoCard>,
  ];

  const hobbies = [
    <InfoCard title='Música e instrumentos' />,
    <InfoCard title='Manualidades (lápiz y plastilina)' />,
    <InfoCard title='Series y ánime' />,
    <InfoCard title='Caminatas ecológicas' />,
    <InfoCard title='Nadar' />,
  ];

  const academicInfo = [
    <InfoCard title='Universidad de Antioquia'>
      <DateItem title='Fecha: ' value='2015 - Actualidad' />
      <InfoItem title='Título: ' value='Ingeniero de sistemas' />
    </InfoCard>,
    <InfoCard title='SENA'>
      <DateItem title='Fecha: ' value='2012 - 2013' />
      <InfoItem
        title='Título: '
        value='Tecnólogo en administración del ensamble y mantenimiento de computadores y redes'
      />
    </InfoCard>,
    <InfoCard title='SENA'>
      <DateItem title='Fecha: ' value='2010 - 2011' />
      <InfoItem title='Título: ' value='Técnico en sistemas' />
    </InfoCard>,
  ];

  const coursesInfo = [
    <InfoCard>
      <InfoItem title='Nombre: ' value='CISCI IT Essentials' />
      <DateItem title='Fecha: ' value='2012' />
    </InfoCard>,
    <InfoCard>
      <InfoItem title='Nombre: ' value='Semillero de videojuegos' />
      <DateItem title='Fecha: ' value='2020' />
    </InfoCard>,
  ];

  const laboralInfo = [
    <InfoCard title='Experimentality'>
      <InfoItem title='Cargo: ' value='Desarrollador Back-End' />
      <DateItem title='Fecha: ' value='febrero 2022 - actualidad' />
    </InfoCard>,
    <InfoCard title='CIS'>
      <InfoItem title='Cargo: ' value='Desarrollador web' />
      <DateItem title='Fecha: ' value='abril 2022 - diciembre 2021' />
    </InfoCard>,
    <InfoCard title='WIGO'>
      <InfoItem title='Cargo: ' value='Desarrollador Full-Stack' />
      <DateItem title='Fecha: ' value='diciembre 2019 - diciembre 2020' />
    </InfoCard>,
  ];

  return (
    <div>
      <ul className='flex sm:flex-col lg:flex-row '>
        <Container
          isNetworkLinks={false}
          title='Hoja de vida de Anderson Barrientos Parra'
        />
        <Container isNetworkLinks title='Redes:'>
          <NetworkLinksCard />
        </Container>
      </ul>
      <Container isNetworkLinks={false} image={foto} title='Perfil:'>
        {profile}
      </Container>
      <Container isNetworkLinks={false} title='Hobbies:'>
        <Carousel centerMode centerSlidePercentage={45} emulateTouch>
          {hobbies}
        </Carousel>
      </Container>
      <Container isNetworkLinks={false} title='Idiomas:'>
        <Carousel centerMode centerSlidePercentage={45} emulateTouch>
          {languages}
        </Carousel>
      </Container>
      <Container isNetworkLinks={false} title='Información académica:'>
        <Carousel centerMode centerSlidePercentage={45} emulateTouch>
          {academicInfo}
        </Carousel>
      </Container>
      <Container isNetworkLinks={false} title='Cursos y certificaciones:'>
        <Carousel centerMode centerSlidePercentage={45} emulateTouch>
          {coursesInfo}
        </Carousel>
      </Container>
      <Container isNetworkLinks={false} title='Información laboral:'>
        <Carousel centerMode centerSlidePercentage={45} emulateTouch>
          {laboralInfo}
        </Carousel>
      </Container>
    </div>
  );
};
export default CurriculumPage;
