import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import CV from './HamadAliCV.pdf';
import landingPage from './components/landingpage';


function App() {
  return (
          // main page (getting the home page) and links to other pages 
      <div className="demo-big-content">
          {landingPage}
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/react-portfolio/">MyPortfolio</Link>} scroll>
                  <Navigation>
                      <Link to={CV} target="_blank">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactme">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to="/react-portfolio/">MyPortfolio</Link>}>
                  <Navigation>
                  <Link to={CV} target="_blank">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contactme">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content"></div>
                  < Main />
              </Content>
          </Layout>
      </div>
  );
}

export default App;
