import React, { Component } from 'react';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

import termsConditionsSplash from '../../resources/terms-splash.JPG';

class TermsConditionsPage extends Component {

    render() {
        return (
          <div id='terms-conditions'>
            <Navigation />

            <div id='splash' className='section'>
              <img className='splash-photo' src={termsConditionsSplash} />

              <div className='splash-title'>
                <h1 data-aos='fade-right'>Terms and Conditions</h1>
              </div>
            </div>

            <div className='section'>
              <div id='terms' className='content'>
                <h3>The Details</h3>

                <p>
                  <b>1. Content Standard Licence</b>
                  <br />

                  Unless in a signed contract for copyright & licencing no
                  video/audio/photo/creative content is licensed for on
                  air(TV), radio or digital billboards.
                  Photography is only licensed for online, small print or PR,
                  no billboards or campaign media or campaign media print.
                  Current licences are for New Zealand media.

                  <br /><br />
                  For ads, large campaigns, large print, TVC or international media,
                  please contact us to discuss licensing and details.

                  <br /><br />
                  Spprax Media Limited owns full copyright outright,
                  no matter what terms or licences are agreed on,
                  and has the ability to pull any material at any point in time.
                  <br /><br />
                  Spprax Media also reserves the right to use and modify all
                  material created by and provided to Spprax Media for each project
                  for the additional purposes of advertising and portfolio activities for Spprax Media.
                </p>

                <p>
                  <b>2. RAW Imagery, Footage and Working Files</b>

                  <br />
                  Under no circumstances are Spprax Media Limited and employees
                  liable to hand over RAW material, imagery, footage,
                  working files and content.

                  Spprax Media Limited own all rights to this material and
                  have the right to withhold any files at will.
                  <br /><br />
                  Spprax Media Limited may hand over RAW files for special use cases,
                  there may be licensing agreements required and will required
                  acceptance from Spprax Media Limited prior to any work been taken out.
                </p>
                <p>
                  <b>3. Contractor's Copyright</b>
                  <br />
                  Contractors agree that Spprax Media Limited owns full copyright and ability to
                  licence any work indefinitely for any contracted work to Spprax Media and for Spprax Media's clients.
                </p>
              </div>
            </div>

            <Footer />
          </div>
        );
    }

}

export default TermsConditionsPage;
