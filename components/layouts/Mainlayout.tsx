import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className=" ">{children}</div>
      </div>
    </>
  );
};
