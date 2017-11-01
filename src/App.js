import React, { Component } from 'react';
import ChartContainer from './containers/ChartContainer'
import DashboardContainer from './containers/DashboardContainer'
import Nav from './components/Nav'
import { Grid } from 'semantic-ui-react'

class App extends Component {


  render() {
    return (
      <div>
        < Nav />
        <div className="mainBody">
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              < DashboardContainer />
            </Grid.Column>
            <Grid.Column width={10}>
              < ChartContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
