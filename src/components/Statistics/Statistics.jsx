import PropTypes from "prop-types";
import { Statistic, Title, List, Item, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <Statistic >
            <Title >{title}</Title>

            <List >
                {stats.map((stats) => (
                    <Item key={stats.id}>
                        <Label >{stats.label}</Label>
                        <Percentage >{stats.percentage}%</Percentage>
                    </Item>

                ))}

            </List>
        </Statistic>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }))

}
