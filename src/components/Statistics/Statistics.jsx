import { Wrapper, Title, List, Item } from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(item => (
          <Item key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
