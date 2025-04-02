export default function AnnouncementBar() {
    return (
      <div className="bg-indigo-900 text-white text-center py-3 px-4 text-sm shadow-md relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center">
          <span className="text-xl">🇨🇦</span>
        </div>
        <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-center">
          <span className="text-xl">⚜️</span>
        </div>
        <div className="font-medium">
          🔥 LIMITED TIME: Buy 2 Get 1 Free + FREE Shipping on Orders Over $49 | <span className="text-yellow-300">Proudly Made in Montreal</span>
        </div>
      </div>
    );
  }
