import React, { useEffect, useState } from "react";
import styles from './ComponentA.module.scss';
import { FaInfoCircle } from 'react-icons/fa';

export default function ComponentA({ onSubmit }) {
  const YOUTUBE_REGEX1 = /^https:\/\/youtube\.com\//;
  const YOUTUBE_REGEX2 = /^https:\/\/www\.youtube\.com\//;
  const TIKTOK_REGEX = /^https:\/\/(?:www\.)?tiktok\.com\//;
  const INSTAGRAM_REGEX = /^https:\/\/www\.instagram\.com\/([A-Za-z0-9-_\.]+)/im;


  const [btnDisabled, setBtnDisabled] = useState(true);
  const [link, setLink] = useState("");
  const [validLink, setValidLink] = useState("");

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setLink(inputValue);

  };

  useEffect(() => {
    const resultLink = TIKTOK_REGEX.test(link);
    if (YOUTUBE_REGEX1.test(link) || YOUTUBE_REGEX2.test(link) || TIKTOK_REGEX.test(link) || INSTAGRAM_REGEX.test(link)) {
      setBtnDisabled(false);
      setValidLink(resultLink);
    }
    else {
      setBtnDisabled(true);
    }
  }, [link]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(link);
    setLink("");
  };

  return (
    <>
      <div className={styles.formInputContainer}>
        <form className={styles.formInput} onSubmit={handleSubmit}>
          <input
            className={styles.inputLink}
            type="text"
            placeholder="Nhập liên kết từ YouTube, TikTok hoặc Instagram"
            value={link}
            onChange={handleChange}
            autoComplete="off"
            aria-invalid={validLink ? 'false' : 'true'}
            aria-describedby="checkLink"
          />
          <button className={`${styles.btnSubmitLink} ${btnDisabled ? styles.btnDisabled : styles.btnActivated}`} type="submit" disabled={btnDisabled}>Submit</button>
        </form>
      </div>
      <p
        id="checkLink"
        className={btnDisabled ? styles.instructions : styles.offScreen}
      >
        <FaInfoCircle />
        Vui lòng nhập vào input là đường dẫn của Youtube, Tiktok hoặc Instagram. Mọi đường dẫn khác đều không hợp lệ
      </p>
    </>
  );
}
