import React from 'react';
import './NewsList.css';
import New from "../New/New";

const NewsList = ({ news }) => {
    return(
        (news.articles === undefined || news.articles === null) ?
            <h1>No hay noticias disponibles...</h1>
        :
            <ul>
                {
                    news.articles.map((current, i) => (
                        <New key={i} {...current} />
                    ))

                }
            </ul>
    )
};


export default NewsList;