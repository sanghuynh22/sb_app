import React from "react";
import { BsSearch, BsFillCartCheckFill, BsMusicNoteList } from "react-icons/bs";
import { AiFillShop } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdPhonePortrait } from "react-icons/io";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { BiHomeHeart } from "react-icons/bi";
import Header from "./components/Header";
const Marketplace = () => {
	return (
		<div className="container">
			<Header />
			<div className="market">
				<div className="market_left">
					<o className="market_left_title">Marketplace</o>
					<div className="market_left_search">
						<BsSearch className="market_left_search_icon" />
						<input
							placeholder="Tìm kiếm trên Marketplace"
							className="market_left_search_input"
						/>
					</div>
					<div className="market_left_options">
						<div className="market_left_option active">
							<div className="market_left_option_icons">
								<AiFillShop className="market_left_option_icon" />
							</div>
							<p>Lướt xem tất cả</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<BsFillCartCheckFill className="market_left_option_icon" />
							</div>
							<p>Giỏ hàng</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<GiShoppingBag className="market_left_option_icon" />
							</div>
							<p>Shop của tôi </p>
						</div>
						<div className="market_create">
							<p>+ Tạo sản phẩm</p>
						</div>
					</div>
					<div className="market_left_options">
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<IoMdPhonePortrait className="market_left_option_icon" />
							</div>
							<p>Điện thoại</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<AiOutlineLaptop className="market_left_option_icon" />
							</div>
							<p>Laptop</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<BiHomeHeart className="market_left_option_icon" />
							</div>
							<p>Gia đình</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<GiElectric className="market_left_option_icon" />
							</div>
							<p>Điện tử</p>
						</div>
						<div className="market_left_option">
							<div className="market_left_option_icons">
								<BsMusicNoteList className="market_left_option_icon" />
							</div>
							<p>Nhạc cụ</p>
						</div>
					</div>
				</div>
				<div className="market_center">
					<p className="market_left_title">Lựa chọn hôm nay</p>
					<div className="market_center_container">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
							<div className="market_center_item">
								<img
									src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t45.5328-4/345393337_6216466958396258_4549356604209501676_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_ohc=TlrtL_yqNtMAX-hbLk9&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDybXVJmcpNKGXJ-cLualYZkh7e3k8Jg9Bg-xdpFP_69w&oe=645E4EE0"
									className="market_center_item_img"
								/>
								<p className="market_price">100.000đ</p>
								<p className="market_details">
									Oppo f7 4G/64G máy như hình, chức năng ok hết, giá 950k, xem
									máy giao hàng luôn
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Marketplace;
