import React from 'react'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'


export default function Page() {
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
        <h1 class="pt-4 font-bold text-center text-lg">Welcome to GDSC USK</h1>  
        <h1 class="font-bold text-center text-gray-600 text-sm mb-5">Sign in to your account</h1>
        <label class="font-semibold text-sm text-black-600 pb-1 block">Email address</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label class="font-semibold text-sm text-black-600 pb-1 block">Password</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <div class="grid grid-cols-2">
  
  <div class="col-start-1">
  <div class="inline-flex items-center">
    <label class="relative inline-block">
    <input
      id="login"
      type="checkbox"
      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
    />
    <div class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M5 10L8 13L15 6" />
      </svg>
    </div>
  </label>

  <label
    class="pl-2 pb-2 mt-px font-light text-gray-700 cursor-pointer select-none"
    for="login"
  >
    Remember Me
  </label>
  </div>
  </div>
  
  <div class="col-start-2 text-blue-500 col-span-2">Forgot Password?</div>
</div>
        <button type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Sign In</span>
        </button>
      </div>
      <div class="p-5">
        <h1 class="text-center pb-2 font-bold">Or continue with</h1>
          <div class="grid grid-cols-3 gap-1">
              <button type="button" class="transition duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block bg-red-500">
                <div class="flex items-center justify-center">
                  <img class="tem-center" src="/assets/logo/google.png" alt="Deskripsi Gambar"/>
                  <span class="ml-2">Google</span>
                </div>
              </button>
              <button type="button" class="transition duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block bg-black">
                <div class="flex items-center justify-center">
                  <img class="tem-center" src="/assets/logo/apple.png" alt="Deskripsi Gambar"/>
                  <span class="ml-2">Apple</span>
                </div>
              </button>
              <button type="button" class="transition duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block bg-blue-700">
                <div class="flex items-center justify-center">
                  <img class="tem-center" src="/assets/logo/fb.png" alt="Deskripsi Gambar"/>
                  <span class="ml-2">Facebook</span>
                </div>
              </button>
          </div>
          <p class="text-center pt-3 text-gray-500">Don't have an account? <span class="text-blue-500 font-bold cursor-pointer">Sign Up</span></p>
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


