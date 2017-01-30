fetch('https://www.googleapis.com/civicinfo/v2/representatives?address=215 W 7th St 90014&key=AIzaSyAB_cHrXX9pkEW4F-AjFDaucQRT7nUvcQg').then(response => response.json()).then(data => populate(data));

function populate(data) {
  console.log('hi');
  const containers = d3.select('.content').selectAll('p')
    .data(Object.keys(data.divisions))
    .enter().append('section')
    .attr('class', 'container');
  
  // append a new p containing the division name, then use .each to bind data
  // to a new list within each division.
  containers.append('div')
        .attr('class', 'division-name')
        .text(d => {
          return data.divisions[d].name;
        }).each(function(d) {
          const offices = d3.select(this.parentNode).selectAll('span')
            .data(data.divisions[d].officeIndices)
            .enter()
            .append('div')
            .attr('class', 'office')
            .text(d => data.offices[d].name)
          offices  
            .append('div')
            .attr('class', 'official-name')
            .text(d => data.officials[data.offices[d].officialIndices[0]].name);
    
          offices
            .append('div')
            .attr('class', 'official-party')
            .text(d => data.officials[data.offices[d].officialIndices[0]].party);
    
          offices
            .append('img')
            .attr('class', 'official-photo')
            .attr('src', d => data.officials[data.offices[d].officialIndices[0]].photoUrl)
    });
}