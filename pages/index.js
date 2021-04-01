import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-dark dark:bg-dark dark:text-light">
      <Head>
        <title>passivbot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-row items-center px-5 justify-between bg-gradient-to-b from-transparent to-white dark:to-darklight">
        <div className="flex-1">
          <span className="text-lg font-medium">passivbot</span>
        </div>
        <nav className="flex-1 flex justify-center space-x-2">
          <a className="py-3 px-2 border-b-2 border-primary" href="#">Bots</a>
          <a className="py-3 px-2" href="#">API</a>
          <a className="py-3 px-2" href="#">Wiki</a>
        </nav>
        <div className="flex-1 text-right">
          <span className="text-xs text-gray-500">version 3.0</span>
        </div>
      </header>

      <main className="container">
        <div className="flex justify-between my-10 px-20">
          <div>
            <p className="text-lg text-gray-400">Exchange</p>
            <a href="#" className="text-lg">
              All exchanges
              <svg className="w-5 h-5 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="self-end">
            <p className="text-sm text-gray-400">Balance</p>
            <span className="text-lg">$2168.20</span>
            <span className="text-sm text-green-500 ml-2">$200,-</span>
            <span className="text-sm text-green-500 ml-2">+1.5%</span>
          </div>

          <div className="self-end">
            <p className="text-sm text-gray-400">Unrealized</p>
            <span className="text-lg text-red-500">$58.43</span>
            <span className="text-sm text-red-500 ml-2">-0.4%</span>
          </div>

          <div className="self-end">
            <p className="text-sm text-gray-400">Available</p>
            <span className="text-lg">$2109.83</span>
          </div>

          <button className="rounded-full border-2 border-primary px-10 whitespace-nowrap hover:bg-primary focus:outline-none">Create bot</button>

        </div>
      </main>
    </div>
  )
}
