import React from 'react';
import { browserHistory } from 'react-router';
import _ from 'underscore';

import data from '../data';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: data[this.props.params.projectId - 1]}
  }
  goHome() {
    browserHistory.push('/');
  }
  render() {
    return (
      <main className="project-page">
        <h2>{this.state.project.name}</h2>
        <h3>{this.state.project.labels.map((label) => label + ' ')}</h3>
        <div className="project-image" style={{backgroundImage:`url(${this.state.project.images[0]})`}}>
        </div>
        <p>{this.state.project.firstDescription}</p>
        <div className="project-image" style={{backgroundImage:`url(${this.state.project.images[1]})`}}>
        </div>
        <p>{this.state.project.secondDescription}</p>
        <div className="project-image" style={{backgroundImage:`url(${this.state.project.images[2]})`}}>
        </div>
        <button className="back-all-work" onClick={this.goHome.bind(this)}>Back to all work</button>
      </main>
    )
  }
}

export default ProjectView;
