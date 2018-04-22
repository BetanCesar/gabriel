import React from 'react';
import './New.css'

const New = (oneNew) => {

    let date = new Date(oneNew.publishedAt);
    let options = {month: 'long'};
    let fecha = date.toLocaleDateString() + " - " + date.getHours() + ":" + date.getMinutes();

    return (
        <div className="news-list">
            <li>
                <div className="photo">
                    <img alt={oneNew.author} src={oneNew.urlToImage === undefined ? null : oneNew.urlToImage}/>
                </div>
                <div className="one-new">
                    <span className="author">{oneNew.source.name}</span>
                    <span className="description">{oneNew.title}</span>
                    <h6 className="dashhead-subtitle">{fecha}</h6>
                    <a target="_blank" href={oneNew.url}>Ver más</a>
                </div>
            </li>
        </div>
    );
};

export default New;