import React from "react";
import "./news.css";
import NewsPageComponent from "src/components/news-page-component/news-page-component";
import { v4 as uuidv4 } from "uuid";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import Modal from "react-modal";
import SubscribeModal from "src/components/modals/subscribe/subscribe";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    right: "auto",
    bottom: "auto",
    outline: "1px solid black",
    border: "none",
    borderRadius: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};
Modal.setAppElement("#root");

const array = [1, 1, 1, 1];
const News = () => {
  document.title = "News";

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("It goes hard");
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SubscribeModal />
      </Modal>
      <section className="news_page">
        <SearchComp title="Search" placeholder="Search news" />
        <br />
        <h2>News</h2>
        <div className="news_page_list">
          <button onClick={openModal} type="button">
            Subscribe
          </button>
          {array.map((el) => {
            return (
              <NewsPageComponent
                detail="/dashboard/news/another"
                key={uuidv4()}
              />
            );
          })}
        </div>
      </section>
      ;
    </>
  );
};

export default News;
