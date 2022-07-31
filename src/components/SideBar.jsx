const SideBar = ({ children, image, hide }) => (
  <div
    className={
      hide
        ? 'hidden'
        : 'absolute bg-gris h-screen flex flex-col flex-1 sm:w-1/2 md:hidden items-center z-10'
    }
  >
    <img src={image} className='h-1/3 m-2 scale-75 ' alt='Icon' />
    <div className='h-1/3 mt-5'>{children}</div>
  </div>
);

export default SideBar;
