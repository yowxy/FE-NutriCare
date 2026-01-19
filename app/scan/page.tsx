"use client";
import Navbar from "@/components/Navbar";
import {
  Camera, Upload, Image as ImageIcon, Sparkles, Zap, Clock, CheckCircle2, X,
  Flame, Activity, Droplet, Wheat, Share2, Download, TrendingUp, Award,
  ChevronRight, Eye, BarChart3, Video, Scan as ScanIcon, Target, Star, Trophy,
  Apple, Leaf, Utensils, Heart, Info, Plus, Minus
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  confidence: number;
  ingredients: string[];
  healthScore: number;
  mealType: string;
}

export default function ScanPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [nutritionData, setNutritionData] = useState<NutritionData | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [scanCount, setScanCount] = useState(12);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        handleImageUpload(file);
      }
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => handleImageUpload(file));
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setUploadedImages(prev => [...prev, imageUrl]);
      setCurrentImage(imageUrl);
      simulateProcessing();
    };
    reader.readAsDataURL(file);
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setShowResults(false);
    setProcessingProgress(0);

    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
      setScanCount(prev => prev + 1);
      setNutritionData({
        calories: 520,
        protein: 32,
        carbs: 58,
        fat: 18,
        fiber: 8,
        sugar: 12,
        sodium: 680,
        confidence: 96,
        ingredients: ["Chicken Breast", "Brown Rice", "Broccoli", "Olive Oil", "Garlic", "Soy Sauce"],
        healthScore: 85,
        mealType: "Lunch"
      });
    }, 2500);
  };

  const clearImage = () => {
    setCurrentImage(null);
    setUploadedImages([]);
    setShowResults(false);
    setNutritionData(null);
    setShowCamera(false);
  };

  const startCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied:", err);
      setShowCamera(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0);
      const imageUrl = canvas.toDataURL('image/jpeg');
      setUploadedImages(prev => [...prev, imageUrl]);
      setCurrentImage(imageUrl);
      setShowCamera(false);

      const stream = videoRef.current.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());

      simulateProcessing();
    }
  };

  const recentScans = [
    { name: "Grilled Salmon Bowl", calories: 480, time: "1h ago", image: "🍱", score: 92, type: "Dinner" },
    { name: "Greek Yogurt Parfait", calories: 280, time: "3h ago", image: "🥣", score: 88, type: "Breakfast" },
    { name: "Chicken Caesar Salad", calories: 420, time: "5h ago", image: "🥗", score: 85, type: "Lunch" },
  ];

  const suggestions = [
    { name: "Add Avocado", benefit: "+8g healthy fats", icon: "🥑" },
    { name: "Reduce Sodium", benefit: "-200mg salt", icon: "🧂" },
    { name: "More Vegetables", benefit: "+5g fiber", icon: "🥦" },
  ];

  const NutrientCard = ({ icon: Icon, label, value, unit, percentage, daily }: any) => (
    <div className="group relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <p className="text-xs text-emerald-600 font-bold">{daily}%</p>
            <p className="text-[10px] text-gray-500">Daily</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <p className="text-3xl font-black text-gray-900">{value}</p>
            <p className="text-lg text-gray-500 font-semibold">{unit}</p>
          </div>
          <p className="text-sm text-gray-600 font-semibold">{label}</p>
        </div>

        <div className="mt-4 relative">
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Navbar />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-bold mb-5 shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-105 transition-all">
            <Sparkles className="w-5 h-5" />
            AI-Powered • 96% Accuracy • Real-time Analysis
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent leading-tight">
            Smart Food Scanner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Instantly analyze your meals with cutting-edge AI technology. Get detailed nutritional insights and personalized recommendations.
          </p>

          {/* Achievement Badges */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg border-2 border-emerald-100 hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <Trophy className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-gray-700">5 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg border-2 border-emerald-100 hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <Target className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-gray-700">{scanCount} Scans</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg border-2 border-emerald-100 hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
              <Star className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-gray-700">Health Expert</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Area */}
          <div className="lg:col-span-2 space-y-6">

            {/* Camera View */}
            {showCamera && (
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden">
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 border-4 border-emerald-500 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-emerald-400 rounded-lg" />
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                    <button
                      onClick={capturePhoto}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-300 hover:scale-110 transition-transform"
                    >
                      <Camera className="w-8 h-8" />
                    </button>
                    <button
                      onClick={() => {
                        setShowCamera(false);
                        const stream = videoRef.current?.srcObject as MediaStream;
                        stream?.getTracks().forEach(track => track.stop());
                      }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-2xl hover:scale-110 transition-transform"
                    >
                      <X className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Main Card */}
            {!showCamera && (
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">

                {!currentImage ? (
                  <div className="p-8 sm:p-12">
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-3 border-dashed rounded-3xl p-12 sm:p-16 transition-all duration-500 ${isDragging
                          ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 scale-105 shadow-2xl"
                          : "border-emerald-200 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-gray-50 hover:to-emerald-50"
                        }`}
                    >
                      {/* Corner decorations */}
                      <div className="absolute top-4 left-4 w-10 h-10 border-t-4 border-l-4 border-emerald-400 rounded-tl-2xl" />
                      <div className="absolute top-4 right-4 w-10 h-10 border-t-4 border-r-4 border-emerald-400 rounded-tr-2xl" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 border-b-4 border-l-4 border-emerald-400 rounded-bl-2xl" />
                      <div className="absolute bottom-4 right-4 w-10 h-10 border-b-4 border-r-4 border-emerald-400 rounded-br-2xl" />

                      <div className="text-center relative z-10">
                        <div className="relative inline-block mb-8">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full blur-3xl opacity-40 animate-pulse" />
                          <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform duration-300">
                            <ScanIcon className="w-16 h-16 text-emerald-600 animate-pulse" />
                          </div>
                        </div>

                        <h3 className="text-3xl font-black text-gray-900 mb-3">
                          {isDragging ? "🎯 Drop it here!" : "Upload Your Meal"}
                        </h3>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                          Drag & drop your food images, use your camera, or browse files. Our AI will analyze everything instantly.
                        </p>

                        {/* Upload Buttons */}
                        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                          <button
                            onClick={startCamera}
                            className="group flex flex-col items-center gap-3 px-6 py-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                          >
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                              <Video className="w-7 h-7" />
                            </div>
                            <span className="text-sm">Live Camera</span>
                          </button>

                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="group flex flex-col items-center gap-3 px-6 py-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                          >
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                              <Camera className="w-7 h-7" />
                            </div>
                            <span className="text-sm">Take Photo</span>
                          </button>

                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="group flex flex-col items-center gap-3 px-6 py-6 bg-white border-3 border-emerald-200 text-gray-700 rounded-2xl font-bold hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg"
                          >
                            <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all">
                              <Upload className="w-7 h-7 text-emerald-600" />
                            </div>
                            <span className="text-sm">Browse Files</span>
                          </button>
                        </div>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleFileSelect}
                          className="hidden"
                        />

                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t-2 border-emerald-100">
                          {[
                            { icon: Zap, text: "Instant", subtext: "< 3 seconds" },
                            { icon: Award, text: "96% Accurate", subtext: "AI Powered" },
                            { icon: Eye, text: "Detailed", subtext: "Full breakdown" },
                            { icon: Heart, text: "Smart Tips", subtext: "Personalized" },
                          ].map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                              <div key={idx} className="text-center group cursor-pointer">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-md">
                                  <Icon className="w-7 h-7 text-emerald-600" />
                                </div>
                                <p className="text-sm font-bold text-gray-900">{feature.text}</p>
                                <p className="text-xs text-gray-500 mt-1">{feature.subtext}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Image Preview */}
                    <div className="relative group">
                      <img
                        src={currentImage}
                        alt="Uploaded meal"
                        className="w-full h-auto max-h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Action Buttons */}
                      <div className="absolute top-6 right-6 flex gap-3">
                        <button className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-700 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all shadow-xl">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-700 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all shadow-xl">
                          <Download className="w-5 h-5" />
                        </button>
                        <button
                          onClick={clearImage}
                          className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-xl"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Gallery */}
                      {uploadedImages.length > 1 && (
                        <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto pb-2">
                          {uploadedImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImage(img)}
                              className={`w-20 h-20 rounded-xl overflow-hidden border-3 shrink-0 transition-all shadow-lg hover:scale-110 ${img === currentImage
                                  ? "border-emerald-500 scale-110 ring-4 ring-emerald-200"
                                  : "border-white/80 hover:border-emerald-300"
                                }`}
                            >
                              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Results */}
                    <div className="p-8">
                      {isProcessing ? (
                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200 shadow-inner">
                          <div className="flex items-center gap-5 mb-6">
                            <div className="relative">
                              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                              <Sparkles className="w-7 h-7 text-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-gray-900 text-2xl mb-1">Analyzing Your Meal...</p>
                              <p className="text-gray-600">AI is identifying ingredients and calculating nutrition</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between text-sm font-semibold text-gray-700">
                              <span>Processing</span>
                              <span>{processingProgress}%</span>
                            </div>
                            <div className="relative w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
                              <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                                style={{ width: `${processingProgress}%` }}
                              >
                                <div className="absolute inset-0 bg-white/30 animate-pulse" />
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-6">
                              {[
                                { label: "Detecting Food", done: processingProgress > 30 },
                                { label: "Analyzing Nutrition", done: processingProgress > 60 },
                                { label: "Generating Report", done: processingProgress > 90 },
                              ].map((step, idx) => (
                                <div key={idx} className={`flex items-center gap-2 text-sm ${step.done ? 'text-emerald-600' : 'text-gray-400'}`}>
                                  {step.done ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                  <span className="font-medium">{step.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : showResults && nutritionData ? (
                        <div className="space-y-8">
                          {/* Score Cards */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                              <div className="relative z-10">
                                <p className="text-emerald-100 text-sm font-semibold mb-2 flex items-center gap-2">
                                  <Award className="w-4 h-4" />
                                  Health Score
                                </p>
                                <div className="flex items-baseline gap-2 mb-3">
                                  <p className="text-6xl font-black">{nutritionData.healthScore}</p>
                                  <p className="text-2xl text-emerald-100">/100</p>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-100 text-sm font-medium">
                                  <TrendingUp className="w-4 h-4" />
                                  <span>Excellent nutritional balance</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-lg relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full -mr-16 -mt-16 opacity-50" />
                              <div className="relative z-10">
                                <p className="text-gray-600 text-sm font-semibold mb-2 flex items-center gap-2">
                                  <Target className="w-4 h-4 text-emerald-600" />
                                  AI Confidence
                                </p>
                                <div className="flex items-baseline gap-2 mb-3">
                                  <p className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">{nutritionData.confidence}</p>
                                  <p className="text-2xl text-gray-400">%</p>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>High accuracy - Results reliable</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Meal Badges */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-bold flex items-center gap-2 shadow-md">
                              <Utensils className="w-4 h-4" />
                              {nutritionData.mealType}
                            </div>
                            <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-bold flex items-center gap-2 shadow-md">
                              <Flame className="w-4 h-4" />
                              {nutritionData.calories} calories
                            </div>
                          </div>

                          {/* Nutrition Grid */}
                          <div>
                            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                              <BarChart3 className="w-6 h-6 text-emerald-600" />
                              Nutritional Breakdown
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              <NutrientCard icon={Activity} label="Protein" value={nutritionData.protein} unit="g" percentage={64} daily={64} />
                              <NutrientCard icon={Wheat} label="Carbs" value={nutritionData.carbs} unit="g" percentage={72} daily={19} />
                              <NutrientCard icon={Droplet} label="Fat" value={nutritionData.fat} unit="g" percentage={36} daily={28} />
                              <NutrientCard icon={Leaf} label="Fiber" value={nutritionData.fiber} unit="g" percentage={32} daily={32} />
                            </div>
                          </div>

                          {/* Ingredients */}
                          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-200">
                            <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                              <Eye className="w-5 h-5 text-emerald-600" />
                              Detected Ingredients
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {nutritionData.ingredients.map((ingredient, idx) => (
                                <span
                                  key={idx}
                                  className="px-4 py-2 bg-white border-2 border-emerald-200 text-gray-700 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 hover:border-emerald-400 transition-all cursor-pointer"
                                >
                                  {ingredient}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Suggestions */}
                          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-200">
                            <h3 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-emerald-600" />
                              Smart Suggestions
                            </h3>
                            <div className="space-y-3">
                              {suggestions.map((suggestion, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all group cursor-pointer border-2 border-transparent hover:border-emerald-300">
                                  <div className="text-3xl">{suggestion.icon}</div>
                                  <div className="flex-1">
                                    <p className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{suggestion.name}</p>
                                    <p className="text-sm text-gray-600">{suggestion.benefit}</p>
                                  </div>
                                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-4">
                            <button className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg">
                              <BarChart3 className="w-6 h-6" />
                              View Detailed Report
                            </button>
                            <button className="px-8 py-4 bg-white border-2 border-emerald-200 text-emerald-600 rounded-2xl font-bold hover:border-emerald-500 hover:bg-emerald-50 transition-all">
                              Save
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Progress */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-2xl shadow-emerald-200 p-6 text-white">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Your Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Daily Goal</span>
                    <span className="text-sm font-bold">75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-white rounded-full shadow-sm" style={{ width: "75%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
                  <div>
                    <p className="text-2xl font-black">{scanCount}</p>
                    <p className="text-xs text-emerald-100">Total Scans</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black">5</p>
                    <p className="text-xs text-emerald-100">Day Streak</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-100 p-6">
              <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                Pro Tips
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <Zap className="w-5 h-5" />, text: "Natural lighting = Better accuracy" },
                  { icon: <Camera className="w-5 h-5" />, text: "Capture entire meal in frame" },
                  { icon: <Target className="w-5 h-5" />, text: "Show all ingredients clearly" },
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all cursor-pointer group border-2 border-transparent hover:border-emerald-200">
                    <div className="w-11 h-11 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-md">
                      {tip.icon}
                    </div>
                    <p className="text-sm text-gray-700 pt-2 font-medium group-hover:text-gray-900">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Scans */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-black text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  Recent Scans
                </h3>
                <button className="text-xs text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-1 hover:gap-2 transition-all">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {recentScans.map((scan, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all cursor-pointer border-2 border-transparent hover:border-emerald-200 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all">
                      {scan.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate group-hover:text-emerald-600 transition-colors text-sm">
                        {scan.name}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">{scan.calories} cal • {scan.time}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: `${scan.score}%` }} />
                        </div>
                        <span className="text-xs text-emerald-600 font-bold">{scan.score}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
