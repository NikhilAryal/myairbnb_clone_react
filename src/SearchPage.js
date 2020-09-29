import React from 'react';
import './css/SearchPage.css';
import SearchResult from './SearchResult.js';

import { Button } from "@material-ui/core";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 Aug to 30 Aug
                    • 2 guests
                </p>
                <h2> Stays Nearby </h2>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and Beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>

            <SearchResult
                image="https://a0.muscache.com/im/pictures/771e0199-bd96-46e9-aa97-f3367824aa7c.jpg?im_w=720"
                location="Private stay in London"
                title="Stays!!"
                description="1 guest • 1 dining • 1 hall • 2 bathrooms • An amazing balcony"
                rating={4.44}
                price="£ 55 / night"
                total="£ 120 total"
            />

            <SearchResult
                image="https://a0.muscache.com/im/pictures/cb2999ab-904d-4e9b-8f2a-faeb16cc455b.jpg?im_w=720"
                location="Private stay in South Coast"
                title="Stays!!"
                description="1 guest • 1 dining • 1 hall • 2 bathrooms • An amazing balcony"
                rating={4.88}
                price="£ 60 / night"
                total="£ 100 total"
            />

            <SearchResult
                image="https://a0.muscache.com/im/pictures/6fb8a0ee-253b-4d87-9806-5a5fb0cc603b.jpg?im_w=720"
                location="Private stay in Manchester"
                title="Stays!!"
                description="1 guest • 1 dining • 1 hall • 2 bathrooms • An amazing balcony"
                rating={4.90}
                price="£ 75 / night"
                total="£ 150 total"
            />



        </div>
    );
}

export default SearchPage;