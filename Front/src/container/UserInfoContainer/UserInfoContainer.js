import React, { useCallback, useState, useEffect } from 'react';
import useStores from 'lib/useStores';
import { observer } from 'mobx-react';
import UserInfo from 'components/UserInfo';

const UserInfoContainer = observer(() => {
  const { store } = useStores();
  console.log(store);
  const {
    handleUserInfo,
    handleUserApplyLab,
    myApplyLabList,
  } = store.UserInfoStore;
  const [name, setName] = useState('');

  const requestHandleUserInfo = useCallback(async () => {
    try {
      const response = await handleUserInfo();
      setName(response.data.list.name);
    } catch (error) {
      return error;
    }
  });

  const requestHandleUserApplyLab = useCallback(async () => {
    try {
      const response = await handleUserApplyLab();
      return response;
    } catch (error) {
      return error;
    }
  });

  useEffect(() => {
    requestHandleUserInfo();
    requestHandleUserApplyLab();
  }, []);

  return (
    <>
      <UserInfo name={name} myApplyLabList={myApplyLabList} />
    </>
  );
});

export default UserInfoContainer;
