import Navbar from "@/components/Navbar";
import { Camera, Upload } from "lucide-react";

export default function Scan() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-gray-800">
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 mt-8 pb-10 text-center">
        <h1 className="text-4xl font-black mb-2">Food Scanner</h1>

        <p className="text-[19px] text-gray-500 mx-auto mb-8">
          Upload or capture your meal to analyze its nutrition
        </p>

        <div className="flex flex-col items-center justify-center gap-6 py-14 px-52 rounded-2xl bg-white border border-gray-100 shadow-sm shadow-emerald-50 backdrop-blur-xl">
          <div className="flex justify-center items-center bg-emerald-100 p-8 rounded-full">
            <Camera className="w-16 h-16 text-emerald-400" />
          </div>
          <h1 className="text-2xl font-black">Upload Your Meal</h1>
          <p className="text-gray-500 -mt-2 text-[17px]">
            Take a photo or upload an image to get instant nutritional analysis
          </p>
          <button className="flex w-full py-3 text-white text-sm font-medium bg-emerald-400 justify-center items-center rounded-xl cursor-pointer">
            <Camera className="w-4 h-4 mr-2" /> Take Photo
          </button>
          <button className="flex w-full py-3 -mt-2 text-black text-sm font-medium justify-center items-center rounded-xl border-2 border-gray-200 bg-gray-100/80 cursor-pointer hover:bg-amber-500 hover:text-white">
            <Upload className="w-4 h-4 mr-2" /> Upload Image
          </button>
        </div>
      </section>
    </div>
  );
}
