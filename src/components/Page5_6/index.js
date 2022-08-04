import React from 'react';
import styles from "../../styles/Page5_6.module.scss";
import {Box, Divider, Typography} from "@mui/material";
import SNU from "../../public/images/SNU.png";
import KT from "../../public/images/KT.png";

const Page5_6 = () => {
    return (
        <div className={styles.wrapper}>

            <Typography sx={{mb: 1}} align={'center'} variant={'h5'}>
                <span style={{color: '#446ff2'}}>Cynapse work room</span>
                <br/>
                #1 kick off
            </Typography>

            <Divider sx={{width: "80%", borderBottomWidth: '3px', marginBottom: '5px'}}></Divider>
            <Typography sx={{textDecoration: 'underline', textUnderlineOffset: '3px', wordBreak: 'keep-all'}}
                        color={'#010A2D'} align={'center'} variant={'h6'}>
                ‘다양한 역량의 사람들을 연결함으로써
                <br/>
                {' '}패션 브랜드를 효율적으로 운영한다’
            </Typography>

            <br/>

            <Typography align={'center'}>
                Cynapse의 미션을 실행할 첫 프로젝트,
                <br/>
                Cynapse work room #1을 소개합니다.
            </Typography>
            <br/>
            <Box sx={{width: 320, height: 120}} display={'flex'} justifyContent={'space-around'}>
                <img alt={"KT"} src={KT} style={{width: 100, height: 100, margin: 0}}/>
                <img alt={"SNU"} src={SNU} style={{width: 100, height: 100, margin: 0}}/>
            </Box>
            <Typography align={'center'}>
                Cynapse work room #1에서는
                <br/><br/>
                <span style={{textDecoration:'underline', textUnderlineOffset:'3px' ,color: '#446ff2'}}>'KT Y TOP5'</span> 일러스트레이터와,
                <br/>
                <span style={{textDecoration:'underline', textUnderlineOffset:'3px' ,color: '#446ff2'}}>서울대학교</span> 출신 개발자 및 기획자
                <br/><br/>
                가 협업하고 있습니다.
            </Typography>

        </div>
    );
};

export default Page5_6;