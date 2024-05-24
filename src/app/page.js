import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  let results = [];
  try {
    const res = await fetch(url, { next: { revalidate: 10000 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();
    results = data.results;

  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
