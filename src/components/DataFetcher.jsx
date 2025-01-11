import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Papa from "papaparse";
import { setAllData, setVisibleData, loadMoreData } from "../app/dataSlice";
import DataTable from "./DataTable";
import Loader from "./Loader";
import ScrollListener from "./ScrollListener";

const DataFetcher = () => {
  const dispatch = useDispatch();
  const { visibleData, allData } = useSelector((state) => state.data);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/Electric_Vehicle_Population_Data.csv");
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      const result = await reader.read();
      const csv = decoder.decode(result.value);

      Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          dispatch(setAllData(result.data));
          dispatch(setVisibleData(result.data.slice(0, 10)));
        },
      });
    };

    fetchData();
  }, [dispatch]);

  const loadMoreRows = () => {
    setLoadingMore(true);
    setTimeout(() => {
      dispatch(loadMoreData());
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <>
      <DataTable data={visibleData} />
      <Loader loading={loadingMore} />
      <ScrollListener
        loadMoreRows={loadMoreRows}
        visibleData={visibleData}
        allData={allData}
        loadingMore={loadingMore}
      />
      {!loadingMore && visibleData.length >= allData.length && (
        <p>No more data to load.</p>
      )}
    </>
  );
};

export default DataFetcher;
