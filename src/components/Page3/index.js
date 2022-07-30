import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Imagine from '../../public/images/imagine.png';
import styles from '../../styles/Page3.module.scss';

const Page3 = () => {
  return (
    <Grid
      className={styles.wrapper}
      container
      bottom={0}
      direction='column
    '
      // justifyContent='center'
      alignItems='center'
      spacing={5}
    >
      <Grid item>
        <Typography variant='h5' align='center'>
          서로의 니즈를 충족시키는 <br />{' '}
          <p className={styles.header}>최상의 팀 매칭</p>
        </Typography>
      </Grid>

      <Grid item>
        <Typography align='center' sx={{ wordBreak: 'keep-all' }}>
          회사에서 시키는 일이 아니라, <br />{' '}
          <p className={styles.myBrand}>나만의 브랜드</p>
          를 만들어 성공하는 상상,
          <br />한 번쯤은 해보셨나요?
        </Typography>
      </Grid>
      <Grid item>
        <img className={styles.imagineImg} src={Imagine} alt={'imagine img'} />
      </Grid>
      <Grid item>
        <Typography align='center'>
          하지만 혼자서 브랜드를
          <br /> 만들기는 매우 어렵습니다. <br />
          <br />
          <p className={styles.todo}>디자인, 물건 소싱, 마케팅, CS</p> 등 <br />{' '}
          해내야 할 것들이 한 두 가지가 아니기 때문이죠.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Page3;
