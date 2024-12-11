import Container from "../Container";


const Newsletter = () => {
    return (

        <section className="Newsletter mt-[120px] bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700">

            <Container>
                <div className=" py-20 px-6 relative font-[sans-serif]">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-white text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
                        <div className="my-6">
                            <p className="text-base text-gray-200">Subscribe to our newsletter and stay up to date with the
                                latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
                            </p>
                        </div>

                        <div
                            className="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10">
                            <input type="email" placeholder="Enter your email"
                                className="w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none" />
                            <button
                                className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </Container>


        </section>

    );
};

export default Newsletter;