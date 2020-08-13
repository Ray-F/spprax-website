import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// Resources
import splashVideo from '../../resources/splash.png';
import logoShowreel from '../../resources/logo_showreel.png';
import serviceCampaign from '../../resources/services/campaign.JPG';
import serviceProfile from '../../resources/services/profile.JPG';
import serviceEvent from '../../resources/services/event.JPG';
import serviceOther from '../../resources/services/other.JPG';
import serviceWedding from '../../resources/services/wedding.JPG';

import photoCam from '../../resources/photo_cam.png';
import videoCam from '../../resources/video_cam.png';
import liveCam from '../../resources/live_cam.png';
import pipeline from '../../resources/pipeline_logos.png';

// Other Components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import Clients from '../../components/Clients';


class HomePage extends Component {
  render() {
    return (

      <div className='container' id='page-home'>
        <Navigation />

        <div id='splash-video' className='section'>
          <div id='splash-pattern-fill'></div>
          <img id='video-reel' src={splashVideo} alt='video' />

          <div id='splash-title'>
            <img data-aos='fade-in' id='logo-showreel' src={logoShowreel} width='400' alt='logo' />
            <h3 data-aos='fade-up'>PHOTOGRAPHY • VIDEO PRODUCTION • LIVE</h3>
          </div>

          <a className='btn' id='btn-enquire' href='#contact'>ENQUIRE NOW</a>
        </div>

        <div id='mission' className='section'>
          <div className='content'>
            <h2>One Mission</h2>
            <p>
              We are a boutique content creation firm servicing corporate and consumer clients through both picture and film mediums.
              We help highlight the best of amazing events and stories through our experience, our passion, and our promise to deliver.
              <br /><br />
              Our goal is to offer our clients the highest quality of photo, video production and live services possible given any budget.
              We are dedicated in translating your passion into compelling photo and video content that delivers results.
              <br /><br />
              <span>–</span>
            </p>
          </div>
        </div>

        <Clients />

        <div id='sb-1' className='section-break'>
          <a className='anchor' name='work'></a>
          <div className='content'>
            <h2>Main Service Areas</h2>
            <p>
              We service a large selection of media productions, ranging from corporate profiles to wedding narratives across a broad range of budget options. Hover on each category type below to view our past work and experience in each area, or keep scrolling to find out more information about our services.
            </p>
          </div>

          <ul className='image-break'>
            <li onClick={(e) => {window.location.href = './work/profile'}}>
              <Link>
                <img src={serviceProfile} alt='profile-service' />
                <h4>Profile</h4>
              </Link>
            </li>
            <li onClick={(e) => {window.location.href = './work/event'}}>
              <Link>
                <img src={serviceEvent} alt='corporate-service' />
                <h4><br />Event</h4>
              </Link>
            </li>
            <li onClick={(e) => {window.location.href = './work/campaign'}}>
              <Link>
                <img src={serviceCampaign} />
                <h4><br />Campaign</h4>
              </Link>
            </li>
            <li onClick={(e) => {window.location.href = './work/wedding'}}>
              <Link>
                <img src={serviceWedding} />
                <h4><br />Wedding</h4>
              </Link>
            </li>
            <li onClick={(e) => {window.location.href = './work/wedding'}}>
              <Link>
                <img src={serviceOther}/>
                <h4>Other</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div id='pipeline' className='section'>
          <div className='content'>
            <h2>Our Production Process</h2>

            <p>
              Unlike many other agencies or media content creators, we take a holistic approach to showcasing your passion or brand.
              Instead of specializing in a type of content, we can cover any media aspect of most production categories that are listed above, and other more niche applications as well.
              <br /><br />
              This means if you're just interested in some awesome photography for your brand, we can do that.
              Or if you're looking for full coverage from photos, video production and a professional multi-camera livestream for your event, we can do that too!
              <br /><br />
              At the end of the day, we care about telling your story in the medium most suited for it.
              No two projects we've worked on in the past have been the same and we always keep this in mind moving forward. <b>All our packages</b> include
              a specialized planning and consultation session to make sure you're comfortable with the project's scope, and we're all on the same page on deliverables.
            </p>

            <img id='pipeline-img' src={pipeline} />
          </div>
        </div>

        <div id='portfolio-cut' className='section'>
          <p>
            <a href='/#work'>View our Past Work ></a>
          </p>
        </div>

        <div id='photo' className='section service-forms'>
          <a className='anchor' name='photography'></a>

          <img data-aos='fade-left' id='photo-bg' src={photoCam} />

          <div className='content'>
            <h2 data-aos='fade-right'>Specialized Photography</h2>
            <p data-aos='fade-right'>
              At the heart of any content is having good visual features to accompany the story. Stand out above phone snaps to showcase who you are and what you do, without having to compromise on quality.
              <br /><br />
              We deliver on events, commercial profiles, portraiture, weddings among many, many other photographic artforms.
            </p>

            <br />
            <a data-aos='fade-right' className='btn' href='#contact'>Get a quote</a>
          </div>


        </div>

        <div id='video' className='section service-forms'>
          <a className='anchor' name='video'></a>

          <img data-aos='fade-right' id='video-bg' src={videoCam} />


          <div className='content'>
            <h2 data-aos='fade-left'>Video Production</h2>
            <p data-aos='fade-left'>
              With experience in a wide array of shooting styles – from documenting the ongoings of every event, to highlighting the most magical moments in an intimate wedding setting. Establish the mood and immerse your audience with story through cinematic level production.
              <br /><br />
              We deliver on event documentary, information campaigns, internal video memos and corporate interview setups.
            </p>
            <br /><br />
            <a data-aos='fade-left' className='btn' href='#contact'>Get a quote</a>
          </div>
        </div>

        <div id='live' className='section service-forms'>
          <img data-aos='fade-left' id='live-bg' src={liveCam} />

          <div className='content'>
            <a className='anchor' name='live'></a>
            <h2 data-aos='fade-right'>LIVE<span style={{color: "#D23535"}}>!</span> Content</h2>
            <p data-aos='fade-right'>
              COVID-19 did and continues to pose a real threat to live events and audience engagement. Livestreaming straight to the web is a growing technology that greatly overcomes this barrier, and Spprax Media can help you take the first real step in running events that are broadcasted live to your audience, even overseas.
              <br /><br />
              Enquire now to learn how you can utilize this growing opportunity.
            </p>
            <br />
            <a data-aos='fade-right' className='btn' href='#contact'>Enquire now</a>
          </div>
        </div>

        <div id='portfolio-cut-2' className='section'>
          <p>
            <a href='/#work'>View our Past Work ></a>
          </p>
        </div>

        <div className='section'>
          <div className='content'>
            <h2>Our Pricing</h2>
            <p>
              We love to be transparent and upfront about our pricing structure, however, most times we need to know some project details in order to provide you with a quote.
              It helps if you have a budget in mind as a starting point to work around, but a lot can influence the final cost and quality.
              <br /><br />
              Regardless of what your budget is though, we probably will still be able to help put some options on the table for you. Below are some broad figures to give you an idea and when you're ready, we can chat.
              <br /><br />
              <i>(NOTE: Does not apply for weddings. For wedding-specific pricing, check out the weddings page <a className='link-highlight' href='work/wedding'>here</a>)</i>
            </p>
          </div>
        </div>

        <div id='budget' className='section'>
          <div data-aos='fade-up' className='ind-budget'>
            <h2>Modest & NFP</h2>

            <h4>Up to $3000</h4>

            <p>
              Suitable for simple projects, or budget-tight NFP organisations. Final products are usually shorter, engaging and to the point.
              They will get to the core of your message or event and showcase what you do in a succint fashion.
            </p>
          </div>

          <div className='ind-budget'>
            <div data-aos='fade-down'>
              <h2>Mainstream</h2>

              <h4>$3000 – $6000</h4>
              <p>
                Our most common option, and gives us a bit more time to plan out an awesome narrative around your passion and story.
                You’ll get creative, memorable product(s) that engages your audience and builds vital emotional connections.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className='ind-budget'>
            <h2>Production Gold</h2>

            <h4>$6000+ and over</h4>

            <p>
              For the adventurous and those who need an idea that's truly new and exciting.
              Products in this category will lift the quality of your passion or brand to really stand out above others.
            </p>
          </div>
        </div>

        <ContactForm />

        <Footer />
      </div>
    );
  }

}

export default HomePage;
