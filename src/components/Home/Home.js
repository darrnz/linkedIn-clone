import React from 'react'
import { Container, Section, Content } from './Home.styled'
import Layout from './Layout/Layout'

export default function Home() {
    return (
        <Container>
            <Section>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with Upwork and keep business runing</p>
            </Section>
            <Layout />
        </Container>
    )
}
