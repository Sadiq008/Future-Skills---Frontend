import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const sectionRefs = useRef({});

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const search_parameters = Object.keys(Object.assign({}, ...cards));

  function search(cards) {
    return cards.filter((card) =>
      search_parameters.some((parameter) =>
        card[parameter].toString().includes(query)
      )
    );
  }

  const handleLinkClick = (title) => {
    if (sectionRefs.current[title]) {
      sectionRefs.current[title].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-36">
        <div>
          <h1 className="text-center text-6xl">How can we help?</h1>
          <div>
            <input
              type="text"
              style={{ height: "3.2rem", width: "40rem" }}
              className="mt-10 outline-none border border-gray-500 rounded-md text-xl px-2"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <span>
              <button className="text-3xl border border-gray-500 rounded-md ml-2 h-[3.2rem] w-[2rem] absolute mt-10 pb-1">
                →
              </button>
            </span>
          </div>
          <center>
            {search(cards).map((carddisplay) => {
              if (query) {
                return (
                  <div
                    key={carddisplay.title}
                    ref={(el) => (sectionRefs.current[carddisplay.title] = el)}
                    className="box py-4 mt-4 border border-gray-500 rounded-lg hover:bg-gray-300"
                  >
                    <Link
                      to={`#${carddisplay.title}`}
                      onClick={() => handleLinkClick(carddisplay.title)}
                      className="cursor-pointer"
                    >
                      <div className="card">
                        <div className="heading">
                          <h3 className="text-xl font-semibold">
                            {carddisplay.title}
                          </h3>
                          <div className="author">
                            <p className="mt-2">{carddisplay.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </center>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-40">
        <div className="grid grid-cols-6 md:grid-cols-2 gap-6 max-w-5xl">
          {cards.map((card) => (
            <div
              key={card.title}
              ref={(el) => (sectionRefs.current[card.title] = el)}
              className="p-6 border rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
