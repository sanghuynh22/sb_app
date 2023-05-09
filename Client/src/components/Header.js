import React from "react";
import "../index.css";
import logo from "../assets/images/logo.jpeg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BsSearch, BsMessenger, BsFillBellFill } from "react-icons/bs";
import { AiFillHome, AiFillShop } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
const Header = () => {
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
						src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=w00aZTzGsUcAX_z3_yo&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCJW_vrDqYbadoP46F8lEKn4nP_P1PQb2I-wqvraig6rA&oe=647D4EB8"
						className="header_right_option_avatar"
					/>
					<div class="header_right_avatar_sudo">
						<a href="#" class="profile-link">
							Profile
						</a>
						<a href="#" class="logout-link">
							Đăng xuất
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
