import styled from '@emotion/styled';

export const Friends = styled.ul`
display:flex;
flex-direction: column;
gap: 12px;
align-items: center;
`
export const Item = styled.li`
display: flex;
align-items: center;
width: 200px;
margin-bottom: 4px;
padding: 16px;
gap: 20px;
background-color: #ffffff;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
export const FriendStatus = styled.span`
width: 20px;
  height: 20px;
  background-color: ${(props) => (props.status ? "green" : "red")};
  border-radius: 50%;
`