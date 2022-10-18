import Statistics from './Statistics';

import { Box, Title, List } from './statistics.styled';

export const StatisticsApp = ({ statData }) => {
  return (
    <Box>
      <Title>Upload stats</Title>

      <List>
        {statData.map(data => (
          <Statistics
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </List>
    </Box>
  );
};
