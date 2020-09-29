import React, {useState} from 'react';
import './css/Search.css';
import "react-date-range/dist/styles.css"               //main style file in the module
import "react-date-range/dist/theme/default.css"        //theme css file
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";

// INSTALL datepicker for search component "npm i react-date-range"
// IT additionally requires another module called date-fns. So, "npm i date-fns"


// Component to pick date for search functionality
function Search() {

    const history = useHistory();
    //state values for start and end dates
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"                                        // not sure what for, used in Date picker slider
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    return (
        <div className="search">
            <DateRangePicker ranges = { [selectionRange] }
                             onChange = { handleSelect }
            />
            <h2> Number of guests
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')} > Search Airbnb </Button>

        </div>
    );
}

export default Search;

// INSTALL datepicker for search component "npm i react-date-range"