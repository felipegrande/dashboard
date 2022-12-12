
import ReactDOM from 'react-dom/client';
import App from './App';

import {ThemeProvider } from './hooks/theme'
import dark from './styles/themes/dark'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <ThemeProvider toggleTheme={function (): void {
      throw new Error('');
    } } theme={dark}>

        <App />

    </ThemeProvider>

  </>
);


