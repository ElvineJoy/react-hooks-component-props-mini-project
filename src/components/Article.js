import React from 'react'

function Article({title, date="January 1, 1970", preview, minutes} ) {
    const cEmoji = '☕️';
    const bEmoji = '🍱'

    let emojis = "";
    if (minutes < 30){
        for (let i=0; i<minutes; i+=5) {
            emojis += cEmoji
        }
    } else {
        if (minutes >=30) {
            for(let i=0; i<minutes; i+=10) {
                emojis += bEmoji
            }
        }
    }
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}, {emojis} {minutes} min read </small>
        <p>{preview}</p>
    </article>
  );
}

export default Article