import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0) 0px 1px 2px;
  padding-left: 10px;
padding-right: 10px;
  gap: 8px;

  margin-bottom: 20px;


`

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Status = styled.span`
svg{

    color: ${props => (props.status ? 'green' : 'red')};
}
`;
