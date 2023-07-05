import bed from './Images/bed5.jpg';

import Dinning from './Images/Dinning7.jpeg';
import Soffaset from './Images/card12.jpg';


function Service() {
  return (
    <>
      <a href='Sofasets' class="text-decoration-none"> <button type="button" class="ms-5 btn btn-secondary btn-lg me-3 mb-3">
        Sofa Sets </button> </a>

      <a href='Beds' class="text-decoration-none">  <button type="button" class="btn btn-secondary btn-lg me-3 mb-3">
        Beds</button></a>

      <a href='Dinningtable' class="text-decoration-none">
        <button type="button" class="btn btn-secondary btn-lg me-3 mb-3">
          Dinningtable</button></a>


      <div className="container">

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <a href='Beds' className='text-decoration-none'>
              <div className="card mb-3">
                <img src={bed} className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Beds</h5>
                  <p className="card-text">
                    Bed makes every bedroom complete. But, Getting the right wooden bed size that suits all your comfort demands and gives an appealing look to the interiors may sound difficult to you. But it won’t be now! Because Wooden Street is here with a diverse range of modern bed designs in India ranging from majestic king size to space-efficient queen size beds with storage at highly competitive prices.

                    We have the finest quality of solid wood beds (लकड़ी के बेड) online that assures longevity and sturdiness and craft to deliver the premium features as always to customers. Whether you are looking out for traditional wooden beds (लकड़ी के बेड) or modular engineered wood or metal bed designs, we’ve got covered all.

                    Thus, we are here to provide the instant bedroom makeover that you have always looked forward to. The best part about it is that every sort of bed frame is available online in India at reasonable prices and can be ordered in just a few clicks. So, Lets buy beds online in India from WoodenStreet and thanks us later for our exceptional services.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a href='Sofasets' className='text-decoration-none'>
              <div className="card mb-3">
                <img src={Soffaset} className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Sofasets</h5>
                  <p className="card-text">
                    Sofa set is a quintessential element in the living room that defines the overall mood and tone of your home. It is a must-have furniture piece for every home, as you will find some of the best sofa online in India from Wooden Street, which will be the center of attraction for your guests to gaze on. Besides proffering comfort, a modern sofa set furniture provides plush comfort, so that your guests feel special every time they are at your home. Whether you are a couch potato or couch surfing, luxury sofa sets for drawing room serves the best. Therefore, living room sofa furniture is the central unit that uplifts the ambiance of the room.

                    WoodenStreet’s astounding cheap and best sofa set online range features a variety of designs, patterns, textures to maximize the style quotient of your living room. Our collection of premium sofas online in India proffers all types of high-standard material choices including solid wood, leatherette, fabrics, and many others. With the stylish sofa set designs, we assure you that your investment serves for a longer time. Thus, all sorts of modern sofa sets online in India are durability certified and provide robustness even for rough and tough usage. Moreover, our furniture sofa set prices are great competitive and for quality that makes a great deal for our customers. So, whom are you waiting for? Shop the luxury sofa set design from our collection and enjoy the incredible shopping with us.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <a href='Dinningtable' className='text-decoration-none'>
              <div className="card mb-3">
                <img src={Dinning} className="card-img-top" alt="Card 1" />
                <div className="card-body">
                  <h5 className="card-title">Dinning Table</h5>
                  <p className="card-text">
                    A dining table set isn’t just a place where you sit to have your meals but also a place where you connect with your family and friends. So, create the splash of memories with an alluring look of furniture by exploring our selection of dining table sets online. Featuring from 2 seater dining table sets to 8 seater dining table and from extendable to dining table sets with bench, we have everything what your interior desires. Spacious tables, comfortable chairs, vibrant and rich wood finish designs will sure add grandeur to any living or dining room space. Enjoy your suppers and quality time on veneer tabletops and fashioned from soft cushioned seats of dining furniture right in your home. The starting price in the various categories of dining table sets starts from: -

                    Category Name

                    Starting From

                    Dining Tables

                    Rs 11,989

                    2 Seater Dining Table Sets

                    Rs 16,989

                    4 Seater Dining Table Sets

                    Rs 10,399

                    6 Seater Dining Table Sets

                    Rs 37,899

                    8 Seater Dining Table Sets

                    Rs 56,399

                    Extendable Dining Table Sets

                    Rs 18,999

                    Round Dining Table Sets

                    Rs 27,499


                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>


    </>
  )
}

export default Service;