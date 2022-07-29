import './App.css';
import ReactPageScroller from "react-page-scroller";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";


function App() {
    return (
        <div className={"wrapper"}>
            <ReactPageScroller >
                <Page1></Page1>
                <Page2></Page2>
            </ReactPageScroller>
        </div>

    );
}

export default App;
