/* eslint-disable react/prop-types */

const FormField = ({ labelName, type, name, value, placeholder, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <>
      <div>
        <div className="flex items-center mb-2 gap-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{labelName}</label>
          {
            isSurpriseMe && (
              <button type="button" onClick={handleSurpriseMe} className="bg-[#ececf1] rounded-[5px] text-sm text-black py-1 px-2 font-bold hover:bg-[#d7d7da] transition-all duration-100 ease-linear">Surprise Me</button>
            )
          }

        </div>
          <input type={type} id={name} name={name} value={value} placeholder={placeholder} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-700 focus:border-sky-700 outline-none block w-full p-2 px-4" />
      </div>
    </>
  )
}

export default FormField