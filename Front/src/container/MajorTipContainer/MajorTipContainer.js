import React, { useCallback, useEffect, useState } from 'react';
import MajorTip from 'components/MajorTip';
import useStores from 'lib/useStores';
import { set } from 'lodash';
import { observer } from 'mobx-react';

const MajorTipContainer = observer(() => {
  const { store } = useStores();
  const {
    handleMajorTip,
    majorTipList,
    writeTipModal,
    tipList,
  } = store.MajorTipStore;
  console.log(majorTipList);

  const [data, setData] = useState([]);

  const requestHandleMajorTip = useCallback(async () => {
    try {
      const response = await handleMajorTip();
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    requestHandleMajorTip();
  }, []);

  return (
    <>
      <MajorTip tipList={tipList} writeTipModal={writeTipModal} />
    </>
  );
});

export default MajorTipContainer;
