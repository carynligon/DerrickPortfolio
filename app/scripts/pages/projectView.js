import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import _ from 'underscore';
import Menu from '../components/menu';

import data from '../data';

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: data[this.props.params.projectId - 1]};
  }
  prevProject() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    console.log('running');
    if (Number(this.props.params.projectId) === 1) {
        browserHistory.push(`/project/${data.length}`);
    } else {
        browserHistory.push(`/project/${Number(this.props.params.projectId) - 1}`);
    }
  }
  nextProject() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    console.log('running');
    if (Number(this.props.params.projectId) === data.length) {
        browserHistory.push(`/project/1`);
    }
    else {
        browserHistory.push(`/project/${Number(this.props.params.projectId) + 1}`);
    }
  }
  goHome() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    browserHistory.push('/');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({project: data[nextProps.params.projectId - 1]});
  }
  render() {
    return (
      <main className="project-page">
        <Menu/>
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
        <div className="project-nav-btns">
            <button onClick={this.prevProject.bind(this)} className="prev-project-btn">previous</button>
            <button onClick={this.nextProject.bind(this)} className="next-project-btn">next</button>
        </div>
        <button onClick={this.goHome.bind(this)} className="back-all-work">Back to all work</button>
      </main>
    )
  }
}

export default ProjectView;
