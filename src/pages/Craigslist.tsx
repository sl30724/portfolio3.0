import '../styles/Project.css';
import '../styles/Zoom.css';
import Zoom from 'react-medium-image-zoom';

export default function Craigslist() {

    return (
        <div className='content'>
            <div className='projectHeadline'>
                <h2 className='gradientText'>Craigslist.</h2>
                <div className='projectIntro'>
                    <div className='innerProjectIntro'>
                        <p className='overline'>timeline</p>
                        <p className='small'>2021 Sep – 2021 Nov</p>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>team</p>
                        <ul className='small'>
                            <li>Personal Project</li>
                        </ul>
                    </div>
                    <div className='innerProjectIntro'>
                        <p className='overline'>role</p>
                        <ul className='small'>
                            <li>Product Design</li>
                            <li>Design System</li>
                            <li>UX Research</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='projectImg'>
                <Zoom>
                    <img src="/pics/voteally/Voteally_cover.png" alt="Voteally mobile screens" />
                </Zoom>
                <p className='caption'>Voteally mobile screens</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Overview</h4>
                <p>This personal, semester-long project was made for the course User Experience Design I. Each student had to observe a pain point in our lives and design a feasible product that would solve the problem. The local election was just over, and I remembered how shocked I was when I learned that my friends casted their votes without knowing what’s on the bullet.
                    <br />
                    <br />
                    After speaking with them, I realized this is not because they don’t think their votes are important, but because they didn’t have time and the energy to learn about the issues and the candidates. This led me to the idea of VoteAlly, a tool designed to streamline the voting preparation process for people who wish to be more politically-involved.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Assumptions</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_assumptions.png" alt="Voteally assumptions" />
                    </Zoom>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Research Plan</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_researchPlan.png" alt="Voteally research plan" />
                    </Zoom>
                </div>
                <p>To help me validate my assumptions, I decided to conduct user interviews with 5 participants. I laid out the research plan above to help me identify the research goals. This research plan helped me refocus on the areas I wanted to explore more during the user interviews whenever the conversation seems to lose the focus.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Affinity Mapping</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_affinity.png" alt="Voteally affinity map" />
                    </Zoom>
                </div>
                <p>After the user interviews, I created the affinity map above to analyze the common things all respondents mentioned during their interviews. This map helped me identify the pain points in the current user journey, how Voteally can help them resolve these problems, and what features it should have.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Research Findings</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_insights.png" alt="Voteally research insights" />
                    </Zoom>
                </div>
                <p>From the affinity mapping, I was able to summarize the research findings in these four points and defined the must-have functions on Voteally to address the users’ goals and needs in order to achieve the project goal of streamlining the voting preparation process.</p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>User Mapping</h4>
                <div className='projectImg'>

                    <Zoom>
                        <img src="/pics/voteally/Voteally_userMap.png" alt="Voteally user map" />
                    </Zoom>
                    <p className='caption'>Voteally user flow</p>
                </div>
                <p>Making a user flow assisted three things in my design process: The screens I need to make to reach MVP, a frictionless user journey, and a tool to discover new details for the features.
                </p>
            </div>

            <div className='projectContent'>
                <h4 className='gradientText'>Design System</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_designSystem.png" alt="Voteally Design System" />
                    </Zoom>
                    <p className='caption'>Voteally logo and color system</p>
                </div>
                <p>I used the color purple to represent being politically neutral and to render the feeling of trust, while the yellow symbolizes friendliness. For typography, I chose two easy-to-read Sans Serif fonts below because I expect a high percentage of literal content.
                </p>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_typography.png" alt="Voteally typography" />
                    </Zoom>
                    <p className='caption'>Voteally typography</p>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Features</h4>
                <div className='feature'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/voteally/Voteally_home.png" alt="Voteally Home" />
                        </Zoom>
                        <p className='caption'>Voteally Home</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Home</h5>
                        <p>Integrating the user findings, the Home screen collects daily political news from different news sources. Users can use the top search bar to search for a specific topic, party, or candidate. They can also browse through the news organized by three different election levels: state/local, congressional, and presidential.</p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/voteally/Voteally_candidates.png" alt="Voteally Candidates" />
                        </Zoom>
                        <p className='caption'>Voteally Candidates</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Candidates</h5>
                        <p>The Candidates screen shows users all the candidates that are running for the upcoming elections, categorized by different election scales. Once user search for a specific topic, they can also see the candidates’ position on that issue. The filter function allows users to only see candidates that are “friendly” or “unfriendly” on the issue.</p>
                    </div>
                </div>
                <div className='feature'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/voteally/Voteally_profile.png" alt="Voteally Profile" />
                        </Zoom>
                        <p className='caption'>Voteally Profile</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Profile</h5>
                        <p>The profile page provides users a quick way to access to the information they’re interested in, including important information about the upcoming election, the candidates they’ve marked, and the discussions they’ve participated or reacted to.</p>
                    </div>
                </div>
                <div className='feature' id='reverse'>
                    <div className='projectImg'>
                        <Zoom>
                            <img src="/pics/voteally/Voteally_community.png" alt="Voteally Community" />
                        </Zoom>
                        <p className='caption'>Voteally Community</p>
                    </div>
                    <div className='featureContent'>
                        <h5 className='gradientText'>Community</h5>
                        <p>Last but not least, the community forum feature was added to integrate the research findings. Similarly to other features, users can find and join discussions that are categorized by different election scales.</p>
                    </div>
                </div>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Interactive Prototype</h4>
                <div className='projectImg'>
                    <Zoom>
                        <img src="/pics/voteally/Voteally_prototype.gif" alt="Voteally prototype" />
                    </Zoom>
                    <p className='caption'>Voteally prototype</p>
                </div>
                <p>To summarize, 20+ screens were created for this project:
                    <br />
                    <br />
                    <ul>
                        <li>A candidates page where people can search for issues and filter candidates’ positions on issues that they care about.</li>
                        <li>Based on my research findings, I decided to include a community page where users can start and join discussions about the upcoming elections.</li>
                        <li>Since all interviewees mentioned they source information from different news media, I created a home page that collects recent political news from various media.</li>
                    </ul>
                </p>
            </div>
            <div className='projectContent'>
                <h4 className='gradientText'>Takeaways</h4>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Information Architecture: Combining Organization Systems</p>
                    <p>This project involves presenting different sets of information, which makes developing a clear information architecture a top priority. I learnt that combine a searching system (search bar w/ filters and result suggestions) and a topic schemes (tabs) is a great way to help users find the content they need.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>User Retention: Implementing habit-forming feature</p>
                    <p>The home page serves as a news source for users that help them cast their votes for their allies, but it also works as a retention strategy. Since the intended users care about politics and seek political news on multiple sources, this feature has the habit-forming effect that could make this app become the go-to tool for political news to users.</p>
                </div>
                <div className='bulletPoints'>
                    <p className='subtitle gradientText'>Social Element: Multiple benefits</p>
                    <p>Not only does the discussion page come from the user research findings, it also serves the “social proof” and “entertainment” purposes. These are both trigger elements for users to engage on this app.</p>
                </div>
            </div>
        </div>
    )
}