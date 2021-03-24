import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './themes';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Notes />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
