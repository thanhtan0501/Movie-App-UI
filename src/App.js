import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=d8d8f574";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
        <div className="flex justify-center items-center flex-col py-16 px-8 sm:px-16 max-[400px]:px-4">
            <h1 className="max-[400px]:text-[2rem]">Movie App UI</h1>
            <div className="w-[71%] mt-16 mx-0 mb-8 flex justify-center items-center sm:py-4 sm:px-7 py-6 px-7 rounded-[3rem] bg-[#1f2323] shadow-3xl">
                <input
                    placeholder="Search for movie..."
                    className="flex-1 border-none text-base font-raleway font-medium pr-4 outline-none text-[#a1a1a1] bg-[#1f2123] sm:text-2xl "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    className="sm:w-[35px] sm:h-[35px] cursor-pointer w-[20px] h-[20px]"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            <div className="w-full mt-12 flex justify-center items-center flex-wrap max-[400px]:mt-8 ">
                {movies?.length > 0 ? (
                    movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                ) : (
                    <div className="w-full mt-12 flex justify-center items-center ">
                        <h2 className="text-xl text-[#f9d3b4] font-raleway">
                            No movies found.
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
