import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "../Header/Header.css";
import BookListing from "../BookListing/BookListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../BookListing/BookApi";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import { SiBookstack } from "react-icons/si";

const Home = () => {
  const { t } = useTranslation();

  const [searchQuery] = useState(""); // store search query in parent state

  const dispatch = useDispatch();

  // Access Redux state
  const { books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks()); // Dispatch fetchBooks whenever searchQuery changes
  }, [searchQuery, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(books, "books");

  return (
    <div className="holder">
      <header>
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalized">
            {t("homeScreenHeader")}
          </h2>
          <br />
          <p className="header-text text-3xl font-extrabold opacity-5">
            {t("description")}
          </p>
          {/* <SearchForm /> */}
        </div>
      </header>
      <BookListing books={books} />
      <div>
        <footer className="fixed bottom-0 left-0 right-0 h-[70px] bg-white flex items-center justify-between px-10 shadow-purple-300">
          <div className="text-gray-700 font-semibold flex justify-center gap-2">
            <span>
              <SiBookstack />
            </span>
            <span>{t("homePageHeader")}</span>
          </div>
          {/* <ul className="flex space-x-4 sm:space-x-6 text-black gap-3 font-semibold ">
          <li className=" cursor-pointer hover:text-purple-400 ">Google</li>
          <li className=" cursor-pointer hover:text-purple-400 ">Facebook</li>
          <li className=" cursor-pointer hover:text-purple-400 ">YouTube</li>
        </ul> */}
        </footer>
      </div>
    </div>
  );
};

export default Home;
