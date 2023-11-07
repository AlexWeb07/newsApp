import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,url,publisher,detail}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...  <span className="badge rounded-pill bg-danger" style={{fontSize:"0.8rem"}}>{publisher}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="text text-secondary" style={{fontSize:"0.7rem"}}>{detail}</p>

            <a href={url} target="_blank" rel="noopener noreferrer" className='btn btn-sm btn-dark'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
