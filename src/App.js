import { useEffect, useState } from "react";
import alanBtn from '@alan-ai/alan-sdk-web'

function App() {
  const [news, setNews] = useState([])
  const alanKey = 'ce5ed54c57cd61d7c4e90ef6a3c038312e956eca572e1d8b807a3e2338fdd0dc/stage'

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, data }) => {
        if (command === 'Searchresults') {
          console.log(data.value)
          setNews(data.value)
        }
      }
    })
  })
  console.log(news)
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
            <div className="max-w-">
              <h1 className="text-white mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">AI News Application</h1>
            </div>

            <p className="max-w-md leading-relaxed text-gray-200 xl:text-lg">This Website will provide you lastest news about everything. just click on the voice icon and say <span className="text-sky-500">Search for [topic] </span> to get started.</p>
          </div>

          <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
              <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>

      </section>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article, i) => (
            <div key={i} className="max-w-sm rounded-lg shadow bg-slate-800 border-gray-700">
              <a href={article.url}>
                <img className="rounded-t-lg w-full h-52" src={article.image.thumbnail} alt="" />
              </a>
              <div className="p-5">
                <a href={article.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{article.title.slice(0, 50)}{article.title.length > 50 && '...'}</h5>
                </a>
                <p className="mb-3 font-medium text-slate-400">{article.description.slice(0, 300)}{article.description.length > 300 && '...'}</p>
                <a href={article.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default App;

