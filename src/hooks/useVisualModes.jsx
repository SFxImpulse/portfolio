import { useState } from 'react';

const useVisualModes = () => {
  const [state, setState] = useState({
    dark: false,
  });
  
  const setDark = (dark) => setState((prev) => ({ ...prev, dark }));

  return { state, setDark };

};

export default useVisualModes;