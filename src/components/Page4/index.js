import React from 'react';
import { Typography } from '@mui/material';
import styles from '../../styles/Page4.module.scss';
import teamWork from '../../public/images/teamwork.png';

const Page4 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography align='center'>
        <span className={styles.workRoom}>&nbsp; Cynapse work room &nbsp;</span>
        에서는 <br /> 한 가지만 잘 해도 브랜드를 운영할 수 있습니다.
      </Typography>

      <img className={styles.teamWorkImg} src={teamWork} alt={'teamworkImg'} />

      <span className={styles.text} align={'center'}>
        {' '}
        <span>나에게 없는 능력을 가진 Cynapse 구성원들과 </span> <br />
        함께 팀을 만들어 직접 제품을 기획 및 제작하고 <br /> 판매까지 해보세요.{' '}
      </span>
      <span align={'center'}>
        <span style={{ color: ' rgb(255, 81, 38)' }}>
          함께 만들어 나가는 패션 브랜드
        </span>
        <br /> &nbsp; Cynapse &nbsp; 에서
        <br /> 최상의 팀을 만들어보세요!
      </span>
    </div>
  );
};

export default Page4;
