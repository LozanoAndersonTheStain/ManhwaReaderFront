import { Manhwa } from "~/types/manhwa";

interface ManhwaCardProps {
  manhwa: Manhwa;
  onClick?: () => void;
}

export default function ManhwaCard({ manhwa, onClick }: ManhwaCardProps) {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64">
        <img
          src={manhwa.coverUrl}
          alt={`${manhwa.title} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-semibold truncate">
            {manhwa.title}
          </h3>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {manhwa.author}
          </span>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {manhwa.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {manhwa.description}
        </p>
        <div className="flex justify-between mt-2">
          <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full">
            {manhwa.genre}
          </span>
          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
            {manhwa.status}
          </span>
        </div>
      </div>
    </div>
  );
}
