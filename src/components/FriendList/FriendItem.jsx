
import PropTypes from "prop-types";
import { Item, FriendStatus } from "./FriendList.styled";

export const FriendItem = ({ id, avatar, name, isOnline }) => {
    return (
        <Item key={id}>
            <FriendStatus status={isOnline}>{isOnline}</FriendStatus>
            <img
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p>{name}</p>
        </Item>
    );
}

FriendItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}