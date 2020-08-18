import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// Resources
import splashVideo from '../../resources/splash_video.mp4';
import logoShowreel from '../../resources/logo_showreel.png';
import portrait from '../../resources/portrait_sml.JPG';

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
        <Navigation noLogo={true} />

        <div id='splash-video' className='section'>
          <div id='splash-pattern-fill'></div>
          <video id='video-reel' muted loop autoPlay playsInline>
            <source src={splashVideo} type='video/mp4' />
          </video>

          <div id='splash-title'>
            <img data-aos='fade-in' id='logo-showreel' src={logoShowreel} width='400' alt='logo' />
            <h3 data-aos='fade-up'><span>PHOTOGRAPHY • VIDEO</span> <span>PRODUCTION • LIVE</span></h3>
          </div>

          <a className='btn' id='btn-enquire' href='#contact'>ENQUIRE NOW</a>
        </div>

        <div id='mission' className='section'>
          <div className='content'>
            <h2>Our Mission</h2>
            <p>

              {/* <div id='photo-container'>
                <img id='director-photo' src={portrait} />
                <h6><span>-</span><b>Raymond Feng</b><br />Managing Director</h6>
              </div> */}
              We are a media production studio servicing both corporate and consumer clients through picture, film and live mediums.
              We help highlight the best of amazing events and stories through our experience, our passion, and our promise to deliver.
              <br /><br />
              Our goal is to offer our clients the highest quality of photo, video production and livestreaming services possible given any budget.
              We are dedicated in translating your passion into compelling photo and video content that delivers results.
            </p>

          </div>
        </div>

        <Clients />

        <div id='sb-1' className='section-break'>
          <div className='content'>
            <h2>Main Service Areas</h2>
            <p>
              We service a large selection of media productions, ranging from corporate profiles
              to wedding narratives working across a broad range of budgets.
              Hover on each category type below to view our past work and
              experience in each area, or keep scrolling to find out more information about our services.

              <br /><br />
              Just note that even if we don't list an exact match of what you're looking for, flick
              us a quick message using the contact form. We are always looking for
              new, exciting projects and changing up the game.
            </p>
          </div>


          <ul className='image-break'>
            <li onClick={(e) => {window.location.href = './work/profile'}}>
              <a className='anchor' name='work'></a>
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
            <h2>Our Production Workflow</h2>

            <p>
              Unlike many other agencies or media content creators, we take a holistic
              approach to showcasing your passion or brand.
              Instead of specializing in any type of content, we have a solid network of people
              that work across media disciplines. At the end, we can then bring things together for one cohesive picture.
              <br /><br />
              This means if you are just interested in some awesome photography for your brand, we can help.
              Or if you're looking for full coverage from photos, video production and a professional
              multi-camera livestream for your next big corporate event, we can help too!
              <br /><br />
              At the end of the day, we care about telling your story in the medium most suited for it.
              No two projects we've worked on in the past have been the same and we always keep this in mind moving forward. <i>All our packages</i> include
              planning and consultation periods to make sure you're comfortable with the project's scope, and we're all on the same page on deliverables.
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
              At the heart of any content is having good visual features to accompany the story.
              Stand out above phone snaps to showcase who you are and what you do,
              without having to compromise on quality.
              <br /><br />
              Photos, just like many other perishable goods diminish in quality over time.
              Being constantly up to date and refreshing your website covers (just like your desktop wallpaper!)
              is super important in staying relevant and appearing fresh. We can help preserve them for longer.
              <br /><br />
              We deliver on events, commercial profiles,
              portraiture, weddings among many, many other photographic artforms.
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
              Sometimes, photos themselves might not be enough to tell your story.
              With experience in a wide array of shooting styles –
              from documenting the ongoings of every event,
              to highlighting the most magical moments in an intimate wedding setting.
              Establish the mood and immerse your audience with story through cinematic level production.
              <br /><br />
              Through our framing and film skillset, we have seen our surpass
              generic phone videos (with the same idea content), by over 150%.
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
              COVID-19 did and continues to pose a real threat to live events and audience engagement.
              Livestreaming straight to the web is a growing technology that greatly overcomes this barrier,
              and Spprax Media can help you take the first real step in running events that are
              broadcasted live to your audience, even overseas.
              <br /><br />
              Work with us to get your AGM's delivered to your remote members, your wedding to
              overseas guests and product launches to reach a larger audience.
              Get live engagement analytics and even recordings of your event to share them even further.
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
              Regardless of what your budget is though, we probably can still help put some options on the table for you.
              We have serviced a wide range of client needs in the past, ranging from not-for-profit and small scale projects, to larger productions with large crew sizes as well.
            </p>
          </div>
        </div>

        <div id='budget' className='section'>
          <div data-aos='fade-up' className='ind-budget'>
            <h2>Modest & NFP</h2>

            <h4>from $750</h4>

            <p>
              Suitable for very simple projects, or budget-tight NFP organisations. Final products are usually shorter, engaging and to the point.
              They will get to the core of your message or event and showcase what you do in a succint fashion.
            </p>
          </div>

          <div className='ind-budget'>
            <div data-aos='fade-down'>
              <h2>Mainstream</h2>

              <h4>$2000 – $5000</h4>
              <p>
                Our most common option, and gives us a bit more time to plan out an awesome narrative around your passion and story.
                You’ll get creative, memorable product(s) that engages your audience and builds vital emotional connections.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className='ind-budget'>
            <h2>Production Gold</h2>

            <h4>$5000+</h4>

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
