import React, { Component } from 'react'

export class NewSpinner extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center align-item-center'>
        <div className="spinner-grow text-secondary" style={{width: "6rem", height: "6rem"}} role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }
}

export default NewSpinner
