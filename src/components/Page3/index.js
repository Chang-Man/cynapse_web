import React from 'react';
import { Typography } from '@mui/material';
import Imagine from '../../public/images/imagine.png';
import styles from '../../styles/Page3.module.scss';

const Page3 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography marginBottom={'20%'} variant='h5' align='center'>
        서로의 니즈를 충족시키는 <br />{' '}
        <p styles={{ color: '#FF5126' }}>최상의 팀 매칭</p>
      </Typography>

      <span align='center' sx={{ wordBreak: 'keep-all' }}>
        회사에서 시키는 일이 아니라 <br />{' '}
        <span className={styles.stronger}>나만의 브랜드</span> 를 만들어
        성공하는 상상,
        <br />한 번쯤은 해보셨나요?
      </span>

      {/* <img className={styles.imagineImg} src={Imagine} alt={'imagine img'} /> */}

      <span align='center'>
        하지만 혼자서 브랜드를
        <br /> 만들기는 매우 어렵습니다.
        <br />
        <br />
        해야 할 것들이 <br />한 두 가지가 아니기 때문이죠.
      </span>
    </div>
  );
};

export default Page3;
