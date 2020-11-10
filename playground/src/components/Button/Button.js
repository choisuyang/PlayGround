import styled from "styled-components";

function ButtonComponent({ children, background }) {
  console.log("--->", background, children);
  return <Button background={background}>{children}</Button>;
}

const Button = styled.button`
  background: ${(props) => (props.background === "primary" ? "palevioletred" : "white")};
  color: ${(props) => (props.background === "primary" ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`;

export default ButtonComponent;
