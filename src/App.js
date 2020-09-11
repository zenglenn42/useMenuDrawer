import React from 'react'
import { FaGithubAlt as GithubIcon } from 'react-icons/fa'
import { BsFillBriefcaseFill as PortfolioIcon } from 'react-icons/bs'
import { Accordion } from './components/Accordion/Accordion'
import { drawerItems, nestedItems, nestedItemOverrides } from './api/inputdata'
import {
  nestedItemsClosure,
  nestedLayoutReducer,
  singlePeerExpandedReducer
} from './components/NestedAccordion/NestedAccordion'
import {
  menuLayoutReducer,
  menuExpandedReducer
} from './components/MenuDrawer/MenuDrawer'
import {
  appFrame,
  drawer,
  header,
  headerTitle,
  headerSubTitle,
  main,
  article,
  article2,
  articleTitle,
  accordion,
  footer,
  iconButton,
  grow,
  grow2x
} from './style.js'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Content } from './components/Content'

function App() {
  return (
    <>
      <div style={appFrame}>
        <header style={header}>
          <p style={headerTitle}>Menu Drawer</p>
          <p style={headerSubTitle}>Case Study</p>
          <p style={headerSubTitle}>Transform an Accordion into a Menu Drawer</p>
        </header>
        <div style={grow} />
        <main style={main}>
          <article style={article}>
            <header style={articleTitle}>Nested Accordion</header>
            <div style={accordion}>
              <Accordion
                items={nestedItems}
                initialExpandedItems={[1]}
                inputItemsReducer={nestedItemsClosure(nestedItemOverrides)}
                layoutReducer={nestedLayoutReducer}
                expansionReducer={singlePeerExpandedReducer}
              />
            </div>
          </article>
          <article style={article2}>
            <Router>
              <header style={articleTitle}>Menu Drawer</header>
              <main style={{display: 'flex', flexDirection: 'row', overflow: 'hidden', width: '100%'}}>
                <div style={drawer}>
                  <Accordion
                    items={drawerItems}
                    initialExpandedItems={[0, 1, 6]}
                    inputItemsReducer={nestedItemsClosure()}
                    layoutReducer={menuLayoutReducer}
                    expansionReducer={menuExpandedReducer}
                  />
                </div>
                <div style={{flex: 2, width: '100%', color: 'black', backgroundColor: 'white'}}>
                  <Switch>
                    <Route
                        exact
                        from="/"
                        render={(props) => (
                            <Content {...props} text="select a menu item" />
                        )}  
                    />  
                    <Route
                        from="/"
                        render={(props) => {
                            return <Content {...props} text={`route = ${props.location.pathname}`} />
                        }}  
                    />  
                  </Switch>
                </div>
              </main>
            </Router>
          </article>
        </main>
        <div style={grow2x} />
        <footer style={footer}>
          <span>Incremental Industries &copy; 2020</span>
          <span style={{ flex: 1 }}></span>
          <a
            style={iconButton}
            href="https://zenglenn42.github.io/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="portfolio"
          >
            <PortfolioIcon />
          </a>
          <a
            style={iconButton}
            href="https://github.com/zenglenn42/menu-drawer/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <GithubIcon />
          </a>
        </footer>
      </div>
    </>
  )
}

export default App
