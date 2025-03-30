
import '@fontsource/geist-sans';
import '@fontsource/geist-mono';



export default function Home() {
  return (
    <div className="p-8">
      {/* Text Styles */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Tailwind Test Heading
      </h1>
      
      {/* Background Color */}
      <div className="bg-amber-200 p-4 mb-4">
        <p className="text-gray-800">
          This background should be light green
        </p>
      </div>
      
      {/* Button with Hover Effect */}
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
        Test Button
      </button>
      
      {/* Responsive Test (change browser width) */}
      <div className="mt-4 md:text-xl lg:text-2xl text-purple-600">
        This text grows on larger screens
      </div>
    </div>
  )
}
