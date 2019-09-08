import React, { Fragment } from 'react';

var legalSize = {
  fontSize: '10px'
}

const Legal = () => (
  <Fragment>
    <p style={legalSize}>
      Portions of this site are unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. 
      The literal and graphical information presented on this site about Magic: The Gathering, including card images, the mana symbols, and Oracle text, is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc. 
      This site is not produced by, endorsed by, supported by, or affiliated with Wizards of the Coast. 
    </p>
  </Fragment>
);

export default Legal
