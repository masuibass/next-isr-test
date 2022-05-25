import Head from 'next/head'

const ISR = ({ timeStamp }) => {
  return (
    <div>
      <Head>
        <title>ISR Test</title>
      </Head>

      <main>
        <h1>ISR Page</h1>
        <p>time: {timeStamp}</p>
      </main>
    </div>
  )
}

export const getStaticProps = async (context) => {
  return {
    props: {
      timeStamp: new Date().getTime()
    },
    revalidate: 5,
  }
}

export default ISR
