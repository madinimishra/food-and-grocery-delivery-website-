import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="px-4 py-3">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for restaurants, food or groceries…"
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
}
