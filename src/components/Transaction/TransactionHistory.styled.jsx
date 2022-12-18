import styled from '@emotion/styled';

export const Table = styled.table`
display: table;
width: 600px;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
export const TableThead = styled.thead`
text-align: center;
background-color: rgb(94, 189, 213);
`

export const TableTitle = styled.th`
vertical-align: center;
color: white;
width: calc(100%/3);
 font-size: 12px;
 text-transform: uppercase;
 padding: 10px;
 
`
export const TableBody = styled.tbody`
color: #696969;
text-align: center;
`
export const TableRow = styled.tr`
 &:hover {
    background-color: rgb(180, 180, 180);
  }
  &:nth-of-type(even) {
    background-color: rgb(240, 240, 240);
  }
  &:hover {
    background-color: rgb(180, 180, 180);
  }
`
export const TableCell = styled.td`
border: 1px solid;
padding: 0px;
height: 30px;
vertical-align: center;
border-collapse: collapse;
`

export const TableCellType = styled.td`
  text-transform: capitalize;
  border: 1px solid;
height: 30px;
vertical-align: center;
border-collapse: collapse;
`