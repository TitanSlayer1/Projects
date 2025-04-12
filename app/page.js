import Image from "next/image";
import Slider from "./_component/Slider";
import CategoryList from "./_component/CategoryList";
import ProductList from "./_component/ProductList";

export default function Home() {
  return (
    <div className=" p-5 lg:p-16 md:p-15 px-16 sm:p-10">
      <Slider />

      <CategoryList />
      <ProductList />
      {/* Banner */}
      <Image
        src={"/banner.jpg"}
        alt="banner"
        width={900}
        height={400}
        className="w-full mt-12"
      />
    </div>
  );
}