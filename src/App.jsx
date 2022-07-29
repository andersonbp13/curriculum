import {BrowserRouter, Routes, Route} from "react-router-dom";
import CurriculumPage from "./pages/CurriculumPage";
import AppBar from "./components/AppBar";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <AppBar/>
                <Routes>
                    <Route path='/' element={<CurriculumPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
