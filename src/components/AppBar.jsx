import AppBarButton from "./AppBarButton";
import { useNavigate } from "react-router-dom";

const AppBar = () => {

  const navigate = useNavigate();

  const openCurriculumPage = () => {
    navigate('/');
  }

  const openAboutPage = () => {
    navigate('/about');
  }
  
  return(
      <div>
        <nav className="px-2 sm:px-4 py-2.5 bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center">

              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>

            <div className="flex md:order-2">
              <button className="p-2 rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
              </button>
            </div>

            <div className="hidden md:block ">
              <ul className="flex md:flex-row md:space-x-8">
                <AppBarButton name={"Hoja de vida"} onClickEvent={openCurriculumPage}/>
                <AppBarButton name={"Acerca de..."} onClickEvent={openAboutPage}/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default AppBar;
