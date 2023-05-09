import React from "react";
import Header from "./components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import {
	BsFillPersonPlusFill,
	BsFillPersonCheckFill,
	BsFillPersonLinesFill,
} from "react-icons/bs";
import { FriendsRequest } from "./components/FriendsRequest";
import { FriendsSuggest } from "./components/FriendsSuggest";

const Friends = () => {
	return (
		<div className="container">
			<Header />
			<div className="friends">
				<div className="friends_left">
					<p className="friends_left_title">Bạn bè</p>

					<div className="friends_left_option active">
						<div className="friends_left_icons">
							<FaUserFriends className="friends_left_icon" />
						</div>
						<p className="friends_left_p">Trang chủ</p>
					</div>
					<div className="friends_left_option">
						<div className="friends_left_icons">
							<BsFillPersonCheckFill className="friends_left_icon" />
						</div>
						<p className="friends_left_p">Lời mời kết bạn</p>
						<IoIosArrowForward className="friends_left_arrow" />
					</div>
					<div className="friends_left_option">
						<div className="friends_left_icons">
							<BsFillPersonPlusFill className="friends_left_icon" />
						</div>
						<p className="friends_left_p">Gợi ý</p>
						<IoIosArrowForward className="friends_left_arrow" />
					</div>
					<div className="friends_left_option">
						<div className="friends_left_icons">
							<BsFillPersonLinesFill className="friends_left_icon" />
						</div>
						<p className="friends_left_p">Tất cả bạn bè</p>
						<IoIosArrowForward className="friends_left_arrow" />
					</div>
				</div>
				<div className="friends_center">
					<FriendsRequest />
					<FriendsSuggest />
				</div>
			</div>
		</div>
	);
};

export default Friends;
