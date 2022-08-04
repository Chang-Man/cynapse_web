import styles from './App.module.scss';
import ReactPageScroller from 'react-page-scroller';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { ThemeProvider, createTheme, IconButton } from '@mui/material';
import Page4 from './components/Page4';
import Logo from './public/images/Cynapse_Logo_white.png';
import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Page5_6 from "./components/Page5_6";
import Page9 from './components/Page9';
import Page7 from "./components/Page7";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <ThemeProvider theme={THEME}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={Logo} alt={'logo'} className={styles.logo} />
        </header>
        <IconButton
          className={styles.upButton}
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          <ArrowUpwardIcon fontSize='large' />
        </IconButton>
        <ReactPageScroller
          animationTimer={700}
          pageOnChange={(num) => {
            setCurrentPage(num);
          }}
          customPageNumber={currentPage}
        >
          <Page1/>
          <Page2/>
          <Page3/>
          <Page4/>
          <Page5_6/>
          <Page7/>
          <Page9 />
        </ReactPageScroller>
      </div>
    </ThemeProvider>
  );
}

const THEME = createTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'NotoSans'`,
    fontSize: 14,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
  },
});

export default App;
