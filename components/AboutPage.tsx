"use client";

import styled from "styled-components";

// Styled wrapper using CSS-in-JS (styled-components)
const Wrapper = styled.main`
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: sans-serif;
    color: #2e2e2e;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`;

const List = styled.ul`
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
`;

const Background = styled.div`
    position: fixed;
    inset: 0;
    background-image: url("/bg5.png");
    background-size: 100% auto;
    filter: blur(10px);
    z-index: -1;
    animation: bg-zoom 20s infinite alternate;

    @keyframes bg-zoom {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
  }
`;


export default function AboutPage() {
  return (
    <Wrapper>
        <Background />
        <Heading>About This Project</Heading>
        <p>
            This project is a modern card collection browser built with Next.js and TypeScript. It allows
            users to explore a catalog of over 1000 collectible cards from various sets.
        </p>

        <SubHeading>Core Functionality</SubHeading>
        <List>
            <ListItem>Search and browse a vast collection of cards</ListItem>
            <ListItem>Visually engaging layout with animated UI</ListItem>
            <ListItem>Navigation to card sets and individual details</ListItem>
        </List>

        <SubHeading>Meet the Team</SubHeading>
        <List>
            <ListItem>(Name1) – (Which component you worked on)</ListItem>
            <ListItem>Milo – About Page</ListItem>
            <ListItem>(Name2) – (Which component you worked on)</ListItem>
        </List>
    </Wrapper>
    );
}
