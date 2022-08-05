import { Button, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/Page9.module.scss';
import BuildingTeam from '../../public/images/buildingTeam.png';
import { Box } from '@mui/system';

const Page9 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='h5' align={'center'}>
        Cynapse work room #2 <br /> <br />
        <br />
      </Typography>
      <span className={styles.normal} align='center'>
        Cynapse work room #1에 이어 <br />
        work room #2를 진행할 <br /> 유능할 분들을 모집합니다.
      </span>

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
        <span align={'center'}>
          어떤 기여를 할 수 있는지 알려주세요. <br />
          최상의 결과물을 낼 수 있도록 <br />
          <span className={`${styles.stronger}`}>&nbsp;최상의 팀&nbsp;</span> 을
          매칭해드립니다. <br />
          <br />
        </span>
        <Button
          style={{
            width: 'fit-content',
            color: '#FF5126',
            border: '2px solid #FF5126',
          }}
          variant={'outlined'}
        >
          [워크룸 #2 신청하기]
        </Button>
      </Box>
    </div>
  );
};

export default Page9;
