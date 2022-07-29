import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Imagine from '../../public/images/imagine.png';
import styles from '../../styles/Page3.module.scss';

const Page3 = () => {
  return (
    <Grid
      className={styles.wrapper}
      container
      height={'80%-65px'}
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
      columns={15}
    >
      <Grid item xs={3}>
        <Typography variant='h5' align='center'>
          서로의 니즈를 충족시키는 <br /> 최상의 팀 매칭
        </Typography>
      </Grid>

      <Grid item>
        <Typography align='center' sx={{ wordBreak: 'keep-all' }}>
          회사에서 시키는 일이 아니라, <br />{' '}
          <Typography color='#446FF2' sx={{ fontWeight: 'bolder' }}>
            나만의 브랜드
          </Typography>
          를 만들어
          <br />
          성공하는 상상을 한 번쯤은 해보셨나요?
        </Typography>
      </Grid>
      <Grid item>
        <img className={styles.imagineImg} src={Imagine} alt={'imagine img'} />
      </Grid>
      <Grid item>
        <Typography align='center'>
          하지만 혼자서 브랜드를
          <br /> 만들기는 매우 어렵습니다. <br />
          디자인, 물건 소싱, 마케팅, CS 등등 <br /> 잘 해내야 하는 것들이 한 두
          가지가 아니기 때문이죠.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page3;
