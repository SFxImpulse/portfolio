import useVisualModes from './hooks/useVisualModes';

import DropdownMenu from './components/DropdownMenu';
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
      <DropdownMenu menuIsActive={state.menuIsActive} />
      <MainPage
        dark={state.dark}
      />
    </div>
  )
}

export default App;
