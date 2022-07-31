import React from 'react';
import styles from "../../styles/Page2.module.scss";
import {Box, Button, Divider, Typography} from "@mui/material";
import community from '../../public/images/community.png';
import work_alone from '../../public/images/work_alone.png';
import {ArrowRightAlt} from "@mui/icons-material";


const Page2 = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Typography variant={'h5'}>
                    Cynapse Work Room
                    <br/>
                    :커뮤니티 기반 브랜드 운영
                </Typography>
            </header>

            <Divider sx={{width: "100%", borderBottomWidth: '3px', marginBottom: '20px'}}></Divider>

            <div className={styles.mainUp}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
                     sx={{width: 160, height: 'auto', border: "3px solid black", borderRadius: "10px"}}>
                    <img src={work_alone} style={{width: 50, height: 50}} alt="alt"/>
                    <Typography sx={{wordBreak: 'keep-all'}} align={'center'} variant={'body2'}>
                        브랜드를 위해 투입되는
                        시간, 비용, 다양한 역량
                        <br/> <br/>
                        소수 인원으로는 버겁죠.
                    </Typography>
                </Box>
                <ArrowRightAlt sx={{fontSize: 30}}/>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}
                     sx={{width: 180, height: 'auto', border: "3px solid black", borderRadius: "10px"}}>
                    <img src={community} style={{width: 50, height: 50}} alt="alt"/>
                    <Typography variant={'h6'}>
                        시간&비용의 절감
                    </Typography>
                    <Typography align={'center'} sx={{wordBreak: 'keep-all'}} variant={'body2'}>
                        다양한 역량을 가진 사람들이
                        <br/>
                        함께 커뮤니티를 구성하고
                        <br/>
                        함께 브랜드를 운영합니다.
                    </Typography>
                </Box>
            </div>

            <div className={styles.mainBottom}>
                <Typography sx={{textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                    당신이 당신의 능력에만 집중할 수 있도록
                </Typography>
                <br/>
                <Typography sx={{textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                    다양한 직군, 다양한 능력의 사람들을 연결합니다.
                </Typography>
                <br/>
                <Typography sx={{textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                    하나의 상품, 하나의 브랜드를 위한 협업을 통해
                </Typography>
                <Typography sx={{textDecoration: 'underline', textUnderlineOffset: '3px'}}>
                    시간과 비용을 절감해보세요.
                </Typography>
            </div>

            <footer className={styles.footer}>
                <Typography>
                    긱워커 시대,
                </Typography>
                <Typography sx={{mb:3}}>
                    Cynapse Work Room에서
                    <br/>
                    당신의 아이디어를 실현하세요.
                </Typography>

                <Box display={'flex'} justifyContent={'center'}>
                    <Button variant={'outlined'}>
                    [워크룸 #2 신청하기]
                </Button>
                </Box>


            </footer>


        </div>
    );
};

export default Page2;