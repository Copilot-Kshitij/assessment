import { useEffect } from "react";

const ScrollListener = ({ loadMoreRows, visibleData, allData, loadingMore }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (visibleData.length < allData.length && !loadingMore) {
          loadMoreRows();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleData, allData, loadingMore, loadMoreRows]);

  return null;
};

export default ScrollListener;
