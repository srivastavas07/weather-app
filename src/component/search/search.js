// import { useState } from "react";
// import { AsyncPaginate } from "react-select-async-paginate";
// import { GEO_API_URL, geoApiOptions } from "../../api";

// const Search = ({onSearchChange}) => { // will pass the data obtained (onSearchChange) to the <search/>
    
//     const [search, setSearch] = useState(null)  //react use state hook search = variable of initial value setSearch function to change the value. and null the current value.

//     const loadOptions = (inputValue) => {

//         return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
//             .then(response => response.json())
//             .then(response => {
//                 return {  //this will load options for based on input..with respect to the follow values below called from the fetch method.
//                     options: response.data.map((city) => {
//                         return {
//                             value: `${city.latitude} ${city.longitude}`,
//                             label: `${city.name}, ${city.countryCode}`,   
//                         }
//                     })
//                 }
//             })
//             .catch(err => console.error(err));

//     };

//     const handleOnChange = (SearchData) => {
//         setSearch(SearchData);
//         onSearchChange(SearchData);

//     }

//     return (
//         <AsyncPaginate //its a inbuilt react search bar..
//             placeholder="Search for City.."
//             onchange={handleOnChange} //function to tackle everytime the data is typed.
//             debounceTimeout={600} //to wait for 600 ms before sending request to the api server.
//             value={search}
//             loadOptions={loadOptions} //will be used for the options based on the word input.. in will show options indonesia and india etc
//         />
//     );
// }
// export default Search;

import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;