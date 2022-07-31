const DateItem = ({ title, value }) => (
  <div className='mx-4 mt-3 flex flex-wrap justify-items-start '>
    <ul className='flex flex-row'>
      <div className='text-text-subtitulo subtitulo text-left w-20'>
        {title}
      </div>
      <div className='text-text-fechas fecha'>{value}</div>
    </ul>
  </div>
);

export default DateItem;
