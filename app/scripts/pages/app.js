import React from 'react';

import Menu from '../components/menu';
import ProjectPreview from '../components/ProjectPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Menu/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
      </main>
      );
  }
}

export default App;
