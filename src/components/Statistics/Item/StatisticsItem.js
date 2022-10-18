import PropTypes from 'prop-types';
import { Item, Label, Percentage } from '../Statistics.styled';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <Item id={id} style={{ backgroundColor: `${getRandomHexColor()}` }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
