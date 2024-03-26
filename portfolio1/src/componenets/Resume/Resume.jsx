import React from "react";
import "./Resume.css";
// import PDFViewer from './PDFViewer'
import { useState, useEffect } from "react";
// import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import pdf from "../../assets/Myresume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

function Resume() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  // const download = () => {
  //   const link = document.createElement('a');
  //   link.download = { pdf };

  //   link.href = pdf;

  //   link.click();
  // };

  return (
    <>
      <div className="main">
        <div className="btn">
        <button className="btn4"><a href={pdf} download="Boopathi V" target="_blank">Download</a></button>

        </div>

        <div className="pdf">
          <div className="res" style={{ width:"100%" }}>
            <Document file={pdf} className="doc">
              <Page pageNumber={1} style={{width:"100%"}}/>
            </Document>
          </div>
        </div>
        <div className="btn">
        <button className="btn4"><a href={pdf} download="Boopathi V" >Download</a></button>

        </div>
      </div>
    </>
  );
}

export default Resume;
