import { useState } from 'react';

const useVisualModes = () => {
  const [state, setState] = useState({
    dark: false,
    menuIsActive: false,
  });
  
  const setDark = (dark) => setState((prev) => ({ ...prev, dark }));
  const setMenuIsActive = (menuIsActive) => setState((prev) => ({ ...prev, menuIsActive }));

  return { state, setDark, setMenuIsActive };

};

export default useVisualModes;