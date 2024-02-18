import React, {useState} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import Modal from './Modal';

const Login = () => {
  const [openModal, setOpenModal] = useState(false)

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
          <button onClick={() => setOpenModal(true)} className="signup">新しいアカウントを作成</button> 
          <Modal open={openModal} />
        </form>
      </div>
  );
};

export default Login


