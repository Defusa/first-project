import BookCard from "./Components/BookCard";
import BookReviews from "./Components/BookReviews";


function Main() {
    return(
        <div className="container-fluid min-vh-100">
            <BookCard />
            <div className="container-fluid d-flex justify-content-center">
                <BookReviews />
                <BookReviews />
                <BookReviews />
                <BookReviews />
                <BookReviews />
            </div>
        </div>
    );
}

export default Main;