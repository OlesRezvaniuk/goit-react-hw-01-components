import Statistics from './statistics';
import data from './data.json';
import { Box, Title, List } from './statistics.styled';

export const StatisticsApp = () => {
  return (
    <Box>
      <Title>Upload stats</Title>

      <List>
        {data.map(data => (
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
