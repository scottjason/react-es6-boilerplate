import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import { getAll } from '../api';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      isRequesting: true,
    }
  }
  
  static defaultProps = {}
  
  componentDidMount() {
    getAll().then(res => {
      this.setState({ imageUrls: res.message, isRequesting: false })
    });
  }
 
  render() {
    if (this.state.isRequesting) { return null } 
    return(
      <Gallery
        isRequesting={this.state.isRequesting}
        imageUrls={this.state.imageUrls}
      />
    )
  }
}

export default GalleryContainer;