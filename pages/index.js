import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from "../components/header";
import SectionContact from "../components/section-contact";
import SectionBenefits from "../components/section-benefits";
import SectionServices from "../components/section-services";
import SectionMap from "../components/section-map";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Lingo website</title>
        </Head>
        <Container>
          <Header />
            <HeroPost />
            <SectionBenefits />
            <SectionServices />
            <SectionMap />
            <SectionContact />
        </Container>
      </Layout>
    </>
  )
}
