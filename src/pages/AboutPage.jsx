import { Container } from 'components';

const AboutPage = () => {
  const profile = [
    <div className='text-text-contenido contenido my-3'>
      Solución al proyecto 2 de la materia Ingeniería web
    </div>,
    <div className='text-text-contenido contenido my-3'>
      Ingeniería de sistemas - Universidad de Antioquia
    </div>,
    <ul className='flex flex-row'>
      <div className='text-text-subtitulo subtitulo my-3'>Hecho por:</div>
      <div className='text-text-contenido contenido my-3 ml-3'>
        Anderson Barrientos Parra
      </div>
    </ul>,
    <ul className='flex flex-row'>
      <div className='text-text-subtitulo subtitulo my-3'>Profesor:</div>
      <div className='text-text-contenido contenido my-3 ml-3'>
        Daniel Saldarriaga López
      </div>
    </ul>,
    <div className='text-text-contenido contenido my-3'>2022</div>,
    <ul className='flex flex-row'>
      <div className='text-text-contenido contenido my-3'>
        Link diseño en Figma:
      </div>
      <a href='https://www.figma.com/file/PbbxfGMagJGubkpiLYWQ6L/Hoja-de-vida?node-id=0%3A1'>
        <div className='text-text-link link my-3 ml-3 underline'>
          https://www.figma.com/file/PbbxfGMagJGubkpiLYWQ6L/Hoja-de-vida?node-id=0%3A1
        </div>
      </a>
    </ul>,
  ];

  return (
    <div className='h-screen'>
      <Container isNetworkLinks={false} title='Acerca del proyecto:'>
        {profile}
      </Container>
    </div>
  );
};
export default AboutPage;
