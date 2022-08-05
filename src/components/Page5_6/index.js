import React from 'react';
import styles from '../../styles/Page5_6.module.scss';
import { Box, Divider, Typography } from '@mui/material';
import SNU from '../../public/images/SNU.png';
import KT from '../../public/images/KT.png';

const Page5_6 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography align={'center'} variant={'h5'} marginBottom={'20%'}>
        <span>Cynapse work room</span>
        <br />
        #1 kick off
      </Typography>

      <Divider
        sx={{ width: '80%', borderBottomWidth: '3px', marginBottom: '5px' }}
      ></Divider>

      <br />

      <br />
      {/* <Box
        sx={{ width: 320, height: 120 }}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <img alt={'KT'} src={KT} style={{ width: 50, height: 50, margin: 0 }} />
        <img
          alt={'SNU'}
          src={SNU}
          style={{ width: 50, height: 50, margin: 0 }}
        />
      </Box> */}
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
