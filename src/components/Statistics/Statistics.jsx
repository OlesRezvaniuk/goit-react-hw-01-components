import StatisticsItem from './Item/StatisticsItem';
import PropTypes from 'prop-types';

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

StatisticsItem.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
