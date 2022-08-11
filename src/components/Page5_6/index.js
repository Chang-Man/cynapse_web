import React from 'react';
import styles from '../../styles/Page5_6.module.scss';
import { Box, Divider, Typography } from '@mui/material';
import SNU from '../../public/images/SNU.png';
import KT from '../../public/images/KT.png';

const Page5_6 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography align={'center'} variant={'h5'} marginBottom={'15%'}>
        <span>Cynapse work room</span>
        <br />
        #1 kick off
      </Typography>

      <span>지난 6월 1차 모집 및 팀매칭의 결과, </span>
      <span>Cynapse의 첫번 째 브랜드가 만들어졌습니다.</span>
      <span>브랜드 'suit & hoodie'와 구성원을 소개합니다!</span>

      <br />

      <br />

      <span align={'center'}>
        Cynapse work room #1에서는
        <br />
        <br />
        <span className={styles.stronger}>curvesign &nbsp;</span>{' '}
        일러스트레이터와
        <br />
        <span className={styles.stronger}>서울대학교</span> 출신 개발자 및
        기획자가
        <br /> 협업하고 있습니다.
      </span>
    </div>
  );
};

export default Page5_6;
