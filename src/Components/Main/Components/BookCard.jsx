import bookCover from "../../../images/cover-1984.jpg";

const cardInlineStyle = {
    width: `18rem`
}

function BookCard() {
    return(
        <div class="card my-3 mx-auto" style={cardInlineStyle}>
        <img src={bookCover} class="card-img-top" alt="..." />
        <div class="card-body">
            <h3 class="card-title">1984</h3>
            <h5 class="card-text">George Orwell</h5>
            <p class="card-text">Главный герой, Уинстон Смит, живет в тоталитарном обществе Океании, где Правительство контролирует каждую деталь жизни. Он начинает сомневаться в системе и ищет способы сопротивления, но сталкивается с жестокими последствиями.</p>
            <h6 className="text-secondary text-end">350 страниц</h6>
        </div>
        </div>
    );
    
}

export default BookCard;