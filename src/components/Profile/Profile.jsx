import {
  Markup,
  Photo,
  PhotoWrapper,
  Username,
  TagName,
  Location,
  ProfileInfo,
  InfoItem,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Markup>
      <PhotoWrapper>
        <Photo src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </PhotoWrapper>

      <ProfileInfo>
        <InfoItem>
          <span>Followers</span>
          <span>{followers}</span>
        </InfoItem>
        <InfoItem>
          <span>Views</span>
          <span>{views}</span>
        </InfoItem>
        <InfoItem>
          <span>Likes</span>
          <span>{likes}</span>
        </InfoItem>
      </ProfileInfo>
    </Markup>
  );
};
