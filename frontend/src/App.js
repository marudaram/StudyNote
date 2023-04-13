import MainView from "./views/MainView";
import {Route, Routes} from "react-router-dom";
import WordNoteView from "./views/WordNoteView";
import Header from "./components/layout/Header";

function App() {

    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="/" element={<MainView/>}/>
                <Route path="/wordNote" element={<WordNoteView/>}/>
            </Route>
        </Routes>
    );
}

export default App;