const cardInlineStyle = {
    width: `18rem`
}

const reviewsDB = {
        name: 'Polyna Osipova',
        mark: 8,
        review: '"1984" — мощный роман о том, как тоталитаризм разрушает индивидуальность. Оруэлл мастерски передает атмосферу страха и контроля. Чтение оставляет глубокий след и заставляет задуматься о ценности свободы.'
};


function BookReviews(){
    return(
        <div class="card mx-3" style={cardInlineStyle}>
        <div class="card-body">
            <h5 class="card-title">{reviewsDB.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{reviewsDB.mark}</h6>
            <p class="card-text">{reviewsDB.review}</p>
        </div>
        </div>
    );

};

export default BookReviews;