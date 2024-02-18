import React from 'react';
import { useState } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import Modal from './components/Modal';

const Login = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(false);
  };


  return (
    <div className="box">
      <div className="logo">
        <h1>Vizolux</h1>
      </div>
        <form>
          <div>
            <input name="email" type="email" placeholder="メールアドレス"/>
          </div>
          <div>
            <input name="password" type="password" placeholder="パスワード"/>
          </div>
          <button className="func_button">ログイン</button>
          <Link className="pass">パスワードをお忘れですか？</Link>
          <div className="heading">または</div>
        </form> 
        <button className="signup" onClick={() => setModalOpen(true)}>新しいアカウントを作成</button> 
        {modalOpen && (
          <Modal onSubmit={handleButtonClick} onClose={handleButtonClick}>
            <h1 className='toroku'>アカウント登録</h1>
            <form>
              <input type="text" placeholder="姓"/>
              <input type="text" placeholder="名"/>
              <input type="email" placeholder="メールアドレス"/>
              <input type="password" placeholder="パスワード"/>
            </form>

          </Modal>
        )}
    </div>
  );
};

export default Login


