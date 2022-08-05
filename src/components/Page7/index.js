import React from 'react';
import Profile from "../Profile";
import ChrisLee from "../../public/images/ChrisLee.jpg";
import ChangChang from "../../public/images/ChangChang.jpg";
import JungWooJae from "../../public/images/JungWooJae.jpg";
import styles from "../../styles/Page7.module.scss";
import {Box} from "@mui/system";

const Page7 = () => {
    return (
        <div className={styles.wrapper}>
            <Box sx={{mb:8}} display={"flex"} justifyContent={'space-around'}>
                <Profile name={"정우재"} profile={null}
                         belong={"서울대학교 역사교육과"} role={"Product Manager"} imgSrc={JungWooJae}/>
                <Profile name={"이하동"} profile={null}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
            </Box>
            <Box display={"flex"} justifyContent={'space-around'}>
                <Profile name={"이하동"} profile={"github.com/ChrisLee02"}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChrisLee}/>
                <Profile name={"김창아"} profile={"github.com/Chang-Man"}
                         belong={"서울대학교 컴퓨터공학부"} role={"Development"} imgSrc={ChangChang}/>

            </Box>

        </div>
    );
};

export default Page7;