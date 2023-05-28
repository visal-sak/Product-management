import React from 'react'

export default function CardUser({name,image,role}) {
  return (
    <main
      className="mx-auto my-10 flex max-w-xs flex-col items-center border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left bg-white hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-lime-300 to-sky-400 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      data-aos="zoom-in-down"
    >
      <section className="mb-4 md:mr-6 md:mb-0">
        <img
          className="h-56 rounded-lg object-cover md:w-56"
          src={image}
          alt=""
        />
      </section>
      <section className="">
        <p className="text-2xl font-medium tracking-tight text-gray-900">
          {name}
        </p>
        <p className="mb-4 text-sm font-medium tracking-tight text-gray-700">
          {role}
        </p>
        <section className="flex space-x-2">
          <section className="flex flex-col items-center rounded-xl bg-emerald-100 px-4 py-2 tracking-tight">
            <p className="text-sm font-medium text-gray-500">Articles</p>
            <p className="text-xl font-medium text-gray-700">13</p>
          </section>
          <section className="flex flex-col items-center rounded-xl bg-emerald-100 px-4 py-2 tracking-tight">
            <p className="text-sm font-medium text-gray-500">Papers</p>
            <p className="text-xl font-medium text-gray-700">7</p>
          </section>
          <section className="flex flex-col items-center rounded-xl bg-emerald-100 px-4 py-2 tracking-tight">
            <p className="text-sm font-medium text-gray-500">Followers</p>
            <p className="text-xl font-medium text-gray-700">2.5k</p>
          </section>
          <section className=""></section>
        </section>
        <section className="mb-3"></section>
        <section className="flex space-x-2">
          <button className="w-full tracking-tight  border-0 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
            Message
          </button>
          <button className="w-full  border-0 border-transparent text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
            Follow
          </button>
        </section>
      </section>
    </main>
  );
}
