const SideBar = ({children, image, hide}) => {
    return (
        <div className={hide? "hidden" : "absolute bg-gris h-screen flex flex-col sm:w-1/2 md:hidden items-center z-10"}>
            <img src={image} className="h-1/3 m-2 scale-75 "/>
            <div className='h-1/3 mt-5'>
                {children}
            </div>
        </div>
    );
}

export default SideBar;
