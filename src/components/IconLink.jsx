const IconLink = ({ link, image }) => (
  <a href={link}>
    <img src={image} className=' h-fit w-8' alt={link} />
  </a>
);

export default IconLink;
