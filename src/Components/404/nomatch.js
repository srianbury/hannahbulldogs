import React from "react";

// https://fhsteinbart.com/wp/wp-content/uploads/2017/05/Star-Wars-A-New-Hope-Obi-Wan-Kenobi.jpg

const NoMatch = () => (
<div className='container'>
  <div className="d-flex justify-content-center height-100">
    <div className="d-flex flex-wrap align-content-center">
      <div>
        <div>
          <h2 className='mb-0'>404</h2>
        </div>
        <div>
            <img 
                className='img img-fluid'
                src='https://fhsteinbart.com/wp/wp-content/uploads/2017/05/Star-Wars-A-New-Hope-Obi-Wan-Kenobi.jpg'
                alt='404' />
        </div>
        <div>
          This is not the page you're looking for.
        </div>
      </div>
    </div>
  </div>
</div>
);

export default NoMatch;
