import React from 'react';
import styles from '../../styles/Page2.module.scss';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

import clock from '../../public/images/clock.png';
import money from '../../public/images/money.png';

const Page2 = () => {
  return (
    <div className={styles.wrapper}>
      <header style={{ marginBottom: '5px' }}>
        <Typography fontSize={28} fontWeight={900}>
          커뮤니티 기반 브랜드 운영
        </Typography>
      </header>


      <Typography
        marginBottom={'15%'}
        align={'center'}
        sx={{ wordBreak: 'keep-all' }}
      >
        혼자서는 돈도, 시간도 많이 필요한
        <br />
        패션 브랜드 창업
      </Typography>

      <br />

      <br />

      <span align={'center'} sx={{ wordBreak: 'keep-all' }}>
        다양한 역량의 사람들이 모인 커뮤니티를 통해
        <br />
        패션 브랜드 운영의{' '}
        <span style={{ color: 'rgb(255, 81, 38)' }}>시간과 비용을 절감</span>
        해보세요.
      </span>
      <br />
      <span
        sx={{
          wordBreak: 'keep-all',
        }}
        align={'center'}
      >
        긱워커 시대, Cynapse work room 에서는
        <br />
        패션 브랜드 창업 역시 사이드 프로젝트로 가능합니다.
      </span>
      <br />

      <Box display={'flex'} justifyContent={'center'}>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSeejKVxSfvKtocNr55_2d9sRQWGKZzxLz42Qg_JdjDDw7Nqyw/viewform'
          target='_blank'
        >
          <Button
            style={{
              border: '1px solid rgb(255, 81, 38)',
              color: 'rgb(255, 81, 38)',
            }}
          >
            [워크룸 #2 신청하기]
          </Button>
        </a>
      </Box>

      {/*<div className={styles.mainUp}>
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


            </footer>*/}
    </div>
  );
};

export default Page2;
