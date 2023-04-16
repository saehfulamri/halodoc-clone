import "./App.css";
import Footersection from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
    return (
        <div className="App">
            <div>
                <Navigation />
            </div>
            <div className="pt-5">
                <Main />
            </div>
            <div>
                <Footersection />
            </div>
        </div>
    );
}

export default App;
