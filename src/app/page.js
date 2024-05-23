import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  if (!API_KEY) {
    return (
      <div>
        <h1>Error</h1>
        <p>
          API Key is not defined. Please set it in your environment variables.
        </p>
      </div>
    );
  }

  const genre = searchParams.genre || "fetchTrending";

  const url = `https://api.themoviedb.org/3${
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&language=en-US&page=1`;

  let data;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    data = await res.json();
  } catch (error) {
    
    console.log(error);
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
