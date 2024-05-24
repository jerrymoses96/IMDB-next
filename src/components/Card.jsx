import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ result }) => {
  const imagePath = result.backdrop_path || result.poster_path;

  return (
    <div className="group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${imagePath}`}
          alt={result.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div>
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-semibold">
            {result.title || result.name}
            <p>jeirn</p>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
