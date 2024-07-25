/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { Loader, Card, FormField } from "../components/compo.js"


const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((cardPost) => <Card key={cardPost._id} {...cardPost} />)
  }
  return (
    <h2 className="mt-5 uppercase text-xl text-sky-700 font-bold">{title}</h2>
  )
}

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchPrompt, setSearchPrompt] = useState("abc")

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-[32px] font-extrabold text-black">The Community Showcase</h1>
          <p className="mt-2 text-[#2222228f] font-semibold">Browse through a collection of imaginative and visually stunning images generated by Zop AI</p>
        </div>




        <div className="mt-16">
          <FormField />
        </div>


        <div className="mt-10">
          {
            loading ?
              (
                <div className="flex justify-center items-center">
                  <Loader />
                </div>
              )
              :
              (
                <>
                  {
                    searchPrompt && (
                      <h2 className="font-medium text-[#666e75] text-xl mb-3">
                        Showing results for <span className="text-[#222328]">{searchPrompt}</span>
                      </h2>
                    )
                  }

                  <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                    {
                      searchPrompt ?
                        (
                          <RenderCards
                            data={[]}
                            title="No search results found"
                          />
                        )
                        :
                        (
                          <RenderCards
                            data={[]}
                            title="No Posts Found"
                          />
                        )
                    }
                  </div>

                </>
              )}

        </div>


      </section>
    </>
  )
}

export default Home