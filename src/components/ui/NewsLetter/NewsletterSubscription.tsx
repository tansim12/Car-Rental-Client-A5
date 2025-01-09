import { useState, useRef, useEffect } from "react";

import toast from "react-hot-toast";

import newsLetterImg from "../../../assets/newsletter.png";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  //   const { isSuccess, mutate } = useNewsLetterCreate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // mutate({ payload: { email } });
    toast.success("Thank you for joining our camping community!");
    setIsSubscribed(true);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center overflow-hidden bg-beige text-white"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div
          className={`w-full md:w-1/2 mb-8 md:mb-0 transition-opacity duration-700 ease-in-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-forest-green mb-6">
            Join Our Camping Community
          </h1>
          <p className="text-lg text-brown mb-8">
            Get exclusive tips, gear reviews, and adventure inspiration straight
            to your inbox!
          </p>
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full max-w-md px-4 py-2 text-lg rounded-lg border-2 border-brown focus:outline-none focus:border-forest-green mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold text-beige bg-secondary text-black rounded-lg hover:bg-brown focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-xl text-forest-green font-semibold">
              Thanks for subscribing!
            </div>
          )}
        </div>
        <div
          className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
          }`}
        >
          <img
            src={newsLetterImg}
            alt="Camping scene"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
