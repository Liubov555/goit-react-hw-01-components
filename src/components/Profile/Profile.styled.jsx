import styled from '@emotion/styled';

export const Card = styled.div`
margin-left: auto;
margin-right: auto;
text-align: center;
width: 300px;
height: 100%;
border-radius: 2%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Description = styled.div`
padding: 25px;
`;

export const Avatar = styled.img`
width: 100%;
border: 4px, solid;
border-radius: 50%;
margin-bottom:20px;
`;

export const UserName = styled.p`
font-weight: 700;
font-size: 25px;
`;

export const Tag = styled.p`
color: rgba(0, 0, 0, 0.5);
`;

export const Location = styled.p`
color: rgba(0, 0, 0, 0.5);
`;
export const Stats = styled.ul`
list-style: none;
padding: 0px;
display: flex;
background-color: rgba(0, 0, 0, 0.05);

li{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
height: 100%;
 border: 1px solid rgb(0 0 0 / 20%);

    &:hover {
      background-color: rgba(255, 99, 71, 0.6); 
      border: 1px solid rgba(255, 71, 20, 1);
    }

}
`;

export const Label = styled.span`
display: block;
`;

export const Quanlily = styled.span`
font-weight: 700;
`;
