import {Container, NetworkLinksCard} from "components";
import {foto} from "resources";

const CurriculumPage = () => {
    return (
        <div>
            <ul className="flex sm:flex-col lg:flex-row">
                <Container isNetworkLinks={false}
                           title={"Hoja de vida de Anderson Barrientos Parra"}
                           />
                <Container isNetworkLinks={true}
                               title={"Redes:"}
                               children={(<NetworkLinksCard/>)}
                />
            </ul>
            <Container isNetworkLinks={false}
                       image={foto}
                       title={"Perfil:"}
                       children={(
                           <div>
                               <div className='text-text-contenido contenido my-3'>
                                   Soy estudiante del pregrado de ingeniería de sistemas en la universidad de Antioquia y desarrollador Full-Stack, actualmente estoy cursando el décimo nivel de la carrera y hago parte del grupo de investigación GEPAR – semillero de videojuegos. Cuento con conocimientos en las siguientes tecnologías:
                               </div>
                               <div className='text-text-contenido contenido my-3'>
                                   - Java           (80%)		 - SpringBoot      (75%)		  - Unity               (65%)
                                   - C#              (65%)		 - Flutter	              (75%)		 - MariaDB         (50%)
                                   - Dart            (75%)		 - Angular            (50%)		 - PostgreSQL    (50%)
                                   - JavaScript (60%)		 - React-Native   (50%)		 - Git                    (80%)
                               </div>
                               <div className='text-text-contenido contenido my-3'>
                               Tengo experiencia con Git-Flow, uso de servicios de Firebase (FCM, login, base de datos en tiempo real) y he desarrollado simuladores, aplicaciones en realidad aumentada y videojuegos con Unity. Además, estoy en la capacidad de realizar el análisis de requisitos y diseño de software usando patrones de diseño y desarrollo, generando la documentación requerida.
                           </div>
                           </div>
                       )}/>

        </div>
    );
}
export default CurriculumPage;
