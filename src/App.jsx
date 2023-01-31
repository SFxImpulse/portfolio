import useVisualModes from './hooks/stateSelectors';

import MainPage from './components/MainPage';
import Header from './components/Header';

function App() {

  const {
    state,
    setDark,
    setMenuIsActive
  } = useVisualModes();

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
