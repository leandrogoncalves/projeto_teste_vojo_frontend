import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-width: 960px;
  min-height: calc(100vh - 196px);
  padding: 0 15px;
`;

export const JobList = styled.div`
  margin-bottom: 20px;
  align-self: flex-baseline;
  flex: 0 0 100%;
`;

export const JobCard = styled.div`
  align-items: center;
  background: #FFF;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(0,0,0,0.25);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
  margin-top: 16px;
  min-height: 90px;
  overflow: hidden;
  padding: 22px 7px 12px 14px;
  padding-top: 22px;
  position: relative;
  width: 100%;
`;
