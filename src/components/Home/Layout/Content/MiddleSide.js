import React from 'react'
import  { Container, ShareBox, Article, SharedActor,
        Description, SharedImg, SocialCounts, SocialActions } from './Middle.styled'

export default function MiddleSide() {
    return (
        <Container>
            <ShareBox>
                Share
                <div>
                    <img src='/images/user.svg' alt='' />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src='/images/photo-icon.svg' alt='' />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src='/images/video-icon.svg' alt='' />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src='/images/video-icon.svg' alt='' />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src='/images/article-icon.svg' alt='' />
                        <span>Write Article</span>
                    </button>
                </div>
            </ShareBox>

            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src='/images/user.svg' alt=''/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <p>...</p>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src='/images/shared-image.jpg' alt='' />
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' alt='' />
                                <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f' alt='' />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>2 comments</a>
                        </li>
                    </SocialCounts>

                    <SocialActions>
                        <button>
                            <img src='/images/like-icon.svg' alt='' />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src='/images/comments-icon.svg' alt='' />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src='/images/share-icon.svg' alt='' />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src='/images/send-icon.svg' alt='' />
                            <span>Send</span>
                        </button>
                    </SocialActions>

                </Article>
            </div>
        </Container>
    )
}
