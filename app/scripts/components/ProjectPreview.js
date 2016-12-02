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
    let background;
    if (this.props.data.images[0]) {
      background = {
        backgroundImage: `url(${this.props.data.images[0]})`
      };
    }
    console.log(this.props.data.images);
    return (
      <section className="project-preview">
        <div className="preview-image" style={background} onClick={this.goToProject.bind(this)}>
        </div>
        <h3 onClick={this.goToProject.bind(this)}>{this.props.data.name}</h3>
        <h5>{this.props.data.labels.map((label) => label + ' ')}</h5>
      </section>
      );
  }
}

export default ProjectPreview;
