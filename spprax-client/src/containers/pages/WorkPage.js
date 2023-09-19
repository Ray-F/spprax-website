import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';
import VideoPlayer from '../../components/VideoPlayer.js';
import Scroll from '../../components/Scroll.js';

import profileSplash from '../../resources/services/profile-splash.JPG';
import eventSplash from '../../resources/services/event-splash.JPG';
import weddingSplash from '../../resources/services/wedding-splash.JPG';
import campaignSplash from '../../resources/services/campaign-splash.JPG';



class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      splashUrl: '',
      description: '',
      videos: []
    }

    // Check what sort of work happens here
    const queryParam = this.props.match.params.workType;

    let folderUrl;
    let videos;

    if (queryParam) {
      switch (queryParam.toLowerCase()) {
        case "profile":

          // Add RSM
          videos = [
            {
              id: "RSM Matariki",
              title: "RSM Matariki Series",
              client: "RSM New Zealand",
              tagline: `
                Matariki is the Māori name for a cluster of stars & signals the
                start of the Māori New Year. It is a time to celebrate new life,
                to remember those who’ve passed and to plan for the future.
              `,
              roleDesc:
                `This was a three-part series – "Matariki", "He Tāngata" and "The Future".
                These videos were the first marketing move by RSM New Zealand after the first
                COVID-19 lockdown in New Zealand.
                `,
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/434947056",
                  aspect: 1.96
                },
                {
                  url: "https://player.vimeo.com/video/437410970",
                  aspect: 1.96
                },

                {
                  url: "https://player.vimeo.com/video/439671766",
                  aspect: 1.96
                }
              ]
            },
            {
              id: "SP-0004",
              title: "Orchestral Performances",
              client: "St Kentigern College",
              tagline:
                `Series of profiles for St Kentigern College's orchestral ensembles. Some of these were entered for the 2020 KBB High School Competition.`,
              credits: ["Creative Director"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/462291416",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/462281956",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/462282524",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "SP-0001",
              title: "Ballerina Feature",
              client: "Talosia Design",
              tagline:
                `Fashion profile video for Talosia.`,
              credits: ["Creative Director"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/490291564",
                  aspect: 1.96
                }
              ]
            },
            {
              id: "0084",
              title: "Seniors Engagement",
              client: "Te Pou Theatre • Roskill Together",
              tagline:
                `After the first wave of COVID-19, Roskill Together wanted to engage some of the
                seniors in the local community.`,
              credits: [],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/424027626",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "AEC",
              title: "Cataracts Surgery Instructions",
              client: "Auckland Eye",
              tagline: "Client video for Auckland Eye, based in Remuera Auckland.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/394154666",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "PBVMONTE",
              title: "Pah Homestead Profile",
              client: "Puketāpapa Business Voice",
              tagline: "Video showcasing the historical Pah Homestead building and James Wallace Trust's purpose.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/442934330",
                  aspect: 1.96
                }
              ]
            },
            {
              id: "0046",
              title: "Transport Accessibility",
              client: "Auckland Council",
              tagline:
                `Client project for Auckland's Youth Advisory Panel, presented to the council's transport committee
                (with Mayor Phil Goff).`,
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/350848019",
                  aspect: 2.00
                }
              ]
            },
          ]

          folderUrl = {
            path: 'profile',
            count: 12,
          };

          this.state = {
            title: 'Profiles',
            splashUrl: profileSplash,
            description:
              `Telling meaningful stories about a subject, whether that subject be
              a person, a product or a place, is what we mean by a profile.

              Spprax Media works to ensure that the profiles we help shape and create
              can genuinely be called profiles – one's that tell their story just
              by watching their short video, a collection of images, or through a livestream.
              <br /><br />
              In the past, we have worked with various brands telling stories about their talented people,
              corporates about their unique culture, and organisations about their mission and what
              makes them special.
              <br /><br />
              Work with us – tell your story the way you want it to be told.
              `
          };

          break;
        case "event":
          videos = [
            {
              id: "SomeID",
              title: "Music Gala Performance",
              client: "Saint Kentigern College",
              tagline: "Saint Kentigern College have their students perform a concert at the Holy Trinity Cathedral, Auckland.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/853962522",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "SP-0014",
              title: "Ethnic Showcase",
              client: "Auckland Council • Whau Local Board",
              tagline: "Video highlights for Whau local board's ethnic showcase event in New Lynn, Auckland.",
              credits: ["Creative Director"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/474634814",
                  aspect: 1.96
                },
                {
                  url: "https://player.vimeo.com/video/482228213",
                  aspect: 1.96
                },
              ]
            },
            {
              id: "SP-0011",
              title: "\"FLAMBOYANCE\" – Town Hall",
              client: "Auckland Youth Orchestra",
              tagline:
                `Video highlights for Auckland Youth Orchestra's 2020 finale performance at the Auckland Town Hall.`,
              credits: ["Creative Director"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/497531564",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/497531268",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "0049",
              title: "Walk The Line – NZFW",
              client: "YMCA Auckland",
              tagline: "NZ Fashion Week is the premiere fashion event for New Zealand.",
              roleDesc: "Client event videography for NZ Fashion Week's Walk The Line Show.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/360076300",
                  aspect: 1.96
                }
              ]
            }
          ]

          folderUrl = {
            path: 'event',
            count: 24,
          };

          this.state = {
            title: 'Event Coverage',
            splashUrl: eventSplash,
            description:
              `We love events! Events are fun, exciting, sometimes noisy but always full of new opportunities to
              catch the candid moments of people just having a good time (something we think we're pretty good at, take a look below).
              Videos and photos of your current events make a great foundation for future promotion, drawing larger crowds, even more laughs and perhaps even a larger budget!

              <br /><br />

              Even with events where you want to reach the largest audience possible, but are limited on space,
              we can help keep the engagement up by moving your event online through a real-time livestream.
              Events come in all shapes and sizes and we've got experience
              across all sorts. Take a look below to see some of our past indoor and outdoor, small and large functions.
              `
          }

          break;
        case "wedding":
          videos = [
            {
              id: "0068",
              title: "Renee and Zack",
              tagline: "Wedding film for Renee and Zack at Porongia Pines, Hamilton.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/494457105",
                  aspect: 2.35
                }
              ]
            },
            {
              id: "0067",
              title: "Keren and Luke",
              roleDesc: "Wedding film for Keren and Luke at Maraetai Beach, Auckland. ",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/408731823",
                  aspect: 2.35
                }
              ]
            },
            {
              id: "0096",
              title: "Karine and Eroni",
              roleDesc: "Wedding film for Karine and Eroni at Sorrento in the Park, Auckland.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/450061309",
                  aspect: 2.35
                }
              ]
            },
            {
              id: "0100",
              title: "Amberley and Denis",
              tagline: "Wedding film for Amberley and Denis at Woodside Estate, Hamilton.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/496366597",
                  aspect: 2.35
                }
              ]
            },
          ]
          folderUrl = {
            path: 'wedding',
            count: 6,
          };

          this.state = {
            title: 'Wedding Films',
            splashUrl: weddingSplash,
            description:
            `Weddings hold a special place in our hearts, and that's why we've dedicated an entire page to them. We understand that weddings demand the utmost care and meticulous time management to preserve those precious moments and all the delightful details that can easily slip away on your big day.
<br /><br />
            Our extensive wedding experience guarantees that even if you dance the night away, there will always be countless replays to relive those extraordinary moments.
            We specialize in crafting unique and emotional wedding films that paint a vivid tapestry of emotions, allowing you to reimmerse yourself in the magic.
            <br /><br />
            Reach out to us, and let's create something truly exceptional together.
            `
          }

          break;
        case "campaign":

          videos = [
            {
              title: '"The Y" Brand Launch Video',
              client: 'The Y (Formerly the YMCA)',
              tagline: "In 2022, the YMCA in New Zealand rebranded to 'The Y'. A strong lauch video was a crucial part of their social media strategy to consolidate this new brand.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/780075230",
                  aspect: 1.78
                }
              ]
            },
            {
              title: '"Fashion for Charity" Launch',
              client: 'Fashion for Charity',
              tagline: "Launch video to promote a charity fashion event supporting the Mental Health Foundation. Featuring Miss Universe New Zealand 2019 Diamond Langi among other NZ public figures.",
              credits: [],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/477002774",
                  aspect: 1.96
                }
              ]
            },
            {
              title: '"Youth Voices of Auckland" – Mayoralty Campaign 2019',
              client: 'Recruit Your Mayor Steering Group',
              tagline: `"The Auckland Mayoralty, Council and Local Board elections are all coming up very, very soon.
              Tune in and learn more about our local government and our upcoming event to recruit our new mayor."`,
              credits: [],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/355509324",
                  aspect: 1.96
                }
              ]
            },
            {
              id: "MCLive",
              title: 'MC Live Series',
              client: 'Meryl Cassie Live',
              tagline: `Partnering with actress, singer and dancer Meryl Cassie in bringing you along
              to her shenannigans. So far, we've been to HQ to celebrate pride, our up and coming footballers at Unimount and
              even celebrating Jacinda Ardern's 40th birthday with people on Auckland's streets.`,
              credits: ['Partner Agency'],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/435265052",
                  aspect: 2
                },
                {
                  url: "https://player.vimeo.com/video/438554099",
                  aspect: 1.78
                }
              ]
            },
            {
              title: "Lifestyle Merch Promotion",
              client: 'APE Athletics',
              tagline: "APE Athletics announcing their new summer style of lifestyle merchandise.",
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/388950636",
                  aspect: 1.00
                }
              ]
            },
            {
              id: 'NORTHERN',
              title: '"A Better Future"',
              client: 'Northern Presbytery Strategic Plan 2020',
              tagline:
                `Shot and edited to reach the nation-wide northern presbytery minister base,
                and the required church response after COVID.`,
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/433315765",
                  aspect: 1.78
                }
              ]
            },
            {
              id: 'RAISEUP',
              title: 'Recruitment 2020',
              client: "YMCA Auckland",
              tagline:
                'Funding support and recruitment videos made for YMCA and RaiseUp.',
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/414734748",
                  aspect: 1.96
                },
                {
                  url: "https://player.vimeo.com/video/414734510",
                  aspect: 1.96
                },
                {
                  url: "https://player.vimeo.com/video/414734193",
                  aspect: 1.96
                },
              ]
            },
            {
              id: "STEM",
              title: 'STEM Education Campaign',
              client: 'Lynfield College',
              tagline:
                `Client project for Lynfield College. A short promotional video for usage overseas,
                highlighting the usage and importance of STEM education at Lynfield College.`,
              credits: ["Lead Filmmaker"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/345422710",
                  aspect: 1.85
                }
              ]
            }
          ]

          folderUrl = {
            path: 'campaigns',
            count: 10,
          };

          this.state = {
            title: 'Campaigns',
            splashUrl: campaignSplash,
            description:
            `Campaign videos are often the hardest to work with, and this is because for
            a campaign to really be effective, it needs to above all else, stand out.
            <br /><br />
            After working our way through understanding what you're campaigning for, your needs and what you want to spotlight,
            we create a custom blueprint for the upcoming project, incorporating unique aspects and twists that only enhance your vision.
            The end result? (Hopefully) something really awesome.
            <br /><br />
            We've had a bunch of ideas in the past (with a few more always at the back of our minds).
            If you're just like us and excited about creating something new, we look forward to hearing from you!
            <br /><br />
            `
          }

          break;

        default:
          this.state = {redirect: true};
          return;
      }

      let photos = [];

      let folder = process.env.PUBLIC_URL + `/static/portfolio/${folderUrl.path}`;

      for (let i = 0; i < folderUrl.count; i++) {
        let url = `${folder}/${i + 1}.JPG`;
        photos.push(url);
      }

      this.state.imageUrls = photos;
      this.state.videos = videos;
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/error404' />
      )
    }

    return (
      <div className='page-work'>
        <Navigation />

        <div id='splash' className='section'>
          <img className='splash-photo' src={this.state.splashUrl} />

          <div className='splash-title'>
            <h1 data-aos='fade-right'>{this.state.title}</h1>
          </div>
        </div>

        <div className='section'>
          <div className='content'>
            <h2>Our Experience</h2>
            <p dangerouslySetInnerHTML={{__html: this.state.description}}>
            </p>
          </div>
        </div>

        <div className='section grey video-section'>
          {this.state.videos.map((video, index) => {
            return (
              <VideoPlayer
                key={index}
                title={video.title}
                tagline={video.tagline}
                roleDesc={video.roleDesc}
                credits={video.credits}
                videoItems={video.videoItems}
                client={video.client}
              />
            );
          })}
        </div>

        <div className='section white'>
          {/* <p id='crop-prompt'>NB: Actual crop of images may differ. Click to view original.</p> */}

          <ul className='photo-box' id='photo-box-app'>

            {this.state.imageUrls.map((url, index) => {
              return (
                <li key={index} data-aos='fade-up'>
                  <img src={url} alt='portfolio' />
                </li>
              );
            })}

            {/* <li id='photo-box-last'></li> */}
          </ul>
        </div>

        <Scroll />

        <Footer />
      </div>
    );
  }

}

export default WorkPage;
