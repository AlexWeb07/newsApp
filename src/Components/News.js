import React, { Component } from 'react'
import NewsItem from './NewsItem'
import NewSpinner from './NewSpinner';


export class News extends Component {
  
 
  // creating state
  constructor(){
      super();

      // default img URL
      this.urlImage="https://www.cnet.com/a/img/resize/1a4377b67643f5ecdfc3e2bb51b1a6b5bad37c7c/hub/2023/10/31/156b2cf2-b0d0-47fb-bf08-60cd918cd034/apple-shot-on-iphone-apple-log.jpg?auto=webp&fit=crop&height=675&width=1200";

      

      console.log("hello i am a constructor for news component");
      this.state={
        articles:[],
        loading:true,
        page:1
      } 
  }
  // FETCHING API not using
  fetchApi= async (page)=>{
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.props.apiKey+"&category="+this.props.category+"&page="+page
    let data=await fetch(url);
    let parsedData=await data.json()
    return parsedData;
  }


  // fetching api
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.props.apiKey+"&category="+this.props.category+"&page=1&pageSize="+this.props.pageSize
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      total:parsedData.totalResults,
      articles:parsedData.articles,
      loading:false
    })
  }

  prevClick= async ()=>{
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.props.apiKey+"&category="+this.props.category+"&page="+(this.state.page-1)+"&pageSize="+this.props.pageSize
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
    })
  }
  nextClick=async ()=>{
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey="+this.props.apiKey+"&category="+this.props.category+"&page="+(this.state.page+1)+"&pageSize="+this.props.pageSize
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    })
  }

  // rendering News.js
  render() {
    // let {pageSize,category}=this.props
    return (
      <div className='container' style={{marginTop:"20px"}}>
        <h2 className='d-flex justify-content-center'>News Monkey - Top Headlines</h2>
        <div className="row my-5 mx-6">
          {
            !this.state.loading?            
            (this.state.articles.map((e)=>{

              /* creating published date object and showing author name with it */
              this.dObj=new Date(e.publishedAt);
              this.detail="By "+(e.author?e.author:"Unknown")+" on "+this.dObj.toGMTString()


              return(
                <div className="col-md-4" key={e.url}>
                  <NewsItem title={e.title?e.title.slice(0,45):""} description={e.description?e.description.slice(0,88):""} imgUrl={e.urlToImage?e.urlToImage:this.urlImage} url={e.url} publisher={e.source.name} detail={this.detail}/>
                </div>
                )
              })):(
                <NewSpinner/>
              )
          }
        </div>
        <div className="container d-flex justify-content-between z-5">
          <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.total/this.props.pageSize<=this.state.page} className="btn btn-dark" onClick={this.nextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
