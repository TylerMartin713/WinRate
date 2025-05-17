export const MediaCard = ({ media }) => (
  <div className="relative bg-white rounded-xl shadow-xl p-6 mb-4 w-full flex items-center">
    {/* Left: Ticker symbol */}
    <div className="flex-1">
      <div className="text-2xl font-bold text-gray-800 mb-1">
        {media.ticker?.symbol}
      </div>
    </div>
    {/* Right: Image */}
    <div className="flex-shrink-0 ml-4">
      <img
        src={media.picture}
        alt={media.ticker?.symbol || "media"}
        className="w-full h-50 object-cover rounded-lg border-2 border-emerald-500"
        style={{ minWidth: "10rem", minHeight: "10rem" }}
      />
    </div>
  </div>
);
