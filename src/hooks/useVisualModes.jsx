import { useState, useEffect } from 'react';

const useVisualModes = () => {
  const [state, setState] = useState({
    dark: false,
  });
  
  const setDark = (dark) => setState((prev) => ({ ...prev, dark }));

  const addBodyClass = className => {
    document.body.classList.add(className);
    setDark(true);
  }
  const removeBodyClass = className => {
    document.body.classList.remove(className);
    setDark(false);
  }

  return { state, setDark, addBodyClass, removeBodyClass };

};

export default useVisualModes;