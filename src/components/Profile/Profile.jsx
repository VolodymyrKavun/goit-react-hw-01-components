import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profile}>
        <div className="description">
          <img src={avatar} alt="{username}" className={css.avatar} />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <div>
          <ul className={css.stats}>
            <li className={css.itemLi}>
              <span className="label">Followers</span>
              <span className="quantity">{followers}</span>
            </li>
            <li className={css.itemLi}>
              <span className="label">Views</span>
              <span className="quantity">{views}</span>
            </li>
            <li className={css.itemLi}>
              <span className="label">Likes</span>
              <span className="quantity">{likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
