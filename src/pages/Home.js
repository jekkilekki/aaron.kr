import React from "react";
import Intro from "../components/home/Intro";
import Talks from "../components/home/Talks";
import TalksREST from "../components/home/TalksREST";
import Classes from "../components/home/Classes";
import Projects from "../components/home/Projects";
import About from "../components/home/About";
import BlogPosts from "../components/home/BlogPosts"
// import Education from '../components/home/Education'

const Home = () => {
  return (
    <>
      <Intro />
      <BlogPosts 
        site_url = "https://aaron.kr/content"
        num_posts = {4}
      />
      <BlogPosts 
        site_url = "https://aaronsnowberger.com"
        num_posts = {4}
      />
      <BlogPosts 
        site_url = "https://keytokorean.com"
        num_posts = {4}
      />
      <TalksREST />
      <Talks />
      <Classes />
      <Projects />
      <About />
      {/* <Education /> */}
    </>
  );
};

export default Home;
