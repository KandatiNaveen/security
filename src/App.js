import "./App.css";
import Sidebar from "./Sidebar";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import DonutChart from './DonutChartsPage';
function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/Home"
                    element={<DonutChart />}
                />
                <Route
                    path="/page1"
                    element={<Page1 />}
                />
                <Route
                    path="/page2"
                    element={<Page2 />}
                />
                <Route
                    path="/page3"
                    element={<Page3 />}
                />
                <Route
                    path="/page4"
                    element={<Page4 />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;