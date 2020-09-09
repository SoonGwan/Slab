import React, { useCallback, useState, useEffect } from "react";
import ShowLabStatus from "components/ShowLabStatus";
import useStores from "lib/useStores";

const ShowLabStatusContainer = () => {
  const { store } = useStores();
  const { handleLabStatus, selectLabModal } = store.ShowLabStatusStore;
  const [usableLab, setUsableLab] = useState();

  const requestHandleLabStatus = useCallback(async () => {
    try {
      const response = await handleLabStatus();
      setUsableLab(response.data.list.length);
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    requestHandleLabStatus();
  }, []);

  return (
    <>
      <ShowLabStatus usableLab={usableLab} selectLabModal={selectLabModal} />
    </>
  );
};

export default ShowLabStatusContainer;
