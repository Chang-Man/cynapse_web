import React from 'react';
import Profile from "../Profile";
import ChrisLee from "../../public/images/ChrisLee.png"
import styles from "../../styles/Page7.module.scss";
import {Box} from "@mui/system";

const Page7 = () => {
    return (
        <div className={styles.wrapper}>
            <Box sx={{mb:3}} display={"flex"} justifyContent={'space-around'}>
                <Profile name={"이하동"} profile={"github.com/ChrisLee02"}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
                <Profile name={"이하동"} profile={null}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
            </Box>
            <Box display={"flex"} justifyContent={'space-around'}>
                <Profile name={"이하동"} profile={"github.com/ChrisLee02"}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
                <Profile name={"이하동"} profile={null}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
            </Box>

        </div>
    );
};

export default Page7;