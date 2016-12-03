import React from 'react';

import data from '../data';
import Menu from '../components/menu';
import ProjectPreview from '../components/ProjectPreview';
import Footer from '../components/Footer';
import BackToTop from '../components/backToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Menu/>
        <div className="preview-wrapper">
          <ProjectPreview data={data[0]}/>
          <ProjectPreview data={data[1]}/>
          <ProjectPreview data={data[2]}/>
          <ProjectPreview data={data[3]}/>
        </div>
        <Footer/>
      </main>
      );
  }
}

export default App;
