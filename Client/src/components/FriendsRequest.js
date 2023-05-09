import React from "react";

export const FriendsRequest = () => {
	return (
		<div className="friends_requests">
			<div className="friends_request_info">
				<p className="friends_request_title">Lời mời kết bạn</p>
				<p className="friends_request_all">Xem tất cả</p>
			</div>
			<div className="friend_request_container">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((value, i) => (
					<div className="friend_request" key={i}>
						<img
							src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/315104157_655331852856752_2415499306317513387_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zt0D41Cpj88AX8Inyn-&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDoCw7R_16lzeyWdU655tVlW7-ggJeZqp2Pe_FTsfmXRQ&oe=645CF112"
							className="friend_request_img"
						/>
						<p className="friend_request_p">An An</p>
						<div className="friend_request_accept">
							<p className="friend_request_accept_p">Xác nhận</p>
						</div>
						<div className="friend_request_deny">
							<p className="friend_request_deny_p">Xóa</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
