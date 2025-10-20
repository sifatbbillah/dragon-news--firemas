import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;


  return (
    <div className="bg-base-100 shadow-md rounded-xl p-5 w-full max-w-xl mx-auto">
      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-4">
        {title}
      </h2>

      {/* Image */}
      <div className="my-3">
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {details.length > 180 ? details.slice(0, 180) + "..." : details}
        <span className="text-orange-500 font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3 mt-2 text-sm">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(rating?.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">
            {rating?.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
