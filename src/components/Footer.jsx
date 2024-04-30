const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-2 bg-primary">
      <p className="">BOUBKER AOUABE &#169; 2024</p>
      <p>"Make it work, make it right, make it fast"</p>
      <div className="flex gap-2 mb-4">
        <a
          href="https://www.linkedin.com/in/aouabe-boubker-87a076225/"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/b-Aouabe" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/aouabeboubaker/" target="_blank">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
