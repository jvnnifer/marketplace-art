import React from "react";
import photo1 from "/girl-photo1.jpg";
import photo2 from "/family.jpg";

const Tips = () => {
  return (
    <div class="flex flex-col lg:flex-row m-5">
      <div className="flex flex-col mt-10 mr-0 lg:mr-8">
        <h1 className="text-gray-700 text-xl font-bold px-4 py-2 bg-blue-300">Must Read</h1>
        <div className="bg-blue-100">
          <div className="flex flex-row">
            <h1 className="text-gray-400 font-bold text-3xl px-4 py-2">1</h1>
            <a className="text-gray-800 text-lg font-semibold px-4 py-3 ">Perspektif orang terhadap anak ADHD: Bukan sebuah penyakit</a>
          </div>
          <div className="flex flex-row">
            <h1 className="text-gray-400 font-bold text-3xl px-4 py-2">2</h1>
            <a className="text-gray-800 text-lg font-semibold px-4 py-3 ">Terkini dari WHO: Edisi ADHD</a>
          </div>
          <div className="flex flex-row">
            <h1 className="text-gray-400 font-bold text-3xl px-4 py-2">3</h1>
            <a className="text-gray-800 text-lg font-semibold px-4 py-3 ">Peran keluarga dalam meningkatkan fokus anak</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="text-blue-800 font-bold text-2xl">|</span>
          <h1 className="text-gray-900 mx-2 my-1 font-semibold text-2xl">Terbaru</h1>
        </div>
        <div className="img-news relative w-50 h-50 text-white cursor-pointer">
          <img src={photo1} alt="" className="brightness-50" />
          <div className="absolute bottom-5 inset-x-3">
            <h1 className="font-bold text-3xl hover:underline">Kemampuan belajar anak ADHD bisa ditingkatkan melalui beberapa tahapan.</h1>
            <p className="text-sm">Menurut laporan dari World Health Organization, anak ADHD mengalami beberapa kesulitan belajar</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col">
            <img src={photo2} alt="" className="w-42 h-32" />
            <h2 className="font-bold cursor-pointer hover:underline text-dark-blue">5 Tips to Save Money Booking Your Next Hotel Room</h2>
            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="flex flex-col">
            <img src={photo2} alt="" className="w-42 h-32" />
            <h2 className="font-bold cursor-pointer hover:underline text-dark-blue">5 Tips to Save Money Booking Your Next Hotel Room</h2>
            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="flex flex-col">
            <img src={photo2} alt="" className="w-42 h-32" />
            <h2 className="font-bold cursor-pointer hover:underline text-dark-blue">5 Tips to Save Money Booking Your Next Hotel Room</h2>
            <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
