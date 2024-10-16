import React from "react";
import "./TourDetails.css"; // Import your CSS styles

const TourDetails = ({
  title1,
  description1,
  tourCode,
  duration,
  priceIncludes,
  hotelDetails,
  allInclusion,
  complimentaryguestservices,
  PackageInclusion,
  Priceexclusions,
  hotelDetailsv2,
  sightseeingDetails,
  note,
  tours,
  shiphighlights,
}) => {
  return (
    <div className="tour-details">
      <h1>{title1}</h1>
      <p>{description1}</p>

      <div className="tour-info">
        {tourCode ? <h4>Tour Code: {tourCode}</h4> : null}
        {duration ? <h4>Tour Duration: {duration}</h4> : null}
      </div>
      {hotelDetails && hotelDetails.length > 0 &&(<div className="tour-hotels">
        <h3>Hotels</h3>
        <ul>
          {hotelDetails?.map((hotel, index) => (
            <li key={index}>{hotel}</li>
          ))}
        </ul>
      </div>)}
      {shiphighlights && shiphighlights.length > 0 && (
        <div className="tour-includes">
          <h3>Ship  Highlights</h3>
          <ul>
            {shiphighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {priceIncludes && priceIncludes.length > 0 && (
        <div className="tour-includes">
          <h3>Price Inclusions</h3>
          <ul>
            {priceIncludes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {Priceexclusions && Priceexclusions.length > 0 && (
        <div className="tour-includes">
          <h3>Price Exclusions</h3>
          <ul>
            {Priceexclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {tours && tours.length > 0 &&(<div className="tour-hotels">
        <h3>Tours</h3>
        <ul>
          {tours?.map((hotel, index) => (
            <li key={index}>{hotel}</li>
          ))}
        </ul>
      </div>)}
       {note && note.length > 0 && (
        <div className="tour-includes">
          <h3>Note</h3>
          <ul>
            {note.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {PackageInclusion && PackageInclusion.length > 0 && (
        <div className="tour-includes">
          <h3>Package Inclusion</h3>
          <ul>
            {PackageInclusion.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {allInclusion ? (
        <div className="tour-includes">
          <h3>All Inclusion</h3>
          <ul>
            {allInclusion?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {complimentaryguestservices ? (
        <div className="tour-includes">
          <h3>Complimentary Guest Services</h3>
          <ul>
            {complimentaryguestservices?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {hotelDetailsv2 && hotelDetailsv2.length > 0 && (
        <div className="tour-hotels">
          <h3>Hotel Details</h3>
          <ul>
            {hotelDetailsv2?.map((hotel, index) => (
              <li key={index}>
                <strong>{hotel.name}</strong>
                {hotel.honeymoonFreebies && (
                  <ul>
                    {hotel.honeymoonFreebies.map((freebie, i) => (
                      <li key={i}>{freebie}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {sightseeingDetails && sightseeingDetails.length > 0 && (
        <div className="tour-hotels">
          <h3>Sightseeing Details</h3>
          <ul>
            {sightseeingDetails.map((sightseeing, index) => (
              <li key={index}>
                <strong>{sightseeing.name}</strong>: {sightseeing.description}
                {sightseeing.note && (
                  <p>
                    <em>Note: {sightseeing.note}</em>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TourDetails;
