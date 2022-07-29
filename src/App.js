import './App.css';
import Profile from "./Profile";
import ChrisLee from "./Image/ChrisLee.jpg";
import ReactPageScroller from "react-page-scroller";


function App() {
    return (
        <ReactPageScroller>
            <Profile role={"Developer"} belong={"서울대학교 컴퓨터공학부"} contact={"hdchris765@snu.ac.kr"} imgSrc={ChrisLee}
                     name={"이하동"}></Profile>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </ReactPageScroller>
    );
}

export default App;
