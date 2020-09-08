import React, { useCallback, useEffect, useState } from "react";
import MajorTip from "components/MajorTip";
import useStores from "lib/useStores";
import { set } from "lodash";

const MajorTipContainer = () => {
  const { store } = useStores();
  const { handleMajorTip, majorTipList } = store.MajorTipStore;
  console.log(majorTipList);

  const [data, setData] = useState([]);

  const requestHandleMajorTip = useCallback(async () => {
    try {
      const response = await handleMajorTip();
      setData(response.data.list);
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    requestHandleMajorTip();
  }, []);

  return (
    <>
      <MajorTip data={data} />
    </>
  );
};

export default MajorTipContainer;
