export default function Footer() {
    return (
      <footer className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-gray-700 text-lg font-semibold">Saleor</h2>
            <ul className="mt-4 space-y-2">
              {/* Placeholder links */}
              <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">Collections</h2>
            <ul className="mt-4 space-y-2">
              {/* Placeholder links */}
              <li><a href="#" className="text-gray-600 hover:underline">Featured Products</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Summer Picks</a></li>
            </ul>
          </div>
        </div>
  
        <div className="border-t mt-10">
          <div className="max-w-6xl mx-auto px-4 py-6 md:flex md:justify-between">
            <p className="text-gray-600 text-sm text-center md:text-left">Copyright © 2024 Your Store, Inc.</p>
            <p className="text-gray-600 text-sm text-center md:text-right">Powered by Saleor</p>
          </div>
        </div>
      </footer>
    );
  }
  