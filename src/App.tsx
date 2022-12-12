
import GlobalStyles from "./styles/global.styles";
import { ThemeProvider} from "styled-components";

import Routes from './routes'

import {useTheme} from './hooks/theme'


const App: React.FC = () => {

  const {theme } = useTheme()
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Routes/>
      

    </ThemeProvider>
  );
};

export default App;
