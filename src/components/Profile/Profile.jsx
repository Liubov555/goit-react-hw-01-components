import PropTypes from "prop-types";
import { Card, Description, Avatar, UserName, Tag, Location, Stats } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Card>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <UserName >{username}</UserName>
                <Tag >@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <li>
                    <span >Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span> {stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </Stats>
        </Card>);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })

}

