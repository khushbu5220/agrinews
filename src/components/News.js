import React from "react";
import "./css/style.css";
import logo from "./images/logo.png";



export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    news: null
  };

  async componentDidMount() {
    const url = "https://newsapi.org/v2/everything?q=Agriculture&from=2021-04-01&sortBy=popularity&apiKey=4dd2d4730f234457af812e76b0192c54";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ news: data.articles, loading: false });
 
  }



  render() {
    
    
    

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.news) {
      return (<div>didn't get a news</div>);
    }

      




    return (
      <div className="newsData">
          <img className="logo" src={logo} alt="" />
        <h1 className="heading">AGRINEWS</h1>


         <div className="box" id="box">
          <div className="name">#{this.state.news[0].source.name}</div>
          <img className="image" src={this.state.news[0].urlToImage} alt=""/>
          <div className="title">{this.state.news[0].title}</div>
        <div className="author">-{this.state.news[0].author}</div><br></br>
        <div className="desc">{this.state.news[0].description}</div>
        <div className="url"><a href={this.state.news[0].url}>{this.state.news[0].url}</a></div>
        <div className="publish">{this.state.news[0].publishedAt}</div>
       </div>






    </div>

    );




  }
}