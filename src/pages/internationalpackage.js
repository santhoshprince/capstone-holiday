// src/pages/InternationalPackages.js
import React from 'react';
import "../pages/internationationalpack.css"

const InternationalPackages = () => {
    // Sample data for international packages (replace with your data fetching logic)
    const packages = [
        {
            id: 1,
            title: 'Dubai Adventure',
            description: 'Experience the thrill of Dubai with our exclusive package.',
            image: 'path/to/image1.jpg', // replace with your actual image path
        },
        {
            id: 2,
            title: 'Maldives Escape',
            description: 'Enjoy a relaxing getaway in the Maldives.',
            image: 'path/to/image2.jpg', // replace with your actual image path
        },
        // Add more packages as needed
    ];

    return (
        <div className="international-packages">
            <h2>International Packages</h2>
            <div className="row">
                {packages.map((pkg) => (
                    <div className="col-md-6 col-lg-4" key={pkg.id}>
                        <div className="card">
                            <img src={pkg.image} alt={pkg.title} />
                            <div className="card-body">
                                <h5 className="card-title">{pkg.title}</h5>
                                <p className="card-text">{pkg.description}</p>
                                <a href={`/packages/${pkg.id}`} className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InternationalPackages;
