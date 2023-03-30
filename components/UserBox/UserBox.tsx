import React from 'react';
import css from './UserBox.module.css';
import Image from 'next/image';
import Message from '../../public/icons/message.png';
import { useRouter } from 'next/router';

interface User {
  userImg: string;
  userName: string;
}

interface Props {
  props: User;
}

const UserBox: React.FC<Props> = ({ props }: Props) => {
  const { userImg, userName } = props;

  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';

  return (
    <div className={css.userBox}>
      <div className={css.user}>
        <Image
          className={css.userImg}
          src={userImg}
          alt="유저 프로필 사진"
          width={38}
          height={38}
        />
        <p className={css.userName}>@{userName}</p>
      </div>
      {!isHome && (
        <div className={css.messageBox}>
          <Image className={css.messageImg} src={Message} alt="메세지" />
          <p className={css.messageText}>Send Message</p>
        </div>
      )}
    </div>
  );
};

export default UserBox;
