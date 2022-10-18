import StatisticsItem from './Item/StatisticsItem';

import { Box, Title, List } from './Statistics.styled';

export const Statistics = ({ statData }) => {
  return (
    <Box>
      <Title>Upload stats</Title>

      <List>
        {statData.map(data => (
          <StatisticsItem
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </List>
    </Box>
  );
};
