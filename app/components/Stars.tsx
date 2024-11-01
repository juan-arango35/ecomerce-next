"use client";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          size={16}
          color={index < rating ? "#ffc107" : "#e4e5e9"}
          className="mr-1"
        />
      ))}
    </div>
  );
};

export default StarRating;
