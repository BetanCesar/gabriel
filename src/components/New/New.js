import React from 'react';
import './New.css'

const New = (oneNew) => {

    return (
        <div className="news-list">
            <li>
                <div className="photo">
                    <img alt={oneNew.author} src={oneNew.urlToImage === undefined ? null : oneNew.urlToImage}/>
                </div>
                <div className="one-new">
                    <span className="author">{oneNew.source.name}</span>
                    <span className="description">{oneNew.title}</span>
                    <a target="_blank" href={oneNew.url}>Ver más</a>
                </div>
            </li>
        </div>
    );
};

export default New;