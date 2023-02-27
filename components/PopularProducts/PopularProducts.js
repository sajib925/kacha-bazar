import React from 'react'
import Card from '../Card/Card';
import img from "../../images/card/Kale-Sprouts-3oz.jpg"
import ProductsHeading from '../ProductsHeading/ProductsHeading';

const PopularProducts = () => {
  return (
    <section className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="mb-10 flex justify-center">
        <ProductsHeading
          title="Popular Products for Daily Shopping"
          description="See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping."
        />
      </div>

      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              offer="17% Off"
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
              offerQuantity="$ 10"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
            <Card
              img={img}
              name="each"
              title="Green Leaf Lettuce"
              price="$ 15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts