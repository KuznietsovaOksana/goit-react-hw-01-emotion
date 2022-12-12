import { Box } from './Container.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Container = ({ children }) => (
  <Box style={{ backgroundColor: getRandomHexColor() }}>{children}</Box>
);
