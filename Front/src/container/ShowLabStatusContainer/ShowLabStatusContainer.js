import React, { useCallback, useState, useEffect } from "react";
import ShowLabStatus from "components/ShowLabStatus";
import useStores from "lib/useStores";

const ShowLabStatusContainer = () => {
  const { store } = useStores();
  const { handleLabStatus } = store.ShowLabStatusStore;
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
      <ShowLabStatus usableLab={usableLab} />
    </>
  );
};

export default ShowLabStatusContainer;
