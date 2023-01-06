import styled from 'styled-components';

export const Markup = styled.div`
  width: 240px;
  margin: 10px auto;

  text-align: center;
  overflow: hidden;

  border: 1px solid #3f3f3f;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0) 0px 1px 2px;
  padding: 5px;
`;

export const PhotoWrapper = styled.div``;

export const Photo = styled.img`
  margin: 10px 0;

  border-radius: 50%;
  width: 200px;
`;

export const Username = styled.p`
  color: gold;
  margin: 5px;
`;

export const TagName = styled.p`
  color: blue;
  margin: 5px;
`;
export const Location = styled.p`
  color: green;
  margin: 5px;
`;

export const ProfileInfo = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding-left: 10px;
  padding-right: 10px;
  background-color: grey;
  border: 1px solid black;
`;
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 18px 0;
  font-size: 14px;
  width: 70px;
  gap: 0px;
`;
