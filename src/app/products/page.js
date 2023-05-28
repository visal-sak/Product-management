

import React from "react";
import Card from "@/components/card";
import CardCategory from "@/components/cardcategory";
import CardUser from "@/components/cardUser";
import Header from "@/components/header";


export default async function Page() {
  const products = await getProduct();
  const categorys = await getCategory();
  const users = await getUsers();
  return (
    <>
      <Header />
      <h1 className="tracking-tight font-extrabold text-3xl bg-gradient-to-r from-green-300 via-lime-400 to-sky-500 text-transparent bg-clip-text animate-gradient m-4">
        {" "}
        Product Management
      </h1>
      <main className="md:container md:mx-auto flex min-h-screen flex-wrap items-center justify-around p-2 border-0 drop-shadow-sm">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.images}
            category={product.category.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </main>
      <h1 className=" tracking-tight font-extrabold text-3xl  bg-gradient-to-r from-green-300 via-lime-400 to-sky-500 text-transparent bg-clip-text animate-gradient m-6">
        {" "}
        All Category
      </h1>
      <main className="md:container md:mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 border-0 drop-shadow-sm">
        {categorys.map((category) => (
          <CardCategory
            key={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </main>
      <h1 className="tracking-tight font-extrabold text-3xl  bg-gradient-to-r from-green-300 via-lime-400 to-sky-500 text-transparent bg-clip-text animate-gradient m-7">
        {" "}
        All User
      </h1>
      <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 border-0 drop-shadow-sm">
        {users.map((user) => (
          <CardUser
            key={user.id}
            name={user.name}
            image={user.avatar}
            role={user.role}
          />
        ))}
      </main>
    </>
  );
}

async function getProduct() {
  const resp = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=20"
  );
  return resp.json();
}

async function getCategory() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
    cache: "no-store",
  });
  return res.json();
}

async function getUsers() {
  const resp = await fetch("https://api.escuelajs.co/api/v1/users?limit=8", {
    cache: "no-store",
  });
  return resp.json();
}
