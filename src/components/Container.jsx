const Container = ({ children, isNetworkLinks, title, image }) => (
  <div
    className={
      isNetworkLinks
        ? 'p-4 border-b-2 lg:border-l-2 border-azul-claro w-full flex flex-wrap flex-row sm:content-center md:content-start'
        : 'p-4  border-b-2 border-azul-claro w-full flex flex-wrap sm:flex-col sm:content-center md:content-start '
    }
  >
    <ul className='flex sm:flex-col md:flex-row w-full'>
      <div
        className={
          image
            ? 'content-center flex flex-col justify-center w-full'
            : 'hidden'
        }
      >
        <img
          src={image}
          className={
            image
              ? 'sm:mb-4 md:mb-0 md:mr-4 sm:scale-75 md:scale-100 h-fit'
              : 'hidden'
          }
          alt='foto'
        />
      </div>
      <ul
        className={
          isNetworkLinks ? 'osh-full flex flex-row ' : 'osh-full flex flex-col'
        }
      >
        <div className='text-text-titulo titulo sm:text-center md:text-left'>
          {title}
        </div>
        <ul
          className={
            isNetworkLinks ? 'sm:ml-6 md:ml-14 flex flex-row' : 'hidden'
          }
        >
          {children}
        </ul>
        <div
          className={isNetworkLinks ? 'hidden ' : 'mt-2 sm:w-screen md:w-fit'}
        >
          {children}
        </div>
      </ul>
    </ul>
  </div>
);

export default Container;
