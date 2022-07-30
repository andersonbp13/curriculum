const AppBarButton = ({name, onClickEvent}) => {
    return (
        <div>
            <button className='sm:text-text-boton-gris md:text-text-boton-blanco boton font-bold p-2 rounded-lg dark:hover:bg-gray-700 sm:m-6 md:m-1' onClick={onClickEvent}>{name}</button>
        </div>
    );
}

export default AppBarButton;
