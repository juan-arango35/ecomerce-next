import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex md:flex-row items-center justify-center gap-2 w-full p-4 md:w-4/5 mx-auto overflow-x-auto overflow-visible">
      <div className="relative flex-shrink-0 min-w-[18rem] w-full md:w-9/12 h-[12rem] md:h-[21rem]">
        <Image
          src="/images/Banner.png"
          alt="E-commerce Banner"
          layout="fill"
          objectFit="cover"
          className="rounded opacity-70"
        />
        <div className="absolute bottom-4 left-4 z-10 flex flex-col items-start justify-end text-white space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 text-blue-950">
            The Best Offers Just for You!
          </h1>
          <p className="text-lg text-blue-950">Up to 50% Off!</p>
          <Link
            href="/products"
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition"
          >
            Get Now
          </Link>
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-2 w-full h-[21rem] md:w-auto overflow-x-auto">
        <div className="flex-1 relative flex-shrink-0 min-w-[10rem] h-full">
          <Image
            src="/images/product1.png"
            alt="Product 1"
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
        <div className="flex-1 relative flex-shrink-0 min-w-[10rem] h-full">
          <Image
            src="/images/product2.png"
            alt="Product 2"
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
