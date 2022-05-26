import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Script from 'next/script'
import { CMS_NAME } from '../lib/constants'
import Header from "../components/header";
import Contact from "../components/contact";
import SectionFirst from "../components/section-first";
import SectionSecond from "../components/section-second";
import SectionMap from "../components/section-map";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
            <HeroPost />
            <SectionFirst />
            <SectionSecond />
            <SectionMap />
            <Contact />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
