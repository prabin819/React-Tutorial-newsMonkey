import React from 'react'

const NewsItem = (props) => {
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-1'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}<span className="z-3 position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span></h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'> By {!author?"unknown":author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem
