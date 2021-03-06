import {useEffect} from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import ReactGA from 'react-ga';
import routes from './router';

function App() {
  ReactGA.initialize('UA-147425189-1');
  ReactGA.pageview(window.location.pathname);
  const routeResult = useRoutes(routes);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return routeResult;
}

export default App;