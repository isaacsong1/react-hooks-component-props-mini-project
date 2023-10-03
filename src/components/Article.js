import React from 'react'

const Article = (props) => {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ? (props.date) : ('Janurary 1, 1970')}</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article