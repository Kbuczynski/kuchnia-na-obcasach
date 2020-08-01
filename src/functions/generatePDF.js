import React from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PostPDF from "../components/Post/PostPDF";

export const generatePDF = async (fileName, documentData) => {
  const blob = await pdf(<PostPDF post={documentData} />).toBlob();
  saveAs(blob, fileName);
};
