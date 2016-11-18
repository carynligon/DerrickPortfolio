import React from 'react';
import { browserHistory } from 'react-router';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  goToProject() {
    browserHistory.push(`/project/${this.props.data.id}`)
  }
  render() {
    return (
      <section className="project-preview">
        <div className="preview-image" onClick={this.goToProject.bind(this)}>
        </div>
        <h3 onClick={this.goToProject.bind(this)}>{this.props.data.name}</h3>
        <h5>{this.props.data.labels.map((label) => label + ' ')}</h5>
      </section>
      );
  }
}

export default ProjectPreview;
