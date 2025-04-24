import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("../../components/AboutPage"));

export default function About() {
    return <AboutPage />;
}