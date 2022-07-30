const Container = ({children, isNetworkLinks, title, image}) => {
  return(
      <div className= {isNetworkLinks? 'p-4 border-b-2 lg:border-l-2 border-azul-claro w-full flex flex-wrap flex-row sm:content-center ': 'p-4  border-b-2 border-azul-claro w-full flex flex-wrap sm:flex-col sm:content-center'}>
          <ul className='flex sm:flex-col md:flex-row'>
              <div className='content-center flex flex-col justify-center '>
                  <img src={image} className={image? " mr-4 scale-75 h-fit": "hidden"}/>
              </div>
              <ul className={isNetworkLinks? "osh-full flex flex-row " : "osh-full flex flex-col justify-between" }>
                  <div className='text-text-titulo titulo sm:text-center md:text-left'>
                      {title}
                  </div>
                  <ul className={isNetworkLinks? 'ml-20 flex flex-row' : 'hidden'}>
                      {children}
                  </ul>
                  <div className={isNetworkLinks? 'hidden ' : 'mt-2'}>
                      {children}
                  </div>
              </ul>
          </ul>


      </div>
  );
}

export default Container;
