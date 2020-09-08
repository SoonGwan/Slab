import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import Login from 'components/Login';
import Swal from 'sweetalert2';
import Start from 'components/Start';
import { useHistory } from 'react-router-dom';

const StartContainer = observer(() => {
  const { store } = useStores();
  const { handleLogin, handleRegister } = store.StartStore;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [buttonClick, setButtonClick] = useState(false);
  const history = useHistory();
  const requestHandleLogin = useCallback(async () => {
    const data = {
      id,
      pw,
    };
    try {
      const response = await handleLogin(data);
      console.log(response.data['x-access-token']);
      if (response.status === 200) {
        Swal.fire({
          title: '성공',
          text: '로그인에 성공했어요!',
          icon: 'success',
        });
      }
      sessionStorage.setItem('token', response.data['x-access-token']);
      history.push('/');
    } catch (error) {
      return error;
    }
  });

  const requestHandleRegister = useCallback(async () => {
    const data = {
      id,
      pw,
      email,
      name,
    };
    console.log(data);
    if (pw !== rePw) {
      Swal.fire({
        title: '비밀번호 안맞음',
        text: '테스트',
        icon: 'error',
      });
    }
    try {
      const response = await handleRegister(data);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: '성공',
          text: '회원가입에 성공했어요!',
          icons: 'success',
        });
        setButtonClick(false);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  });
  return (
    <>
      <Start
        id={id}
        setId={setId}
        pw={pw}
        setPw={setPw}
        rePw={rePw}
        setRePw={setRePw}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        requestHandleLogin={requestHandleLogin}
        requestHandleRegister={requestHandleRegister}
        buttonClick={buttonClick}
        setButtonClick={setButtonClick}
      />
    </>
  );
});

export default StartContainer;
