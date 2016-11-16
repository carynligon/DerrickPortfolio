import React from 'react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="project-preview">
        <div className="preview-image">
        </div>
        <h3>Project Name Here</h3>
        <h5>labels about the type of project</h5>
      </section>
      );
  }
}

export default ProjectPreview;
