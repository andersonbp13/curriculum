const AppBarButton = ({name, onClickEvent}) => {
    return (
        <div>
            <button className='text-gray-50 font-bold shadow p-2 rounded-lg dark:hover:bg-gray-700' onClick={onClickEvent}>{name}</button>
        </div>
    );
}

export default AppBarButton;
