import { Item, Name, Status, } from './FriendListItem.styled';
import { BsFillRecordFill } from 'react-icons/bs';

export const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <Item key={id}>
      <Status status={isOnline}>
      <BsFillRecordFill/>
      </Status>
      
      <Name>{name}</Name>
      <img src={avatar} alt="User avatar" width="48" />
    </Item>
  );
};
