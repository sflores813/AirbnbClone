import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div >
      <Head>
        <title>Stephens airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* explore nearby section */}

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull info from server using server side rendering  - API rendering*/}
          <div
            className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>



              <section>
                <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>

                {cardsData?.map(({ img, title }) => {
                  <MediumCard key={img} img={img} title={title}   />

                })}
              </section>

      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,cardsData
    },
  };
}
