import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Editorial from './EditorialsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Background from './BackgroundComponent';
import Show from './ShowComponent';
import { data } from '../shared/source';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ShowwithId = ({ match }) => {
      const index = parseInt(match.params.articleId, 10);
      if (index == 1) {
        return (
          <Show
            prevdata={data[data.length - 1]}
            data={data[index - 1]}
            nextdata={data[index]}
          />
        );
      } else if (index == data.length) {
        return (
          <Show
            prevdata={data[data.length - 2]}
            data={data[index - 1]}
            nextdata={data[0]}
          />
        );
      } else {
        return (
          <Show
            prevdata={data[index - 2]}
            data={data[index - 1]}
            nextdata={data[index]}
          />
        );
      }
    };
    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route path='/home' exact component={() => <Home />} />
          <Route path='/editorials' exact component={() => <Editorial />} />
          <Route path='/home' component={() => <Home />} />
          <Route exact path='/experience/:articleId' component={ShowwithId} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
