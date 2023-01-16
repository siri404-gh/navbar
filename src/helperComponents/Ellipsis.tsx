import styled from "styled-components";

const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ({ children }) => {
  return <Text>{children}</Text>;
};
