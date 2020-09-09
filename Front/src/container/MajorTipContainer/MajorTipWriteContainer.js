import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import { observer } from 'mobx-react';
import Modal from 'components/common/Modal/Modal';
import MajorTipWrite from 'components/MajorTipWrite/MajorTipWrite';
import Swal from 'sweetalert2';
import { AiOutlineSwapLeft } from 'react-icons/ai';

const MajorTipWriteContainer = observer(() => {
  const { store } = useStores();

  const {
    iswriteModal,
    writeTipModal,
    handleMakeMajorTip,
    handleMajorTip,
  } = store.MajorTipStore;

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const writer = sessionStorage.getItem('name');
  console.log(writer);
  const requestHandleMakeMajorTip = useCallback(async () => {
    const data = {
      title,
      writer,
      type: '1',
    };
    if (title.length <= 0) {
      Swal.fire({
        title: '잠시만요',
        text: '내용을 채워주세요.',
        icon: 'error',
      });
      return;
    }
    try {
      const response = await handleMakeMajorTip(data);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: '성공',
          text: '글 작성에 성공하였습니다.',
          icon: 'success',
        });
        handleMajorTip();
        writeTipModal();
        setTitle('');
      }
    } catch (error) {
      return error;
    }
  });
  return (
    <>
      {iswriteModal ? (
        <Modal
          handleClose={writeTipModal}
          width={'730px'}
          height={'250px'}
          none={true}
        >
          <MajorTipWrite
            requestHandleMakeMajorTip={requestHandleMakeMajorTip}
            title={title}
            setTitle={setTitle}
          />
        </Modal>
      ) : null}
    </>
  );
});

export default MajorTipWriteContainer;
