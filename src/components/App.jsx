import React, { PropTypes } from 'react'
import Division from './Division';
class App extends React.Component {
  render() {
    let input;
    const content = Object.keys(this.props.reps).length ?
      Object.keys(this.props.reps.divisions).map((division) => {
        return <Division data={this.props.reps} division={division} />
      }) : this.props.isPending ?
        <div>Loading...</div>
        : <div>Enter an address above to get elected official info!</div>

    return (

      <div className='input-form'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.fetchReps(input.value);
            input.value = '';
          }
          }
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">
            Search
          </button>
        </form>
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default App;


// function populate(data) {
//   console.log('hi');
//   const containers = d3.select('.content').selectAll('p')
//     .data(Object.keys(data.divisions))
//     .enter().append('section')
//     .attr('class', 'container');
//
//   // append a new p containing the division name, then use .each to bind data
//   // to a new list within each division.
//   containers.append('div')
//         .attr('class', 'division-name')
//         .text(d => {
//           return data.divisions[d].name;
//         }).each(function(d) {
//           const offices = d3.select(this.parentNode).selectAll('span')
//             .data(data.divisions[d].officeIndices)
//             .enter()
//             .append('div')
//             .attr('class', 'office')
//             .text(d => data.offices[d].name)
//           offices
//             .append('div')
//             .attr('class', 'official-name')
//             .text(d => data.officials[data.offices[d].officialIndices[0]].name);
//
//           offices
//             .append('div')
//             .attr('class', 'official-party')
//             .text(d => data.officials[data.offices[d].officialIndices[0]].party);
//
//           offices
//             .append('img')
//             .attr('class', 'official-photo')
//             .attr('src', d => data.officials[data.offices[d].officialIndices[0]].photoUrl)
//     });
// }
