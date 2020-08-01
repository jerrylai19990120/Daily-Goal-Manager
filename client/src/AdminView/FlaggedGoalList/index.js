import React from 'react';

import Listings from "../../GoalListView/Listings";

import "./styles.css";

class FlaggedGoalList extends React.Component {
  render() {
    const { flaggedGoals , adminComponent } = this.props;

    return (
      <Listings
        goals={flaggedGoals}
        adminComponent={this}
      />
    );
  }
}

export default FlaggedGoalList;
