import {
  CustomerReviews,
  Hero,
  Button,
  Subscribe,
  Nav,
  SpecialOffers,
  PopularProducts,
  Services,
  SuperQuality,
  Footer,
} from "./components/index.js";

function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-1 padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
          
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
