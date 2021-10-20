const Modal = ({ title, content, category, imgSrc, setOpen }) => {
  return (
    <div className={" absolute top-1/2 left-1/2 right-1/2bg-200"}>
      <button onClick={() => setOpen(false)}>X</button>
      <div>
        <img className={"object-cover"} src={imgSrc} />
      </div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{category}</div>
    </div>
  );
};

export default Modal;
