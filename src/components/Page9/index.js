import { Button, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/Page9.module.scss';
import BuildingTeam from '../../public/images/buildingTeam.png';
import { Box } from '@mui/system';

const Page9 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='h4' color={'#446ff2'}>
        Cynapse work room #2 <br />{' '}
        <span className={styles.normal}>
          와 함께할 유능한 분들을 찾고 있습니다.
        </span>{' '}
        <br />
        <br />
        <span className={styles.normal}>
          Cynapse work room #1을 이어 <br />
          work room #2를 진행할 유능할 분들을 모집합니다.
        </span>
      </Typography>

      <img
        className={styles.teamImg}
        src={BuildingTeam}
        alt={'building Team'}
      />

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Typography>
          패션 브랜드를 만드는 데 있어 <br />
          자신이 어떤 기여를 할 수 있는지 알려주세요. <br />
          최상의 결과물을 낼 수 있도록 <br />
          <span className={`${styles.stronger} ${styles.color}`}>
            &nbsp;최상의 팀&nbsp;
          </span>{' '}
          을 매칭해드립니다. <br />
          <br />
        </Typography>
        <Button style={{ width: 'fit-content' }} variant={'outlined'}>
          [워크룸 #2 신청하기]
        </Button>
      </Box>
    </div>
  );
};

export default Page9;
