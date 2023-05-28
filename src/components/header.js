import React from 'react'

export default function Header() {
  return (
    <header class="flex min-h-full m-5" data-aos="zoom-in-down">
      <main class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        <article class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
          <section class="mb-16 lg:my-auto lg:max-w-lg">
            <section class="mb-6 max-w-xl">
              <section>
                <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                  25% off this summer
                </p>
              </section>
              <h2 class="mb-6 max-w-lg text-3xl tracking-tight font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                Discover Fantasy <br />
                Products
                <span class="rounded- abg-gradient-to-r tracking-tight  bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                  SummerRae
                </span>
              </h2>
              <p class="text-base tracking-tight text-gray-700 md:text-lg">
                This is fantasy product that everyone need to buy .Discount 25%
                everyday
              </p>
            </section>
            <section class="flex items-center">
              <button
                type="button"
                class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
              >
              
                OrderNow
              </button>
              <a
                href="/"
                class="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                Watch Videos
              </a>
            </section>
          </section>
        </article>
        <section class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
          <section class="hidden w-56 items-center space-y-3 lg:flex">
            <section class="overflow-hidden rounded-xl bg-yellow-400">
              <img
                class="h-full w-full object-cover"
                data-aos="zoom-in-down"
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
          </section>
          <section class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
            <section class="h-40 overflow-hidden rounded-xl bg-green-600/60">
              <img
                class="mx-auto h-full w-full object-cover"
                data-aos="zoom-in-down"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
              <img
                class="mx-auto h-full w-full object-cover"
                data-aos="zoom-in-down"
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
            <section class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
              <img
                class="mx-auto h-full w-full object-cover"
                data-aos="zoom-in-down"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </section>
          </section>
        </section>
      </main>
    </header>
  );
}
