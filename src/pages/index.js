import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";
import Footer from "../components/Footer";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Nextbuy</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto bg-[#dee0e4]">
        <Banner />
        <ProductFeed products={products} />
      </main>

    <Footer />
    </div>
  );
}

// SERVER-SIDE-RENDERING USING NEXTJS
export async function getServerSideProps(context) {

  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());    // Fetching data from API.

  return{ props: {                // Passing the data to the component using "props".
      products: products,
      session
    } }
}



