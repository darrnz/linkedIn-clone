import React from 'react';
import LeftSide from './Content/LeftSide';
import MiddleSide from './Content/MiddleSide';
import RightSide from './Content/RightSide';
import { Container } from './Layout.styled'

export default function Layout() {
    return (
        <Container>
            <LeftSide />
            <MiddleSide />
            <RightSide />
        </Container>
    )
}
