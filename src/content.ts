const main = () => {
    const aTagArrayLikeObj = document.getElementsByTagName("a");

    const aTagList = Array.from(aTagArrayLikeObj);

    aTagList.map((a) => {
        const url = a.href;
        if (!url.match(/^https:\/\/github.com/g)) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }
    });
};

window.addEventListener("load", main);
