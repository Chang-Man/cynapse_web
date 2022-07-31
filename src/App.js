import './App.css';
import ReactPageScroller from 'react-page-scroller';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { ThemeProvider, createTheme } from '@mui/material';
import Page4 from './components/Page4';
function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className={'wrapper'}>
        <header className={'header'}>dd</header>
        <ReactPageScroller>
          <Page1></Page1>
          <Page2></Page2>
          <Page3></Page3>
          <Page4 />
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
