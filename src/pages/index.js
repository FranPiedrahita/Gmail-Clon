import MsgContainer from "@/components/MsgContainer";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clon de Gmail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <MainLayout>
        <MsgContainer />
      </MainLayout>
    </>
  );
}
