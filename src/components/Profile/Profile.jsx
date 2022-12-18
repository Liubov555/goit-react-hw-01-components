import PropTypes from "prop-types";
import { Card, Description, Avatar, UserName, Tag, Location, Stats, Label, Quanlily } from "./Profile.styled";

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
                    <Label >Followers</Label>
                    <Quanlily>{stats.followers}</Quanlily>
                </li>
                <li>
                    <Label>Views</Label>
                    <Quanlily> {stats.views}</Quanlily>
                </li>
                <li>
                    <Label>Likes</Label>
                    <Quanlily>{stats.likes}</Quanlily>
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

