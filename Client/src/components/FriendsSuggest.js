import React from "react";

export const FriendsSuggest = () => {
	return (
		<div className="friends_requests">
			<div className="friends_request_info">
				<p className="friends_request_title">Những người bạn có thể biết</p>
				<p className="friends_request_all">Xem tất cả</p>
			</div>
			<div className="friend_request_container">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, i) => (
					<div className="friend_request" key={i}>
						<img
							src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/343131764_557073639880289_3947061849483831522_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EqfNhpOgd3wAX9IN2Bx&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBBwduAH6D3Das921am4aHKDgSdraLY777m0_u4EA1VlA&oe=645DA413"
							className="friend_request_img"
						/>
						<p className="friend_request_p">Hoàng Phúc</p>

						<p className="friend_request_mutual_amount">1 bạn chung</p>

						<div className="friend_request_accept">
							<p className="friend_request_accept_p">Thêm bạn bè</p>
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
