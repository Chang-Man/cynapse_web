import React from 'react';
import styles from '../../styles/Page1.module.scss';
import Logo from '../../public/images/Cynapse_Logo_white_only.png';

import { Avatar, Box, Divider, Typography } from '@mui/material';

const Page1 = () => {
  return (
    <div className={styles.wrapper}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        sx={{ width: 300, mb: 2 }}
      >
        <div>
          <Typography variant={'h3'} align='left'>
            Cynapse
          </Typography>
        </div>
        <br />
        <div>
          <Typography align='center'>능력, 브랜드가 되다</Typography>
          <Typography marginBottom={'10%'} color={'#FF5126'} align='center'>
            커뮤니티형 작업 공간
          </Typography>
        </div>
      </Box>
      <Divider style={{width: '80%', marginBottom: 5 }} />
      <img style={{marginTop:"40px"}} className={styles.mainImg} src={Logo} alt={'mainImg'} />
      <span>다양한 사람들과 협업해</span>
      <span>하나의 브랜드를 만들어보세요.</span>
      {/*<Box sx={{width: 320, height: 300}} justifyContent="left">
                <div className={styles.roleBox}>
                    <div className={styles.justifyCenter} style={{width: 70}}>


                    </div>

                    <div className={styles.justifyCenter} style={{width: 70}}>

                        <Avatar alt={"Programmer"} src={developer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>
                    <div className={styles.justifyCenter} style={{width: 70}}>

                        <Avatar alt={"Marketer"} src={marketer} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                    </div>

                </div>
                <Typography align={'center'}>다양한 사람들과 협업해</Typography>
                <br/>
                <Typography align={'center'}>하나의 브랜드를 만들어보세요.</Typography>
            </Box>*/}
    </div>
  );
};

export default Page1;
