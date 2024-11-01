"use client";
import React from "react";
import { Toaster, toast } from "sonner";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../lib/utils";

function AddProduct() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
    
     
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,   
          price: parseInt(form.price.value),
          quantity: parseInt(form.quantity.value),
          url: form.url.value,
          discription: form.discription.value,
        }),
      });

      toast.success("Product has been created");
    
      e.target.reset();
    } catch (error) {
      toast.error("Product has not been created");
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Toaster richColors />
      <h2 className="font-bold text-xl text-gray-800 dark:text-gray-200">
        Add Product
      </h2>
      <p className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-300">
        Login to aceternity if you can because we have a login flow yet
      </p>
      <form className="my-8" action="post" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Tyler" type="text" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" placeholder="Price" type="number" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="quantity">Quntity</Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="100"
            type="number"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="url">Product Img URL</Label>
          <Input  type="text" name="url" id="url" placeholder="URL" required  />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="discription">Description</Label>
          <Input
            id="discription"
            name="discription"
            placeholder="Product details"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-gray-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Add Product &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default AddProduct;
