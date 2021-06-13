import React from 'react'
import { Container, Content, Logo, Search, SearchIcon, Nav, NavList, NavListWrap,
    User, Work, SignOut
} from './Header.styled'

export default function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href='/home'>
                        <img src='/images/home-logo.svg' alt='' />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type='text' placeholder='Search' />
                    </div>
                    <SearchIcon>
                        <img src='/images/search-icon.svg' alt='' />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className='active'>
                            <a>
                                <img src='/images/nav-home.svg' alt='' />
                                <span>Home</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src='/images/nav-network.svg' alt='' />
                                <span>My network</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src='/images/nav-jobs.svg' alt='' />
                                <span>Jobs</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src='/images/nav-messaging.svg' alt='' />
                                <span>Messaging</span>
                            </a>
                        </NavList>

                        <NavList>
                            <a>
                                <img src='/images/nav-notifications.svg' alt='' />
                                <span>Notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                <img src='/images/user.svg' alt=''/>
                                <span>Me</span>
                                <img src='/images/down-icon.svg' alt=''/>
                            </a>

                            <SignOut>
                                <a>Sign out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src='/images/nav-work.svg' alt='' />
                                <span>
                                    Work
                                    <img src='/images/down-icon.svg' alt='' />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>

                </Nav>
            </Content>
        </Container>
    )
}
