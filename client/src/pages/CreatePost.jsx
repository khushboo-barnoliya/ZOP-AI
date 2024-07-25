/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { FormField, Loader } from "../components/compo.js";
import { getRandomPrompts } from "../utils/utils.js";
import { preview } from "../assets/index.js";
import { useState } from "react";

const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/zop", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: form.prompt
          })
        })
        const data = await response.json();
        setForm({
          ...form,
          image: `data:image/jpeg;base64,${data.image}`
        })
      } catch (error) {
        alert(error)
      }
      finally{
        setGeneratingImg(false);
      }
    }
    else{
        alert("Please add some text in prompt");
    }
  }

  const handleOnSubmit = () => {

  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form, [name]: value
    })

  }

  const handleOnSurprise = (e) => {
    const formPrompt = getRandomPrompts(form.prompt);
    setForm({
      ...form, prompt: formPrompt
    })
  }

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>

      <section className="max-w-7xl mx-auto ">
        <div>
          <h1 className="text-[30px] font-extrabold text-black">Create</h1>
          <p className="text-[#2222228f] font-medium">Create imaginative and visually stunning images through <span className="font-bold text-[#222222be]">Zop AI</span> and share them with the community.</p>
        </div>


        <form className="mt-10 max-w-3xl" onSubmit={handleOnSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="Will Smith"
              value={form.name}
              handleChange={handleOnChange}
            />

            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A comic book cover of a superhero wearing headphones"
              value={form.prompt}
              handleChange={handleOnChange}
              isSurpriseMe
              handleSurpriseMe={handleOnSurprise}
            />

            <div className="flex w-48 h-48 justify-center items-center p-3 relative bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-sky-700 focus:border-sky-700">
              {
                form.photo
                  ?
                  (<img src={form.photo} alt={form.prompt} className="h-full w-full object-contain" />)
                  :
                  (<img src={preview} alt="preview" className="w-9/12 h-9/12 object-contain opacity-40" />)
              }

              {
                generatingImg && (
                  <div className="flex rounded-lg justify-center items-center absolute inset-0 z-0 bg-[rgba(0,0,0,0.17)]">
                    <Loader />
                  </div>
                )
              }

            </div>
          </div>

          <div className="mt-5 flex gap-5">
            <button type="button" className="text-white bg-black hover:bg-[#000000d0] transition-all ease-linear duration-150 text-sm font-medium rounded-md w-full sm:w-auto px-5 py-2.5 text-center" onClick={generateImage}>
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>

          <div className="mt-5">
            <p className="text-[14px] text-[#666e75]">Once you have creates the image you want,you can share it with others in the community</p>

            <button type="button" className="text-white mt-3 bg-sky-700 hover:bg-sky-600 transition-all ease-linear duration-150 text-sm font-medium rounded-md w-full sm:w-auto px-3 py-2 text-center" onClick={generateImage}>
              {loading ? "Sharing..." : "Share with the community"}
            </button>
          </div>

        </form>

      </section>



    </>
  )
}

export default CreatePost;