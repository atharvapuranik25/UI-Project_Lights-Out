import React from 'react';
import eventData from './events.json'

function Events() {
  return <div className="container my-3 mb-5 text-white text-center">
      <h2>Events</h2>
      <div className="row" data-masonry='{"percentPosition": true }'>
          {eventData.map((eventDetails, index) => {
              return <div className="col-md-4">
                   <div class="card bg-dark my-3" style={{height:"auto"}}>
              <img class="card-img-top" src={eventDetails.img} alt={eventDetails.title}/>
              <div class="card-body">
                  <h4 class="card-title">{eventDetails.title}</h4>
                  <p class="card-text"><small>{eventDetails.description}</small></p>
                  <h6>Dates: {eventDetails.dates}</h6>
              </div>
          </div>
          </div>
          })}
        
      </div>

  </div>;
}

export default Events;
