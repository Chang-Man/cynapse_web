import React from 'react';
import styles from '../../styles/Page1.module.scss'
import team from '../../public/images/team.png';


import {Avatar, Box, Divider, Typography} from "@mui/material";

const Page1 = () => {
    return (
        <div className={styles.wrapper}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{width: 300, mb: 2}}>
                <div>
                    <Typography color={"#010A2D"} variant={"h3"} align="left">
                        Cynapse work room
                    </Typography>
                </div>
                <br/>
                <div>
                    <Typography color={"#0C1640"} align="center">
                        능력, 브랜드가 되다
                    </Typography>
                    <Typography color={"#446ff2"} align="center">
                        커뮤니티형 작업 공간
                    </Typography>

                </div>
            </Box>

            <Divider style={{width: '80%', marginBottom: 5}}/>
            <Box sx={{width: 320, height: 'auto'}} justifyContent="center">
                <Avatar alt={"team"} src={team} sx={{width: 'auto', height: 'auto', margin: 0}}/>
                <Typography align={'center'}>다양한 사람들과 협업해</Typography>
                <br/>
                <Typography align={'center'}>
                    <span style={{color:'#446ff2'}}>하나의 브랜드</span>
                    를 만들어보세요.
                </Typography>
            </Box>


            {/*<Box sx={{width: 320, height: 300}} justifyContent="left">
                <div className={styles.roleBox}>
                    <div className={styles.justifyCenter} style={{width: 70}}>


                    </div>

                    <div className={styles.justifyCenter} style={{width: 70}}>

                        <Avatar alt={"Programmer"} src={developer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>
                    <div className={styles.justifyCenter} style={{width: 70}}>

                        <Avatar alt={"Marketer"} src={marketer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>

                </div>
                <Typography align={'center'}>다양한 사람들과 협업해</Typography>
                <br/>
                <Typography align={'center'}>하나의 브랜드를 만들어보세요.</Typography>
            </Box>*/}


        </div>
    );
};

export default Page1;