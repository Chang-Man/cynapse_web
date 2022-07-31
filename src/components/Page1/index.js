import React from 'react';
import styles from '../../styles/Page1.module.scss'
import Logo from '../../public/images/Cynapse_Logo.png'
import developer from '../../public/images/developer.png'
import marketer from '../../public/images/marketer.png'
import designer from '../../public/images/designer.png'

import {Avatar, Box, Divider, Typography} from "@mui/material";

const Page1 = () => {
    return (
        <div className={styles.wrapper}>
            <Box sx={{width: 300, mb: 2}}>
                <div>
                    <Typography color={"#010A2D"} variant={"h3"} align="left">
                        Cynapse work room
                    </Typography>
                </div>
                <br/>
                <div>
                    <Typography color={"#0C1640"} align="left">당신의 능력이 브랜드가 되는 커뮤니티형 <br/> 작업 공간.</Typography>
                </div>
            </Box>

            <Divider style={{width: '80%', marginBottom: 20}}/>

            <Box sx={{width: '80%', height: 300}} justifyContent="left">
                <div className={styles.roleBox}>
                    <div className={styles.justifyCenter} style={{width: 70}}>
                        <Typography align='center'>디자이너</Typography>
                        <Avatar alt={"Designer"} src={designer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>
                    <div className={styles.justifyCenter} style={{width: 70}}>
                        <Typography align='center'>개발자</Typography>
                        <Avatar alt={"Programmer"} src={developer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>
                    <div className={styles.justifyCenter} style={{width: 70}}>
                        <Typography align='center'>마케터</Typography>
                        <Avatar alt={"Marketer"} src={marketer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>

                </div>


                <Typography align={'left'}>다양한 배경과 역량을 가진 사람들이 함께</Typography>
                <br/>
                <Typography align={'right'}>하나의 패션 브랜드를 만들다.</Typography>
            </Box>


        </div>
    );
};

export default Page1;