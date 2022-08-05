import { Box, Typography } from '@mui/material';
import suitImg1 from '../../public/images/suit_hoodie_1.jpg';
import suitImg2 from '../../public/images/suit_hoodie_2.jpg';
import suitImg3 from '../../public/images/suit_hoodie_3.jpg';
import styles from '../../styles/Page8.module.scss';

const Page8 = () => {
  return (
    <div className={styles.wrapper}>
      <Typography align='center' variant='h5' marginBottom={'30px'}>
        Cynapse work room #1 <br />
        kick off
      </Typography>
      <Box
        component='img'
        marginTop={'30px'}
        sx={{
          maxWidth: { xs: 250, md: 400 },
        }}
        alt='img1'
        src={suitImg1}
        marginBottom={'10%'}
      />
      <span align={'center'}>
        <span className={styles.suit}>Suit</span>{' '}
        <span className={styles.border}>&</span>{' '}
        <span className={styles.hoodie}>Hoodie</span> 는 <br /> 자유를 추구하는{' '}
        <br /> 모든 워커들과 플레이어들을
        <br />
        위한 브랜드입니다.
      </span>

      {/* <Box
    width={'100%'}
    display={'flex'}
    justifyContent={'space-evenly'}
    alignItems={'center'}
  >
    <Box
      component='img'
      sx={{
        maxWidth: { xs: 180, md: 100 },
      }}
      alt='img1'
      src={suitImg2}
    />
    <Typography>
      일을 사랑하는 분들을 위한 <br />
      <span className={`${styles.suit} ${styles.small}`}>Suit&nbsp;</span>
      제품과{' '}
    </Typography>
  </Box>

  <Box
    width={'100%'}
    display={'flex'}
    justifyContent={'space-evenly'}
    alignItems={'center'}
  >
    <Typography>
      놀이를 좋아하는 분들을 위한 <br />
      <span className={`${styles.hoodie} ${styles.small}`}>
        Hoodie&nbsp;
      </span>
      제품을 통해 <br />
      많은 공감을 일으키고자 합니다.
    </Typography>
    <Box
      component='img'
      sx={{
        maxWidth: { xs: 180, md: 100 },
      }}
      alt='img1'
      src={suitImg3}
    />
  </Box> */}
    </div>
  );
};

export default Page8;
