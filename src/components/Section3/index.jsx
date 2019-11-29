import React from "react";

var style = {
    width : "100px",
    height : "100px"
}
/*
bottom: 305.1990051269531
height: 26.4580078125
left: 515.3519897460938
right: 543.3519897460938
top: 278.7409973144531
width: 28
x: 515.3519897460938
y: 278.7409973144531



*/
const CountryInfo = ({ info, cardPosition }) => (
    <div style={ {left: (cardPosition.left + 50) + "px" , top: cardPosition.top + "px"} } className="card">
        <ul>
            <li>Country : {info.name}</li>
            <li>Capital : {info.capital}</li>
            <li>Region : {info.region}</li>
            <li>Population : {info.population}</li>
            <img src={info.flag} style={style}/>
        </ul>
    </div>)




export default CountryInfo;