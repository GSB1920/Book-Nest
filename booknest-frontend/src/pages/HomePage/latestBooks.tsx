import React from "react";

const LatestBooks = () => {
  const Genres = [
    {
      sectionName: "Art of Fiction",
      books: [
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        },
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        },
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        },
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        }
      ],
    },
    {
      sectionName: "Narratives",
      books: [
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        },
      ],
    },
    {
      sectionName: "Novels",
      books: [
        {
          bookName: "BookName",
          supportText: "Support Text",
          coverPage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcO26kdi60I4raBpJSMFyJMX2AzPfb2D9Aw&s",
          ratings: null,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center px-60 space-y-10 py-20">
      {Genres.map((genre) => (
        <div key={genre.sectionName} className="overflow-hidden">
          <div className="flex justify-between">
            <div className="text-white font-bold text-3xl">
              {genre.sectionName}
            </div>
            <div className="text-yellow-600">See More</div>
          </div>
          <div className="flex flex-row space-x-16 text-white py-6">
            {genre.books.map((book) => (
              <div key={book.bookName}>
                <img
                  className="h-80 w-64"
                  src={book.coverPage}
                  alt="New Arrivals"
                />
                <div className="w-64 text-center text-white text-3xl font-bold">
                  {book.bookName}
                </div>
                <div className="w-64 text-center text-white text-xl font-bold">
                  {book.supportText}
                </div>
                <div className="w-64 mt-2 text-center">
                  <img
                    src="https://w7.pngwing.com/pngs/589/360/png-transparent-star-customer-service-review-rating-star-text-logo-computer-wallpaper.png"
                    alt=""
                    className="h-6 mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestBooks;
