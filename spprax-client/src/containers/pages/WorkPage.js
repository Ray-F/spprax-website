import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';
import VideoPlayer from '../../components/VideoPlayer.js';
import Scroll from '../../components/Scroll.js';

import profileSplash from '../../resources/services/profile-splash.JPG';
import eventSplash from '../../resources/services/event-splash.JPG';
import weddingSplash from '../../resources/services/wedding-splash.JPG';
import otherSplash from '../../resources/services/other-splash.JPG';
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

    let folderUrls;
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
              title: "Seniors Engagement Event",
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
              id: "PRIMITIVE",
              title: 'PRIMITIVE – MUSIC VIDEO',
              client: 'Silvera Band',
              tagline: 'Client music video for the band Silvera, for the release of their track "Primitive".',
              credits: ["Lead Filmmaker"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/327413214",
                  aspect: 1.78
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

          folderUrls = [
            {
              folderUrl: '0053-foodstuffs-office',
              imgUrlHeader: 'foodstuffs-office',
              size: 8,
            },
            {
              folderUrl: '0048-airsorted',
              imgUrlHeader: 'airsorted',
              size: 5,
            },
            {
              folderUrl: '0053-newworld-paknsave',
              imgUrlHeader: 'foodstuffs',
              size: 11,
            },
            {
              folderUrl: 'OTHER-interior',
              imgUrlHeader: 'interior',
              size: 2,
            },
            {
              folderUrl: 'OTHER-models/emma',
              imgUrlHeader: 'emma',
              size: 3
            },
            {
              folderUrl: 'OTHER-models/julz',
              imgUrlHeader: 'julz-talent',
              size: 3
            },
            {
              folderUrl: 'OTHER-models/matt',
              imgUrlHeader: 'matt-talent',
              size: 3
            },
            {
              folderUrl: '0058-sasha',
              imgUrlHeader: 'sasha',
              size: 11,
            },
            {
              folderUrl: 'LC-festivalawards',
              imgUrlHeader: '2019faewall',
              size: 7
            }
          ];

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
              id: "RCR",
              title: "Roskill Climate Restart, 2019",
              client: "Michael Wood MP",
              tagline:
                `Roskill Climate Restart was a local initiative to discuss the implications and
                actions regarding Climate Change and the local Roskill community.`,
              roleDesc:
                `This project was split into two videos – one of the full-length discussion hui
                and the other a shorter, social-media friendly 'highlights cut'.`,
              credits: ["Videographer"],

              videoItems: [
                {
                  url: "https://player.vimeo.com/video/355803844",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/355897843",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "0049",
              title: "Walk The Line – NZFW 2019",
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

          folderUrls = [
            {
              folderUrl: '0063-strongman',
              imgUrlHeader: '0063-strongman',
              size: 9
            },
            {
              folderUrl: '0065-youthfest',
              imgUrlHeader: '0065-2020youthfest',
              size: 15
            },
            {
              folderUrl: 'WDCC-hackathon',
              imgUrlHeader: 'WDCCxHackathon-',
              size: 9
            },
            {
              folderUrl: 'WLB',
              imgUrlHeader: 'WLB-',
              size: 11
            },
            {
              folderUrl: 'PYB-youthawards',
              imgUrlHeader: '2019youthawards',
              size: 15
            },
            {
              folderUrl: 'PYB-summit-19',
              imgUrlHeader: 'summit19-',
              size: 13
            },
            {
              folderUrl: 'DEB-seasonals',
              imgUrlHeader: 'debating',
              size: 9
            },
            {
              folderUrl: 'LC-jazz',
              imgUrlHeader: 'jazz',
              size: 3
            },
            {
              folderUrl: 'ManuAuteKiteDay',
              imgUrlHeader: 'ManuAuteKiteDay-',
              size: 10
            },
            {
              folderUrl: 'PYB-summit',
              imgUrlHeader: 'summit',
              size: 7
            },
            {
              folderUrl: '0076-GBHQ',
              imgUrlHeader: '0076-GBHQ-',
              size: 14,
            },
            {
              folderUrl: '0049-wtlraiseup',
              imgUrlHeader: 'wtlraiseup',
              size: 14
            },
            {
              folderUrl: '0033-snowball',
              imgUrlHeader: 'snowball',
              size: 11
            }
          ];

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
              tagline: "Wedding film for Renee and Zack at Porongia Pines, Hamilton. 23/10/2020.",
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
              roleDesc: "Wedding film for Keren and Luke at Maraetai Beach, Auckland. 14/03/2020.",
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
              roleDesc: "Wedding film for Karine and Eroni at Sorrento in the Park, Auckland. 17/07/2020.",
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
              tagline: "Wedding film for Amberley and Denis at Woodside Estate, Hamilton. 14/11/2020.",
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/496366597",
                  aspect: 2.35
                }
              ]
            },
          ]
          folderUrls = [
            {
              folderUrl: '0060-wedding',
              imgUrlHeader: '0060wedding',
              size: 15
            },
            {
              folderUrl: '0060-weddingbnw',
              imgUrlHeader: 'weddingbnw',
              size: 6
            }
          ]

          this.state = {
            title: 'Wedding Films',
            splashUrl: weddingSplash,
            description:
            `Weddings are some of the most special events we help with, and that's
            why we have a special page dedicate to it. Weddings require the maximum levels
            of care (and time management!) to capture the truly special moments,
            along with all the details you may end up missing on your big day. Our experience with weddings
            mean even if you do party a bit too hard, there will be an infinite number of replays where you can watch those special moments back.

            <br /><br />

            With our work, we specialise in unique and emotional wedding films that show the full spectrum
            of emotions – allowing you to relive your moment.

            <br /><br />
            With COVID-19, we often come across some larger weddings where sometimes there are
            important family members overseas who may miss out. This is why we also offer
            wedding livestreaming packages along with our films, and sometimes at discounted rates to make sure guests don't miss out.

            <br /><br />
            Get in touch with us to see if we can arrange something special for you.
            `
          }

          break;
        case "other":
          videos = [
            {
              id: "OE",
              title: "\"Overexposed\" – Short Film",
              client: 'International IYSFF 1st Place Winner',
              tagline:
                "Overexposed tells a story of a young detective attempting to solve a crime.",
              roleDesc:
                `Awarded 2nd place in the New Zealand Regionals, best cinematography, editing and production design.`,
              credits: ["DP, Second Editor, Colourist"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/287790121",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "SunsetBHB",
              title: "Blockhouse Bay Beach",
              tagline:
                `A short nature recount of Blockhouse Bay Beach,
                capturing the light rays passing through the clouds during sunset,
                and then again during the day overlooking the fisherman by the bay.`,
              roleDesc: "",
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/373857914",
                  aspect: 2.35
                },
                {
                  url: "https://player.vimeo.com/video/371062035",
                  aspect: 2.00
                }
              ]
            },
            {
              id: "",
              title: '"Welcome to Tomorrow"',
              client: "ATOM 1 Minute Short Film Competition",
              credits: ["DP", "Editor", "Colourist"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/350572609",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "LBL",
              title: '"Little Blue Light" – Short Film',
              client: "Show Me Shorts, 2018",
              tagline: '"Boy gets a menacing text message at night. A blue light flickers."',
              credits: ["DP, Colourist"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/356344596",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "BLUE",
              title: '"Blue" – Short Film',
              client: "Experimental, Nature",
              tagline: 'Short experimental film of people picking blueberries.',
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/435273200",
                  aspect: 2.35
                }
              ]
            },
            {
              id: "TEST",
              title: 'Personal Tests',
              tagline:
                `Here's also a list of random testing footage I've done. Some to test new lenses
                and judge how well a camera performs in different circumstances... Worth taking a look if you're interested!.`,

              credits: ["Lead Filmmaker"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/250533676",
                  aspect: 1.78
                },
                {
                  tagline: "Fun abstract animation",
                  url: "https://player.vimeo.com/video/288934810",
                  aspect: 1.78
                }
              ]
            }
          ];
          folderUrls = [
            {
              folderUrl: '0068-aucklandeye',
              imgUrlHeader: 'aucklandeye',
              size: 2
            },
            {
              folderUrl: 'OTHER-interior',
              imgUrlHeader: 'interior',
              size: 2
            },
            {
              folderUrl: 'OTHER-christmaspark',
              imgUrlHeader: 'christmas',
              size: 6
            }
          ];

          this.state = {
            title: 'Narrative / Other',
            splashUrl: otherSplash,
            description:
              `
              Just like with all websites with a limited portfolio space for sharing our creations, we had a
              really hard time coming up with what to include.
              On this page are some videos we really couldn't categorize, and
              also some of our personal work (including narrative short films submitted to festivals).
              <br /><br />
              Although some of this might not be relevant to your project, we do always
              try to add our own 'touch' that make them stand out, unique,
              and sometimes borderline experimental. To do so, we often draw inspiration from our personal projects.
              Have a look below, even just for a bit of entertainment.
              `
          }

          break;

        case "campaign":

          videos = [
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
              id: "PYBREC2019",
              title: 'Recruitment Campaign 2019',
              client: 'Puketāpapa Youth Board',
              tagline:
                `The Puketāpapa Youth Board is once again looking for new members to join its team!`,
              credits: ['Videographer'],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/378484555",
                  aspect: 1.78
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
            }
          ]

          folderUrls = [
            {
              folderUrl: 'WDCC-hackathon',
              imgUrlHeader: 'WDCCxSkillsme-',
              size: 3
            },
            {
              folderUrl: '0069-ape',
              imgUrlHeader: '0069-ape',
              size: 5
            },
            {
              folderUrl: '0068-aucklandeye',
              imgUrlHeader: 'aucklandeye',
              size: 2
            },
            {
              folderUrl: '0051-monsieurmadame',
              imgUrlHeader: 'monsieur-madame',
              size: 16
            }
          ];

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

      for (let i = 0; i < folderUrls.length; i++) {
        for (let j = 1; j < folderUrls[i].size + 1; j++) {
          let url = folderUrls[i].folderUrl;
          let title = folderUrls[i].imgUrlHeader;

          let str = process.env.PUBLIC_URL + `/static/portfolio/${url}/${title}${j}.JPG`;

          photos.push(str);
        }
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
