import { useState } from 'react';

import MainPage from './components/MainPage';
import Header from './components/Header';

function App() {

  const [state, setState] = useState({
    dark: false,
    menuIsActive: false,
  });

  const setDark = (dark) => setState((prev) => ({ ...prev, dark }));
  const setMenuIsActive = (menuIsActive) => setState((prev) => ({ ...prev, menuIsActive }));

  return (
    <div>
      <Header
        dark={state.dark}
        setDark={setDark}
        menuIsActive={state.menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
      <MainPage
        dark={state.dark}
      />
    </div>
  )
}

export default App;
