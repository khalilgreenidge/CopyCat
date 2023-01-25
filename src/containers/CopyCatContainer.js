import React from 'react';
import { CopyCat } from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.toggleTape = this.toggleTape.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape
    
    return (
      <CopyCat input={this.state.input} handleChange={this.handleChange} copying={copying} toggleTape={toggleTape}/>
    );
  };
}
