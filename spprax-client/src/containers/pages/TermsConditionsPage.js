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
                  and has the ability to pull any material at any point in
                  time if any licensing terms are, or are perceived to be broken
                  (and further discussions to rectify the situation
                  will proceed after material is pulled).
                  <br /><br />
                  Spprax Media also reserves the right to use and modify all
                  material created by and provided to Spprax Media for each project
                  for the additional purposes of advertising and portfolio activities for
                  Spprax Media as an organisation.
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
                  <b>3. Refunds Policy</b>
                  <br />
                  Unless otherwise agreed upon, no work shall by carried out by
                  Spprax Media Limited and partners before some form of invoice is signed and paid.

                  <br /><br />
                  Deposits requested for confirming and booking dates are non-refundable,
                  and any alternative terms or refunds made are considered
                  as an act of goodwill, and not a contractual obligation.
                  <br /><br />
                  In the unlikely event that Spprax Media Limited or employees is unable
                  to deliver on previously agreed upon delivery objectives that
                  is outside of Spprax Media's control, Spprax Media
                  will not be liable to refund any costs already incurred by the project.
                </p>

                <p>
                  <b>3. Contractor's Copyright</b>
                  <br />
                  Contractors agree that Spprax Media Limited owns full copyright and ability to
                  licence any work indefinitely for any contracted work to Spprax Media and for Spprax Media's clients.
                  <br /><br />
                  This agreement commences when a subcontracted party is first made aware of subcontracting work,
                  and covers all material provided by subcontractor to Spprax Media Limited
                  that fits any description of the subcontracted work brief.
                </p>

                <p>
                  <b>4. Other Terms</b>
                  <br />
                  All terms are listed in conjunction with terms prepared and specified in each quotation and invoice sent per project basis.
                  <br /><br />
                  Unless otherwise stated on the invoice, the normal delivery timeframe for end photography products is 14 days. For video production, this can be up to a month.
                </p>
              </div>
            </div>

            <Footer />
          </div>
        );
    }

}

export default TermsConditionsPage;
