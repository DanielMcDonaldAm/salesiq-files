try {
  let itDone = false;

  setTimeout(() => {
    var preChatBtn = document.getElementsByClassName("custom-chat-btn");
    if (preChatBtn.length > 0) preChatBtn[0].style.display = "none";

    //hide prev chat element
    var currentBtn = document.getElementsByClassName("zsiq_floatmain");
    if (currentBtn.length > 0) {
      currentBtn[0].style.bottom = "48px !important";
      currentBtn[0].style.setProperty("bottom", "48px", "!important");
      currentBtn[0].style.setProperty("z-index", "968", "important");
      itDone = true;
    }

    const url =
      "https://dl.dropboxusercontent.com/scl/fi/yehyj90ow5fuatfx9ff1u/saleiq.css?rlkey=4nbtxa5qrwoi4oaubft9eot50&dl=0";
    var link = document.createElement("link");

    // Set the attributes for the link element
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url; // Replace URL_OF_YOUR_CSS_FILE with the actual URL

    // Append the link element to the head of the document
    document.head.appendChild(link);
  }, 3000);
} catch (error) {}
