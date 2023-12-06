import "./DownloadButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const filePath = "/cv.pdf";
    const anchor = document.createElement("a");
    anchor.href = process.env.PUBLIC_URL + filePath;
    anchor.download = "cv.pdf";
    anchor.click();
  };

  return (
    <div className="button_container">
      <button onClick={handleDownload} className="button">
        get pdf
      </button>
    </div>
  );
};

export default DownloadButton;
