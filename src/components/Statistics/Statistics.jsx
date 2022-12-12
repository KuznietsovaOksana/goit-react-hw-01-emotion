import PropTypes from 'prop-types';
import {
  Box,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const bgColors = ['#130b98', '#25662b', '#c57229', '#b2759c', '#25662b'];
  return (
    <Box>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage } = stats, index) => (
          <Item style={{ backgroundColor: bgColors[index] }} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
