import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
      </div>

      <div className="col-span-3">
        <p className="text-sm font-bold">{username} </p>
        <p className="text-sm font-bold">{fullName}</p>
      </div>
    </Link>
  );

export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
