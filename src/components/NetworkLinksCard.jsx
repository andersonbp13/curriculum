import { IconLink } from 'components';
import { correo, instagram, facebook, linkedin, github } from 'resources';
import {
  correoDireccion,
  facebookUrl,
  githubUrl,
  instagramUrl,
  linkedinUrl,
} from 'utils/constants';

const NetworkLinksCard = () => (
  <ul className='mr-3 flex flex-row flex-wrap space-x-4'>
    <IconLink image={correo} link={correoDireccion} />
    <IconLink image={instagram} link={instagramUrl} />
    <IconLink image={facebook} link={facebookUrl} />
    <IconLink image={linkedin} link={linkedinUrl} />
    <IconLink image={github} link={githubUrl} />
  </ul>
);

export default NetworkLinksCard;
