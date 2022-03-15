console.log(cityGrowths)

// Sort the cities in descending order of population growth.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Select only the top five cities in terms of growth.
var topFiveCities = sortedCities.slice(0,5);

// Create separate arrays for the city names and their population growths.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Create a bar chart.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// skill drill
var sortedCitiesByPop = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

var topSevenCitiesByPop = sortedCitiesByPop.slice(0,7);
console.log(topSevenCitiesByPop);

var topSevenCityNames = topSevenCitiesByPop.map(city => city.City);
var topSevenCityPops = topSevenCitiesByPop.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPops,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Cities with the Highest Populations",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot2", data, layout)
