// ===== GLOBAL COMMENT =====
// AboutPage.tsx created by Min Sung (Milo) Park for CS391 Final Project
// This component is responsible for rendering the About page.
// It uses styled-components for CSS-in-JS styling and mirrors the homepage's visual design
// by incorporating a fixed blurred background. All code and logic below are authored by Milo.

"use client";

import styled from "styled-components";

// === Styling Section ===

// Wrapper for the whole About page content
const Wrapper = styled.main`
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: sans-serif;
    color: #2e2e2e;
`;

// Large heading for section titles
const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

// Subheadings for page sections
const SubHeading = styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`;

// Unordered list for items under Core Functionality and Team
const List = styled.ul`
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
`;

// Background image styled to match homepage — blurred and zoom animated
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

// === Component Logic ===
// This React component renders the About page content, including:
// - An animated background
// - Overview of the project
// - Core functionality list
// - Team member contributions
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
            <ListItem>Dennis - Home Page</ListItem>
            <ListItem>Min Sung (Milo) Park – About Page</ListItem>
            <ListItem>(Alvin Zhu) – Pack drawing page</ListItem>
        </List>
    </Wrapper>
    );
}
