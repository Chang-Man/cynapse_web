import React from 'react';
import ChrisLee from "../Image/ChrisLee.jpg";
import Profile from "../Profile";

const Page2 = () => {
    return (
        <div>
            <Profile role={"Developer"} belong={"서울대학교 컴퓨터공학부"} contact={"hdchris765@snu.ac.kr"} imgSrc={ChrisLee}
                     name={"이하동"}></Profile>
        </div>
    );
};

export default Page2;