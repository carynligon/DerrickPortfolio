import React from 'react';

import data from '../data';
import Menu from '../components/menu';
import ProjectPreview from '../components/ProjectPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.state);
    return (
      <main>
        <Menu/>
        <ProjectPreview data={data[0]}/>
        <ProjectPreview data={data[1]}/>
        <ProjectPreview data={data[2]}/>
        <ProjectPreview data={data[3]}/>
      </main>
      );
  }
}

export default App;
