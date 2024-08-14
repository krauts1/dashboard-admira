import React, { useReducer } from 'react';
import DashboardContext from './contexts/generalContext';
import initState from './store/initState';
import DashboardReducer from './store/dashboardReducer';
import { Siderbar } from './components';
import './App.css';

const App =() => {
  const [state, dispatch] = useReducer(
    DashboardReducer,
    initState
  );
  
  return (
    <DashboardContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Siderbar/>
      </div>
    </DashboardContext.Provider>
  );
}

export default App;
