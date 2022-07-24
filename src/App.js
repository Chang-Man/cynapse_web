import './App.css';
import Profile from "./Profile";
import ChrisLee from "./Image/ChrisLee.jpg";

function App() {
    return (
        <div>
            <Profile role={"Developer"} belong={"서울대학교 컴퓨터공학부"} contact={"hdchris765@snu.ac.kr"} imgSrc={ChrisLee}
                     name={"이하동"}></Profile>
        </div>
    );
}

export default App;
