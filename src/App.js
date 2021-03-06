import React, { Component } from 'react';
import ChartContainer from './containers/ChartContainer'
import DashboardContainer from './containers/DashboardContainer'
import MainHeader from './components/MainHeader'
import { Grid, Header, Segment } from 'semantic-ui-react'
import HighCharts from './components/Chart'

class App extends Component {

  render() {
    return (
      <div>
        < MainHeader />
        <div className="mainBody">
        < Segment >
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              < DashboardContainer />
            </Grid.Column>
            <Grid.Column width={12}>
              < ChartContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
        </div>
      </div>
    );
  }
}

export default App;
