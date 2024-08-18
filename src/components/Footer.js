import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="bg-black text-white mt-28 pb-8 flex justify-evenly">
      <div className="grid grid-cols-5 md:grid-cols-5  max-w-6xl">
        <div className="p-6 border border-transparent rounded-lg">
          <h1 className="font-semibold text-2xl">Abstract</h1>
          <p className="mt-3">Branches</p>
        </div>
        <div className="p-6 border border-transparent rounded-lg ">
          <h1 className="font-semibold text-2xl">Resources</h1>
          <p className="mt-3">Blog</p>
          <p className="mt-3">Help Center</p>
          <p className="mt-3">Release Notes</p>
          <p className="mt-3">Status</p>
        </div>
        <div className="p-6 border border-transparent rounded-lg ">
          <h1 className="font-semibold text-2xl">Community</h1>
          <p className="mt-3">Twitter</p>
          <p className="mt-3">LinkedIn</p>
          <p className="mt-3">Facebook</p>
          <p className="mt-3">Dribble</p>
          <p className="mt-3">Podcast</p>
        </div>
        <div className="p-7 border border-transparent rounded-lg ">
          <h1 className="font-semibold text-2xl">Company</h1>
          <p className="mt-3">About Us</p>
          <p className="mt-3">Careers</p>
          <p className="mt-3">Legal</p>

          <h1 className="font-semibold mt-8">Contact Us</h1>
          <p className="mt-1">info@abstract.com</p>
        </div>
      </div>
      <div className="mr-20 mt-52">
        <img
          src={Logo}
          alt="Abstract Logo"
          className="rounded-full"
          style={{ height: "40px", width: "40px" }}
        />
        <p className="mt-3">© Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};
