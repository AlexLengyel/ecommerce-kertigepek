import styled from "styled-components";

const PageContainer = styled.div`
  min-height: calc(100vh - ${(props) => props.theme.navbarHeight});
  width: 100vw;
  min-width: 700px;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};
`;

export default PageContainer;
