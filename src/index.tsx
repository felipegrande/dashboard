
import ReactDOM from 'react-dom/client';
import App from './App';

import {ThemeProvider } from './hooks/theme'
import {AuthProvider } from './hooks/auth'
import dark from './styles/themes/dark'




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <ThemeProvider toggleTheme={function (): void {
      throw new Error('');
    } } theme={dark}>   
      <AuthProvider>

        <App />

      </AuthProvider>

    </ThemeProvider>

  </>
);


