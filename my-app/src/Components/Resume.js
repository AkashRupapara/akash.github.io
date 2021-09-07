import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navigation from './Navigation';

const styleResume = {
  width: "100%"
};

const Resume = () => {
  return (
    <div style={{width: "100%"}}>
      <center>
        <Document file="Resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </center>

    </div>

  );
}

export default Resume;