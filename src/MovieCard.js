import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="group w-[310px] h-[460px] m-6 relative rounded-[12px] overflow-hidden border-none transition-all duration-500 ease-in-expo hover:scale-105 hover:shadow-[0_30px_18px_-8px_rgba(0,0,0,0.1)] max-[400px]:w-full max-[400px]:m-4">
            <div className="absolute p-4 w-full opacity-0 top-0 text-[#f9d3b4] group-hover:opacity-100">
                <p>{movie.Year}</p>
            </div>
            <img
                src={
                    movie.Poster
                        ? movie.Poster
                        : "http://via.placeholder.com/400"
                }
                alt={movie.Title}
                className="w-full h-full group-hover:opacity-30"
            />
            <div className="z-2 bg-[#343739] p-6 pt-4 absolute inset-x-0 bottom-0 group-hover:bg-transparent">
                <span className="font-raleway text-[13px] tracking-[2px] font-medium text-[#f0f0f0] uppercase ">
                    {movie.Type}
                </span>
                <h3 className="mt-[5px] font-roboto text-[#f9d3b4]">
                    {movie.Title}
                </h3>
            </div>
        </div>
    );
};

export default MovieCard;
