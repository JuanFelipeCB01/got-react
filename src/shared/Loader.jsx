import React, { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    function updateLoadingText(loadingText, text, index) {
      loadingText.textContent = text.slice(0, index);

      if (index <= text.length) {
        setTimeout(() => {
          updateLoadingText(loadingText, text, index + 1);
        }, 200);
      }
    }

    const loadingText = document.querySelector(".loading-text");
    const originalText = "W i n t e r  i s c o m i n g . . .";
    updateLoadingText(loadingText, originalText, 0);
  }, []);
  return (
      <div class="loader">
        <div class="lds-hourglass"></div>
        <p class="loading-text">Winter is coming...</p>
      </div>
  );
}
