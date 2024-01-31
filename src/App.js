import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
  const arrayLinks = [
    "https://www.tiktok.com/embed/v2/7302044607838227717",
    "https://www.youtube.com/embed/ZCMNpTN58q0",
    "https://www.instagram.com/p/C2r5lCaSlor/embed",
    "https://www.instagram.com/reel/C1r5EnWrXPI",
    "https://www.youtube.com/embed/D0n_nGC_uNQ",
    "https://www.youtube.com/embed/O_8oxe53Khc",
  ];

  const [submittedLinks, setSubmittedLinks] = useState([]);

  const [clickLink, setClickLink] = useState("");

  const handleLinkSubmit = (link) => {
    setSubmittedLinks([...submittedLinks, link]);
  };

  const handleClickLink = (link) => {
    console.log(link);
    let embedLink;
    let shortCode;
    let videoId;
    if (link.includes("youtube.com/shorts")) {
      let shortCode;
      const startIndex = link.lastIndexOf("shorts/") + 7;
      const endIndex = link.indexOf("?si");
      if (endIndex === -1) {
        shortCode = link.substring(startIndex);
      } else {
        shortCode = link.substring(startIndex, endIndex);
      }
      console.log(shortCode);
      embedLink = `https://www.youtube.com/embed/${shortCode}`;
    } else if (link.includes("youtube.com/watch")) {
      const videoIdStartIndex = link.indexOf("?v=") + 3;
      const videoIdEndIndex =
        link.indexOf("&") !== -1 ? link.indexOf("&") : undefined;
      const videoId = link.substring(videoIdStartIndex, videoIdEndIndex);
      embedLink = `https://www.youtube.com/embed/${videoId}`;
    } else if (link.includes("instagram.com/p/")) {
      const startIndex = link.indexOf("/p/") + 3;
      const endIndex = link.indexOf("/", startIndex);
      if (endIndex === -1) {
        shortCode = link.substring(startIndex);
      } else {
        shortCode = link.substring(startIndex, endIndex);
      }
      console.log(shortCode);

      embedLink = `https://www.instagram.com/p/${shortCode}/embed`;
    } else if (link.includes("instagram.com/reel/")) {
      const startIndex = link.indexOf("/reel/") + 6;
      const endIndex = link.indexOf("/", startIndex);
      if (endIndex === -1) {
        videoId = link.substring(startIndex);
      } else {
        videoId = link.substring(startIndex, endIndex);
      }
      console.log(videoId);
      embedLink = `https://www.instagram.com/reel/${videoId}/embed`;
    } else if (link.includes("tiktok.com")) {
      const startIndex = link.indexOf("/video/") + 7;
      const endIndex =
        link.indexOf("?is") !== -1 ? link.indexOf("?is") : undefined;
      if (endIndex === -1) {
        videoId = link.substring(startIndex);
      } else {
        videoId = link.substring(startIndex, endIndex);
      }
      embedLink = `https://www.tiktok.com/embed/${videoId}`;
    }

    if (embedLink) {
      setClickLink(embedLink);
    } else {
      setClickLink(embedLink);
      console.log(embedLink);
      alert("Vui lòng nhập link đúng!");
    }
  };

  return (
    <div className="App">
      <ComponentA onSubmit={handleLinkSubmit} />
      <ComponentB
        filteredLinks={submittedLinks}
        clickTarget={handleClickLink}
      />
      <ComponentC selectedLink={clickLink} />
    </div>
  );
}

export default App;
