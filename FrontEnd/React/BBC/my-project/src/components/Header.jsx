import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import "./News.css";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [list, setList] = useState([
    {
      title: "Fleeing the desert's shifting sands",
      content:
        "Rising temperatures and desertification are forcing many Mauritanians to leave their ancestral homes in search of a better life.",
      category: "Science & Environment",
      imgSrc:
        "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/9239/production/_121133473_071217442-1.jpg",
    },
    {
      title: "Cambridge Uni's looted cockerel to be returned",
      content:
        "The Benin bronze, known as an 'okukor', was given to Jesus College in Cambridge in 1905.",
      category: "Cambridgeshire",
      imgSrc:
        "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/9239/production/_121133473_071217442-1.jpg",
    },
    {
      title: "Sir Elton John scores first number one in 16 years",
      content:
        "The rock star topped the UK singles chart with Cold Heart, with the help of collaborator Dua Lipa.",
      category: "Entertainment & Arts",
      imgSrc:
        "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/9239/production/_121133473_071217442-1.jpg",
    },
  ]);

  return (
    <div className="main">
      <div className="main__header">
        <h3 className="main__title">News</h3>
      </div>
      <div className="main__container">
        {list.map((data) => (
          <Card
            onClick={() => {
              setOpen(true);
              setModalInfo(data);
            }}
            title={data.title}
            content={data.content}
            category={data.category}
            imgSrc={data.imgSrc}
          ></Card>
        ))}
      </div>
      {isOpen && <Modal {...modalInfo} setOpen={setOpen}></Modal>}
    </div>
  );
}

export default Header;
