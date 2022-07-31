const InfoCard = ({ title, children }) => (
  <div className='p-4 shadow-md shadow-gris h-full flex flex-wrap flex-col mb-4'>
    <div className='text-text-titulo titulo sm:text-center md:text-left'>
      {title}
    </div>
    <ul className='flex flex-col start'>{children}</ul>
  </div>
);

export default InfoCard;
