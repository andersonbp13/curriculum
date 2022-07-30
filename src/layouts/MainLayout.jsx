import {useNavigate, Outlet} from "react-router-dom";
import {useState} from "react";
import {BsThreeDots} from 'react-icons/bs';
import {AppBarButton} from "components";
import {SideBar} from "components";
import {logo} from "resources";

const MainLayout = () => {
  const [hideSideBar, setHideSideBar] = useState(true);

  const navigate = useNavigate();

  const openCurriculumPage = () => {
    setHideSideBar(true);
    navigate('/');
  }

  const openAboutPage = () => {
    setHideSideBar(true);
    navigate('/about');
  }

  const showSideBar = () => {
    setHideSideBar(!hideSideBar);
  }

  const curriculumButton = (<AppBarButton name={"Hoja de vida"} onClickEvent={openCurriculumPage}/>);
  const aboutButton = (<AppBarButton name={"Acerca de..."} onClickEvent={openAboutPage}/>);

  return(
      <main className='h-screen flex flex-col'>
        <SideBar children={(
            <div>
              {curriculumButton}
              {aboutButton}
            </div>
        )} image={logo} hide={hideSideBar}/>
        <nav className="px-2.5 py-2.5 bg-gradient-to-r from-azul-oscuro-degradado to-negro ">
          <div className="flex flex-wrap justify-between">
            <img src={logo} className="mr-3 h-12 "/>
            <div className="flex md:order-2">
              <button className=" p-2 rounded-lg dark:hover:bg-gray-700 text-white scale-150 h-10 md:hidden "
                      onClick={showSideBar}>
                <BsThreeDots/>
              </button>
            </div>
            <div className="hidden md:block ">
              <ul className="flex md:flex-row md:space-x-8">
                {curriculumButton}
                {aboutButton}
              </ul>
            </div>
          </div>
        </nav>

          <ul className="h-full flex md:flex-row ">
            <div className='bg-gris rounded-tr-2xl sm:w-0 md:w-1/5' />
            <div className=' sm:w-full md:w-4/5 lg:w-3/5 mt-2'>
              <Outlet/>
            </div>
            <div className='bg-gris rounded-tl-2xl sm:w-0 lg:w-1/5' />
          </ul>
      </main>
  );
}

export default MainLayout;
