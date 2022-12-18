import PropTypes from "prop-types";
import { Table, TableThead, TableTitle, TableBody, TableRow, TableCellType, TableCell } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableThead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </TableThead>

            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.id}>
                        <TableCellType>{item.type}</TableCellType>
                        <TableCell>{item.amount}</TableCell>
                        <TableCell>{item.currency}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}