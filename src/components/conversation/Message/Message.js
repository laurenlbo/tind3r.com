// @flow

import './Message.scss';

import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Avatar from 'Components/Avatar';

import Message from 'models/Message';
import Person from 'models/Person';
import { CurrentUser } from 'models/CurrentUser';

type PropsTypes = {
  message: Message,
  author: Person | CurrentUser,
}

const MessageComponent = ({ message, author }: PropsTypes) => (
  <div
    className={cx('message', {
      'message__current': author.isCurrentUser,
    })}
  >
    <div className="message__avatar">
      <Link to={`users/${message.from_id}`}>
        <Avatar url={author.mainPhoto} />
      </Link>
    </div>
    <div className="message__body">
      {message.body}
    </div>
  </div>
);

export default observer(MessageComponent);
