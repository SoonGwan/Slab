import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';

const LoginContainer = observer(() => {
  const { store } = useStores();
  const { handleLogin } = store.LoginStore;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const requestHandleLogin = useCallback(async () => {
    const data = {
      id,
      pw,
    };
    try {
      const response = await handleLogin(data);
      console.log(response);
    } catch (error) {
      return error;
    }
  });

  return (
    <>
      <div></div>
    </>
  );
});

export default LoginContainer;
