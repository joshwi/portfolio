// React imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import PropTypes from "prop-types"
// Pages
import Home from "./pages/home"
import Career from "./pages/career"
import Photography from "./pages/photography"
import AboutMe from "./pages/about"
// Components
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
// Actions to interact with redux state
import * as actions from "./store/actions"
// Static data ---- import sample from "./pages/sample.json" -> console.log(sample.table)

const tabs =  [
  { header: "Career", key: "career", icon: "bi-briefcase", link: `/career` },
  { header: "Photography", key: "photography", icon: "bi-camera", link: `/photography` },
  { header: "About Me", key: "aboutme", icon: "bi-file-person", link: `/aboutme` },
  // { header: "About Me", key: "aboutme", icon: "bi-file-person", link: `/test` },
]

function App(props) {

  // useEffect(() => { props.actions.loadPhotos(); }, [props.actions])
  // useEffect(() => { console.log(props.db) }, [props])

  return (
    <Router>
      <Navbar tabs={tabs} />
      <Sidebar tabs={tabs} />
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home {...props} />} />
          <Route path="/career" exact render={() => <Career {...props} />} />
          <Route path="/photography" exact render={() => <Photography {...props} />} />
          <Route path="/aboutme" exact render={() => <AboutMe {...props} />} />
        </Switch>
      </main>
    </Router>
  );
}

App.propTypes = {
  pages: PropTypes.object.isRequired,
  db: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    pages: state.pages,
    db: state.db
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)