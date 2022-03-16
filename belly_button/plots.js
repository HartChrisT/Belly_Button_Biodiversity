d3.json("samples.json").then(function(data){
    console.log(data);
});


// Using Object.entries with forEach to print key values from the first element in the array
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});
