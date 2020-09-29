import React, {useState} from 'react';
import './css/Banner.css';
import { Button } from '@material-ui/core';
import Search from "./Search";
import { useHistory } from "react-router-dom";


function Banner() {

    const history = useHistory();
    // create state of buttons using hooks
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">

                {/*   write js for show/hide functionality   */}
                {  showSearch && < Search /> }

                <Button
                    onClick={() => setShowSearch(!showSearch) }
                    className="banner__searchButton"
                    variant="outlined">
                    { showSearch? 'Hide': 'Search Dates'}                     {/* Show & Hide in dates*/}
                </Button>
            </div>

            <div className="banner__info">
                <h2>Spread your wings</h2>
                <h6>Plan a trip somewhere around and explore yourself</h6>
                <Button onClick={() => history.push('/search')}
                        variant="outlined"> Explore around you </Button>
            </div>
        </div>
    );
}

export default Banner;

// useHistory is a hook that kinda saves your search files within the site, Here used to redirect to SearchPage