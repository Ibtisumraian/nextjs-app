import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdQuickreply } from "react-icons/md";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const WhyChooseUs = () => {

  return (
    <div className="bg-white py-16 px-4 text-gray-800">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-500">
          Why Choose Us?
        </h2>
        <p className="text-gray-500 mb-10">
          Discover what makes our service stand out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* item 1 */}
            <div
              
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-yellow-400/20 border border-yellow-300 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-yellow-600">               
                <RiMoneyDollarCircleFill />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600 text-sm">Find the lowest prices on hotels and flights, backed by our guarantee.</p>
            </div>
         {/* item 2 */}
            <div
              
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-yellow-400/20 border border-yellow-300 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-yellow-600">
                <MdQuickreply />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Easy & Quick Booking
              </h3>
              <p className="text-gray-600 text-sm">Book your trip in minutes with our seamless and intuitive interface.</p>
            </div>
         {/* item 3 */}
            <div
              
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-yellow-400/20 border border-yellow-300 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-yellow-600">
                <MdOutlineMobileFriendly />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Mobile First
              </h3>
              <p className="text-gray-600 text-sm">Manage your bookings on the go with our fully responsive platform.</p>
            </div>
         {/* item 4 */}
            <div
              
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-yellow-400/20 border border-yellow-300 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-yellow-600">
                <RiCustomerService2Fill />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                24/7 Customer Care
              </h3>
              <p className="text-gray-600 text-sm">Our support team is available around the clock to assist you with any issues.</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
