import React, { Component } from 'react';
import axios from 'axios';
import './News.css';
import NewsList from "../NewsList/NewsList";


class News extends Component {

    constructor(props) {
        super(props);
        const newsapi = 'c805b8505d9a4fb2b5023a245464cc63';
        this.state = { apiKey: newsapi, news: ''};
        this.getNews()
    }

    getNews(){
        axios.get("https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey="+this.state.apiKey).then(res => {
            this.setState({news: res.data});
        });
    }

    render() {
        let date = new Date();
        console.log(date);
        let options = {month: 'long'};
        let fecha = date.getUTCDate() + " de " + date.toLocaleDateString('es-Mx', options) + " de " + date.getFullYear();
        return (
            <div id="news-container" className="col-sm-3">
                <div className="dashhead m-t-md">
                    <div className="dashhead-titles">
                        <h6 className="dashhead-subtitle">{fecha}</h6>
                        <h2 className="dashhead-title">Noticias</h2>
                    </div>
                </div>
                <NewsList news={this.state.news}/>
            </div>
        );
    }

}

export default News;
