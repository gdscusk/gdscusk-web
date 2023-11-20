import React from 'react'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'


export default function page() {
  return (
    <>
  <div>

     <>
<Header/>
     {/* <!-- component --> */}
{/* <!-- component --> */}
<div class=" min-h-screen bg-gray-100 flex flex-col justify-center sm:py-20 items-center">
  <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
    
    <div class="bg-white shadow rounded-lg divide-y divide-gray-200">
    
      <div class="p-10 w-500 h-200">
        <div class="item-center flex flex-col items-center justify-center"><img src="/assets/logo/logo.png" alt="Deskripsi Gambar" width="100" height="100"/></div>
        <h1 class="pt-4 font-bold text-center text-lg">Register Here</h1>  
        <h1 class="text-center text-gray-500 text-sm mb-5">Create your account</h1>
        <label class="font-semibold text-sm text-black-600 pb-1 block">Enter name</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-black-600 pb-1 block">Email address</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-black-600 pb-1 block">Password</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-black-600 pb-1 block">Confirm password</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Sign Up</span>
        </button>
      </div>
      <div class="pb-3">
          <p class="text-center pt-3 text-gray-500">Already have an account? <span class="text-blue-500 font-bold cursor-pointer">Sign In</span></p>
      </div>
    </div>
  </div>
</div>
    </>
  </div>
  <Footer/>
  </>
  )
}


