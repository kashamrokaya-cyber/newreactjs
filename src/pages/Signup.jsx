import React from 'react'

const Signup = () => {
  return (
    <>
    
    
     <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit}  class="space-y-6">
      <div>
        <label  class="block text-sm/6 font-medium text-black">Email address</label>
        <div class="mt-2">
          <input id="email" value={data.email} type="email" name="email"  onChange={handleChange} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label  class="block text-sm/6 font-medium text-black">Password</label>
       
        </div>
        <div class="mt-2">
          <input id="password" type="password" value={data.password} name="password" onChange={handleChange}  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-black hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

  </div>
    
    </>
  )
}

export default Signup