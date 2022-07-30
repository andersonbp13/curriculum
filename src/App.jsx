import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AboutPage, CurriculumPage} from "pages";
import {MainLayout} from "layouts";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<CurriculumPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
