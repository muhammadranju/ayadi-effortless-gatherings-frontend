import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const ChooseYourWay = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="lg:container md:max-w-7xl mx-auto mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-4  lg:text-5xl font-bold leading-none tracking-tight text-gray-900 text-3xl md:mx-auto font-tinos">
          Choose Your Way
        </h2>
        <p className="text-base text-gray-700 md:text-lg lg:-mb-5">
          Build your own menu or choose from our curated set menus
        </p>
      </div>
      <div className="grid gap-8 row-gap-12 lg:grid-cols-2 lg:container md:max-w-7xl mx-auto">
        <div className="max-w-md sm:mx-auto text-center border py-10 px-12 space-y-8 rounded bg-neutral-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <Image
              src={"/icons/heat.png"}
              width={200}
              height={200}
              className="w-44 h-44 object-contain"
              alt="heat"
            />
          </div>
          <h6 className=" text-4xl font-medium leading-5 font-tinos">
            Build Your Own
          </h6>
          <p className=" text-sm text-gray-600">
            Choose 3 classics, 1 salad, and 2 signature items to create your
            perfect menu
          </p>
          <Link href={"/build-your-menu"}>
            <Button className="inline-flex items-center font-semibold bg-green-500 text-white transition-colors duration-200 hover:bg-green-600 rounded px-16 py-5 inset-shadow-xs">
              Start Selecting
            </Button>
          </Link>
        </div>
        <div className="max-w-md sm:mx-auto text-center border py-10 px-12 space-y-8 rounded bg-neutral-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <Image
              src={"/icons/menu.png"}
              width={200}
              height={200}
              className="w-44 h-44 object-contain"
              alt="heat"
            />
          </div>
          <h6 className=" text-4xl font-medium leading-5 font-tinos">
            Set Menus
          </h6>
          <p className=" text-sm text-gray-600">
            Curated menus by our chefs for quick and easy ordering
          </p>
          <Link href={"/packages"}>
            <Button className="inline-flex items-center font-semibold bg-orange-500 text-white transition-colors duration-200 hover:bg-orange-600 rounded px-16 py-5 inset-shadow-xs">
              View Set Menus
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
