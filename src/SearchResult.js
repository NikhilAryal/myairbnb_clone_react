import React from 'react';
import './css/SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";


function SearchResult({  image, title, description, location, rating, price, total  }) {
    return (
        <div className="searchResult">
            <img src={ image } alt="" />
            <FavoriteBorderIcon className="searchResult__heart"/>

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p> { location } </p>
                    <h3> { title }  </h3>
                    <p> { description } </p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon classname="searchResult__rating" />
                        <p><strong> { rating }  </strong></p>
                    </div>

                    <div className="searchResult__price">
                        <h3> { price } </h3>
                        <p> { total } </p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default SearchResult;

// "npm i @material-ui" to setup material-UI in the project