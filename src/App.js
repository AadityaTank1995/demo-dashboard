import { useContext, useEffect } from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const { dispatch } = useContext(UserContext);
  const { state } = useContext(ThemeContext);
  const darkMode = state.isDark;
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
  })
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((data) => {
        dispatch({type:"UPDATE", payload:data.results[0]})
      })
  }, [dispatch])
  return (
      <div className={ darkMode ? "app-dark" : "app-light" }>
        <Nav/>
        <Dashboard/>
      </div>
  );
}

export default App;
