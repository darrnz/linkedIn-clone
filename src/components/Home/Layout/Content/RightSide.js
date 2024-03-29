import React from 'react'
import  { Container, FollowCard, Title, FeedList, Avatar, Recommendation, BannerCard } from './RightSide.styled'

export default function RightSide() {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src='/images/feed-icon.svg' alt='' />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Linkedin</span>
                            <button>Follow</button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>
                            <span>#Video</span>
                            <button>Follow</button>
                        </div>
                    </li>
                </FeedList>

                <Recommendation>
                    View all recomendations
                    <img src='/images/right-icon.svg' alt='' />
                </Recommendation>

            </FollowCard>
            <BannerCard>
                <img src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' alt='' />
            </BannerCard>
        </Container>
    )
}
