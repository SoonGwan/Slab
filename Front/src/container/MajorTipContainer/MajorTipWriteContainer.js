import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import { observer } from 'mobx-react';
import Modal from 'components/common/Modal/Modal';
const MajorTipWriteContainer = observer(() => {
  const { store } = useStores();

  const {
    iswriteModal,
    writeTipModal,
    handleMakeMajorTip,
  } = store.MajorTipStore;
  const [title, setTitle] = useState('');
  const writer = sessionStorage.getItem('name');
  const requestHandleMakeMajorTip = useCallback(async () => {
    const data = {
      title,
      writer,
      type: '1',
    };
    try {
      const response = await handleMakeMajorTip(data);
      console.log(response);
    } catch (error) {
      return error;
    }
  });

  return (
    <>
      {iswriteModal ? (
        <Modal
          handleClose={writeTipModal}
          width={'440px'}
          height={'340px'}
          title={title}
          setTitle={setTitle}
          requestHandleMakeMajorTip={requestHandleMakeMajorTip}
        />
      ) : null}
    </>
  );
});

export default MajorTipWriteContainer;
