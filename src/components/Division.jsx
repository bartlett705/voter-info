import React, { PropTypes } from 'react'

const Division = ({ data, division }) => {
  const officeIndices = data.divisions[division].officeIndices;
  return (
    <section className='container'>
      <h3 className='division-name'>{data.divisions[division].name}</h3>
      {officeIndices.map((officeIndex) => {
        const official = data.officials[data.offices[officeIndex].officialIndices[0]];
        const officialParty = official.party || 'Unknown';
        return (
          <div className="office">
            <div className="office-name">
              {data.offices[officeIndex].name}
            </div>
            <img alt={`${official.name}`} className="official-photo" src={official.photoUrl}/>
            <br/>
            <span className="official-name">
              {official.name}
            </span>
            <span className="official-party">
              {official.party}
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default Division;
