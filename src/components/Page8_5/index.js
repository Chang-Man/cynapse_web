import { Box, Typography } from '@mui/material';
import suitImg2 from '../../public/images/suit_hoodie_2.jpg';
import suitImg3 from '../../public/images/suit_hoodie_3.jpg';
import styles from '../../styles/Page8_5.module.scss';

const Page8_5 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography align={'center'} variant='h5' marginBottom={'30px'}>
        Cynapse work room #1 <br />
        kick off
      </Typography>

      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <Box
          component='img'
          sx={{
            maxWidth: { xs: 150, md: 100 },
          }}
          alt='img1'
          src={suitImg2}
        />
        <span>
          일을 사랑하는 <br />
          분들을 위한 <br />
          <span className={`${styles.suit} ${styles.small}`}>Suit&nbsp;</span>
          제품과{' '}
        </span>
      </Box>

      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <span>
          놀이를 좋아하는 <br />
          분들을 위한 <br />
          <span className={`${styles.hoodie} ${styles.small}`}>
            Hoodie&nbsp;
          </span>
          제품으로 <br />
          많은 공감을 <br />
          이끌고자 합니다.
        </span>
        <Box
          component='img'
          sx={{
            maxWidth: { xs: 150, md: 100 },
          }}
          alt='img1'
          src={suitImg3}
        />
      </Box>
    </div>
  );
};

export default Page8_5;
