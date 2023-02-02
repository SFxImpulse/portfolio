import useVisualModes from './hooks/useVisualModes';

import MainPage from './components/MainPage';
import Header from './components/Header';

function App() {

  const {
    state,
    setDark,
    addBodyClass,
    removeBodyClass,
  } = useVisualModes();

  return (
    <div>
      <Header
        dark={state.dark}
        setDark={setDark}
        addDark={addBodyClass}
        removeDark={removeBodyClass}
      />
      <MainPage
        dark={state.dark}
      />
    </div>
  )
}

export default App;
