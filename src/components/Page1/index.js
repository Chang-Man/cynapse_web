import React from 'react';
import styles from '../../styles/Page1.module.scss'
import Logo from '../Image/Cynapse_Logo.png'
import {Box, Typography} from "@mui/material";

const Page1 = () => {
    return (
        <div className={styles.wrapper}>
            <Box component="img" src={Logo} sx={{
                height: 100,
                width: 100,
            }} />
            <Box sx={{width:300}} alignContent="left">
                <Typography align="left" >Cynapse work room</Typography>
            </Box>

            <Box sx={{width:300, height:300}}>

                <Typography sx={{wordBreak:"keep-all"}} >디자이너, 개발자, 마케터 등
                    다양한 배경과 역량을 가진 사람들이 함께
                    하나의 패션 브랜드를 만들어가는 커뮤니티형 작업 공간입니다.</Typography>
                {/*Cynapse work room은
                <br/>
                <Typography>디자이너, 개발자, 마케터 등</Typography>
                <br/>
                <Typography>다양한 배경과 역량을 가진 사람들이 함께</Typography>
                <br/>
                <Typography>하나의 패션 브랜드를 만들어가는 커뮤니티형 작업 공간입니다.</Typography>*/}
            </Box>



        </div>
    );
};

export default Page1;