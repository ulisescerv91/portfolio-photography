import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Navigation/Navigation'
import SocialIcons from './components/SocialIcons/SocialIcons'

function App() {
  return (
    <ParallaxProvider>

      <div className="App">
        <Router>
          <Navigation />
          <div className="social_icons">
            <SocialIcons position='column' />
          </div>
          <Switch>
              <Route path="/" exact component={Home} />     
          </Switch>
        </Router>
      </div>
    </ParallaxProvider>
  );
}

export default App;
