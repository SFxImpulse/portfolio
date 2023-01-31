import { useState } from 'react';

import MainPage from './components/MainPage';
import Header from './components/Header';

function App() {

  const [state, setState] = useState({
    dark: false,
    menuIsActive: false,
  });

  return (
    <div>
      <Header
        dark={state.dark}
        setDark={setState}
        menuIsActive={state.menuIsActive}
        setMenuIsActive={setState}
      />
      <MainPage
        dark={state.dark}
      />
    </div>
  )
}

export default App;
