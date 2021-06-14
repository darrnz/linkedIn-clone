import React from 'react'
import { Container, Nav, Join, SignIn, Section, Hero, Google, Form } from './Login.styled'
import { connect } from 'react-redux'


function Login() {
    return (
        <Container>
            <Nav>
                <a href='/' >
                    <img  src='/images/login-logo.svg' alt=''/>
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>

            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg' alt='' />
                </Hero>
                <Form>
                    <Google>
                        <a><img src='/images/google.svg' alt=''/>Sign inwith Google</a>
                    </Google>
                </Form>
            </Section>
            
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (disptatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
