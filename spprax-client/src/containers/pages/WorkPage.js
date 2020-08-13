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
            {
              id: "RU-INDUCTION",
              title: 'Induction Videos',
              client: 'Raise Up',
              tagline: 'Client project for the Raise Up crew, introducing their current team and what their roles are within that team.',
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/345412822",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/345416750",
                  aspect: 1.78
                }
              ]
            },
            {
              id: "PYB2018INTRO",
              title: 'Team Introductions',
              client: 'Puketāpapa Youth Board',
              tagline: 'The Puketāpapa Youth Board is a youth organisation that aims to advocate, uplift and empower the youth within their local board community.',
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/345411868",
                  aspect: 2.00
                },
                {
                  url: "https://player.vimeo.com/video/290024111",
                  aspect: 1.78
                }
              ]
            }
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
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean at est a felis rutrum varius vel at purus. Ut commodo,
              lacus ut mattis vehicula, mauris nulla placerat nulla, vitae
              tincidunt elit justo in justo. Aliquam sed libero mi.
              Suspendisse potenti.
              <br /><br />
              Donec id tellus sed ligula molestie viverra et id dui.
              Sed vel tristique neque. Cras at ligula lacus.
              Phasellus placerat maximus ultricies. Proin eu diam nisi.
              Aenean vel iaculis velit, id venenatis diam. Duis ullamcorper odio
              euismod justo mattis accumsan. Cras id ligula fermentum felis
              scelerisque rutrum nec quis libero.`
          };

          break;
        case "event":
          videos = [
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
            },
            {
              id: "LCEVENT",
              title: 'Lynfield College Event Series',
              client: "Lynfield College",
              tagline:
                `Event doc's of my old high school, Lynfield College. Having some experience with video shooting,
                I decided to help out with various events, documenting ongoings.`,
              credits: ["Videographer"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/345424438",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/283336175",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/256270475",
                  aspect: 1.78
                },
                {
                  url: "https://player.vimeo.com/video/316987245",
                  aspect: 1.78
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
            description: 'Somewhere else'
          }

          break;
        case "wedding":
          videos = [
            {
              id: "0040",
              title: "Penelope and Florian's Wedding",
              tagline: "Short highlights cut of Penelope and Florian's wedding on Kawau Island.",
              credits: ["Lead Filmmaker"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/376321947",
                  aspect: 2.35
                }
              ]
            },
            {
              id: "0067",
              title: "Keren and Luke – Wedding Highlights",
              roleDesc: "Maraetai Beach, Auckland. 14/03/2020.",
              credits: ["Lead Filmmaker"],
              videoItems: [
                {
                  url: "https://player.vimeo.com/video/408731823",
                  aspect: 2.35
                }
              ]
            }
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
            title: 'Wedding Coverage',
            splashUrl: weddingSplash,
            description: 'Wedding'
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
            title: 'Other',
            splashUrl: otherSplash,
            description: 'Other stuff description'
          }

          break;

        case "campaign":

          videos = [
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
            description: 'Campaigns'
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
