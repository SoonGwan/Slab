import React from "react";
import useStores from "lib/useStores";
import Modal from "components/common/Modal/Modal";
import { observer } from "mobx-react";
import SelectLab from "components/SelectLab";

const SelectLabContainer = observer(() => {
  const { store } = useStores();
  const { isSelectModal, selectLabModal } = store.ShowLabStatusStore;

  return (
    <>
      {isSelectModal ? (
        <Modal width={"1280px"} height={"880px"} handleClose={selectLabModal}>
          <SelectLab />
        </Modal>
      ) : null}
    </>
  );
});

export default SelectLabContainer;
