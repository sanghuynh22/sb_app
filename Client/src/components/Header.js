import React from "react";
import "../index.css";
import logo from "../assets/images/logo.jpeg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BsSearch, BsMessenger, BsFillBellFill } from "react-icons/bs";
import { AiFillHome, AiFillShop } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../actions/user/auth";
import avatar from "../assets/images/avatar-mac-dinh.jpeg";
const Header = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state) => state.user.auth);

	const handleClickLogOut = () => {
		dispatch(authLogout());
	};
	return (
		<div className="header">
			<div className="header_left">
				<Link to="/">
					<img src={logo} className="logo" />
				</Link>
				<div className="header_search">
					<BsSearch className="header_search_icon" />
					<input
						placeholder="Tìm kiếm trên Sangbook"
						className="header_sarch_input"
					/>
				</div>
			</div>

			<div className="header_center">
				<div className="header_center_option active">
					<AiFillHome className="header_center_option_icon" />
				</div>
				<div className="header_center_option">
					<FaUserFriends className="header_center_option_icon" />
				</div>
				<div className="header_center_option">
					<MdSmartDisplay className="header_center_option_icon" />
				</div>
				<div className="header_center_option">
					<AiFillShop className="header_center_option_icon" />
				</div>
			</div>
			<div className="header_right">
				<div className="header_right_option">
					<CgMenuGridO className="header_right_option_icon" />
				</div>
				<div className="header_right_option">
					<BsMessenger className="header_right_option_icon" />
				</div>
				<div className="header_right_option">
					<BsFillBellFill className="header_right_option_icon" />
				</div>
				<div className="header_right_avatar">
					<img
						src={currentUser?.avatar ? currentUser.avatar : avatar}
						className="header_right_option_avatar"
					/>
					<div class="header_right_avatar_sudo">
						<a href="#" class="profile-link">
							Profile
						</a>
						<a href="#" class="logout-link" onClick={() => handleClickLogOut()}>
							Đăng xuất
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
