import React from 'react';
import _ from 'underscore';

import data from '../data';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: data[this.props.params.projectId - 1]}
  }
  render() {
    return (
      <main>
        <h2>{this.state.project.name}</h2>
      </main>
    )
  }
}

export default ProjectView;
