import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import { FaUserFriends } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { TbShare3 } from "react-icons/tb";
import {
	BiVideoRecording,
	BiDotsHorizontalRounde,
	BiCommentDetail,
	BiDotsHorizontalRounded,
	BiShare,
	BiComment,
} from "react-icons/bi";
import {
	AiFillShop,
	AiOutlinePlus,
	AiFillPicture,
	AiOutlineClose,
	AiOutlineLike,
} from "react-icons/ai";
import { BsMessenger, BsBookFill, BsPlayCircleFill } from "react-icons/bs";
import ShortsSlider from "./components/ShortsSlider";
import Reels from "./components/Reels";
const Home = () => {
	const [isReels, setIsReels] = useState(false);

	const HandleClickStory = () => {
		setIsReels(false);
	};

	const HandleClickReels = () => {
		setIsReels(true);
	};
	return (
		<div className="container">
			<Header />
			<div className="home">
				<div className="home_left">
					<div className="home_left_option">
						<img
							src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p148x148&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=iyixs2h8VAgAX9hcsbv&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAH2yn78SLR55iT2mY1KFpJdXqpAaqlj2nbV-uCi_VWwg&oe=647E67F8"
							className="home_left_option_avatar"
						/>

						<p>Huynh Sang</p>
					</div>
					<div className="home_left_option">
						<FaUserFriends className="home_left_pro" />
						<p>Bạn bè</p>
					</div>
					<div className="home_left_option">
						<MdSmartDisplay className="home_left_pro" />
						<p>Watch</p>
					</div>
					<div className="home_left_option">
						<AiFillShop className="home_left_pro" />
						<p>Marketplace</p>
					</div>
					<div className="home_left_option">
						<BsMessenger className="home_left_pro" />
						<p>Messenger</p>
					</div>
					<footer>@SangHuynh</footer>
				</div>
				<div className="home_center">
					<div className="home_shorts">
						<div className="home_shorts_top">
							<div
								className={`home_shorts_top_option ${!isReels && "active"}`}
								onClick={() => HandleClickStory()}
							>
								<BsBookFill className="story_icon" />
								<span className="home_shorts_top_option_p">Tin</span>
							</div>
							<div
								className={`home_shorts_top_option ${isReels && "active"}`}
								onClick={() => HandleClickReels()}
							>
								<BsPlayCircleFill className="story_icon" />
								<span className="home_shorts_top_option_p">Reels</span>
							</div>
						</div>
						{isReels ? <Reels /> : <ShortsSlider />}

						{/* <div className="home_shorts_content">
								<div className="home_shorts_content_option">
									<img
										src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iyixs2h8VAgAX9hcsbv&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBAmCNBeUa4Etn5v_Y32TOA6w4TOURfjGjGLe4DesmOoA&oe=647E67F8"
										className="home_shorts_content_img"
									/>
									<div className="home_shorts_content_create">
										<AiOutlinePlus className="home_shorts_content_create_icon" />
									</div>
									<p className="shorts_content_p">Tạo tin</p>
									<div className="home_shorts_content_hidden"></div>
								</div>
								<div className="home_shorts_content_option">
									<img
										src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t51.36329-10/344916903_752158889915770_4557568920531692232_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eiErWD--NkwAX_JLBk_&_nc_oc=AQk59WRZDRXfOdpmNDlUDJtGjjo5YyifKfIAZsBTNYiPQecmxpwrKk7Al9tQ1cYySXJRS11YEOeSLeNxg5Ae65sf&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDOWdt6PSpwkFUUTT9WDTjZdHD9nfKGHcVlQE9NUcB6xw&oe=645CCCEE"
										className="home_shorts_content_img"
									/>
									<div className="home_shorts_content_avatar">
										<img
											src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344334112_1019875619418784_1674377360522710073_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FdJAWDB7EcMAX-rcVAS&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC9XUathMiK-0rLaixEdE3sbq466uyMdGPj_5Ma9pB3zQ&oe=645B0FE3"
											className="home_shorts_content_avatar_img"
										/>
									</div>
									<p className="shorts_content_p">Khánh Hòa</p>
								</div>
								<div className="home_shorts_content_option">
									<img
										src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t51.36329-10/344916903_752158889915770_4557568920531692232_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eiErWD--NkwAX_JLBk_&_nc_oc=AQk59WRZDRXfOdpmNDlUDJtGjjo5YyifKfIAZsBTNYiPQecmxpwrKk7Al9tQ1cYySXJRS11YEOeSLeNxg5Ae65sf&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDOWdt6PSpwkFUUTT9WDTjZdHD9nfKGHcVlQE9NUcB6xw&oe=645CCCEE"
										className="home_shorts_content_img"
									/>
									<div className="home_shorts_content_avatar">
										<img
											src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344334112_1019875619418784_1674377360522710073_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FdJAWDB7EcMAX-rcVAS&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC9XUathMiK-0rLaixEdE3sbq466uyMdGPj_5Ma9pB3zQ&oe=645B0FE3"
											className="home_shorts_content_avatar_img"
										/>
									</div>
									<p className="shorts_content_p">Khánh Hòa</p>
								</div>
								<div className="home_shorts_content_option">
									<img
										src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t51.36329-10/344916903_752158889915770_4557568920531692232_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eiErWD--NkwAX_JLBk_&_nc_oc=AQk59WRZDRXfOdpmNDlUDJtGjjo5YyifKfIAZsBTNYiPQecmxpwrKk7Al9tQ1cYySXJRS11YEOeSLeNxg5Ae65sf&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDOWdt6PSpwkFUUTT9WDTjZdHD9nfKGHcVlQE9NUcB6xw&oe=645CCCEE"
										className="home_shorts_content_img"
									/>
									<div className="home_shorts_content_avatar">
										<img
											src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344334112_1019875619418784_1674377360522710073_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FdJAWDB7EcMAX-rcVAS&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC9XUathMiK-0rLaixEdE3sbq466uyMdGPj_5Ma9pB3zQ&oe=645B0FE3"
											className="home_shorts_content_avatar_img"
										/>
									</div>
									<p className="shorts_content_p">Khánh Hòa</p>
								</div>
								<div className="home_shorts_content_option">
									<img
										src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t51.36329-10/344916903_752158889915770_4557568920531692232_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=eiErWD--NkwAX_JLBk_&_nc_oc=AQk59WRZDRXfOdpmNDlUDJtGjjo5YyifKfIAZsBTNYiPQecmxpwrKk7Al9tQ1cYySXJRS11YEOeSLeNxg5Ae65sf&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDOWdt6PSpwkFUUTT9WDTjZdHD9nfKGHcVlQE9NUcB6xw&oe=645CCCEE"
										className="home_shorts_content_img"
									/>
									<div className="home_shorts_content_avatar">
										<img
											src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344334112_1019875619418784_1674377360522710073_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FdJAWDB7EcMAX-rcVAS&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC9XUathMiK-0rLaixEdE3sbq466uyMdGPj_5Ma9pB3zQ&oe=645B0FE3"
											className="home_shorts_content_avatar_img"
										/>
									</div>
									<p className="shorts_content_p">Khánh Hòa</p>
								</div>
							</div> */}
					</div>
					<div className="home_create">
						<div className="home_create_top">
							<img
								src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iyixs2h8VAgAX9hcsbv&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAKjeGEvBKPE8I3TV1Ff7OZcZZQuvJGvL2xTrgb4m4Yjg&oe=647ED878"
								className="home_create_top_img"
							/>
							<div className="home_create_top_bar">
								<input
									placeholder="Sang ơi, bạn đang nghĩ gì thế?"
									className="home_create_top_input"
								/>
							</div>
						</div>
						<div className="home_create_bottom">
							<div className="home_create_option">
								<BiVideoRecording className="home_create_option_icon" />
								<p>Phát trực tiếp</p>
							</div>
							<div className="home_create_option">
								<AiFillPicture className="home_create_option_icon photo" />
								<p>Ảnh/video</p>
							</div>
						</div>
					</div>
					<div className="home_statuses">
						<div className="home_status">
							<div className="home_status_top">
								<div className="home_status_top_left">
									<img
										src="https://scontent.fsgn10-1.fna.fbcdn.net/v/t1.18169-1/18222421_1641168845910891_5364468136507217434_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=9_tRfNFvrlQAX8APKbK&_nc_ad=z-m&_nc_cid=1572&_nc_ht=scontent.fsgn10-1.fna&oh=00_AfAvGE2kg4LYnMjZfEh8yClbklRMOznrrnYZW0enYq-luQ&oe=647E4C2C"
										className="home_status_top_left_img"
									/>
									<div className="home_status_top_left_info">
										<p className="home_create_p">CafeBiz</p>
										<span className="home_create_span">18 giờ</span>
									</div>
								</div>
								<div className="home_status_top_right">
									<div className="home_status_top_right_option">
										<BiDotsHorizontalRounded className="home_status_top_right_option_icon" />
									</div>
									<div className="home_status_top_right_option">
										<AiOutlineClose className="home_status_top_right_option_icon" />
									</div>
								</div>
							</div>
							<div className="home_status_content">
								<p className="home_status_content_p">Xin chao test</p>
								<img
									src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/344562781_932470808053407_514459780243658665_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=VTxj_M1GmMQAX8OdEKO&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDl_me0l9_BOU1f7Qq98mmgKuu3drbhSapa4qsagCEV9w&oe=645B66AD"
									className="home_status_content_ing"
								/>
							</div>
							<div className="home_status_bottom">
								<div className="home_status_bottom_top">
									<div className="home_status_emotions">
										<img
											src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
											className="home_status_emotion"
										/>
										<p>15</p>
									</div>
									<div className="home_status_opinions">
										<div className="home_status_opinion">
											<BiComment className="home_status_opinion_icon" />
											<p>80</p>
										</div>
										<div className="home_status_opinion">
											<BiShare className="home_status_opinion_icon" />
											<p>100</p>
										</div>
									</div>
								</div>
								<div className="home_status_options">
									<div className="home_status_option">
										<AiOutlineLike className="home_status_option_icon" />
										<p>Thích</p>
									</div>
									<div className="home_status_option">
										<BiCommentDetail className="home_status_option_icon" />
										<p>Bình luận</p>
									</div>
									<div className="home_status_option">
										<TbShare3 className="home_status_option_icon" />
										<p>Chia sẻ</p>
									</div>
								</div>
								<div className="home_status_comments">
									<div className="comment_create">
										<img
											src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p64x64&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iyixs2h8VAgAX9hcsbv&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCsRVVPgeBrOGHF7Bi7qbpK1maEmWJ_8cAADaMM1lVCTg&oe=647E67F8"
											className="comment_create_avatar"
										/>
										<div className="comment_create_option">
											<div className="comment_create_bar">
												<input
													placeholder="Viết bình luận..."
													className="comment_create_input"
												/>
											</div>
											<div className="comment_create_icons">
												<HiOutlinePhotograph className="comment_create_icon" />
												<IoMdSend className="comment_create_icon" />
											</div>
										</div>
									</div>
									<div className="home_status_comment">
										<img
											src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/336885624_159840603229548_3359457770007121274_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hlSMyjRH8LMAX_glfhz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB4FtzbViC5m2Pxf1sluoXHqqGaviQdyleo8mbcNZWVuQ&oe=645BB450"
											className="home_status_comment_avatar"
										/>
										<div className="home_status_comment_center">
											<div className="home_status_comment_option">
												<div className="home_status_comment_center_container">
													<div className="home_status_comment_wrap">
														<p className="home_status_comment_center_name">
															Lan Hoàng Milano
														</p>
														<p className="home_status_comment_center_p">
															không hiểu sao nhìn phong cách có hơi giống CL 🙂
														</p>
													</div>

													<div className="home_status_comment_center_bottom">
														<span className="comment_liked">Thích</span>
														<span>Phản hồi</span>
														<p>3 tuần</p>
													</div>
												</div>
												<BiDotsHorizontalRounded className="home_status_setting-comment-icon" />
											</div>
											{/* Comment reply của người khác với chủ comment này */}
											<div className="home_status_comment_reply">
												<img
													src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/336885624_159840603229548_3359457770007121274_n.jpg?stp=cp0_dst-jpg_p64x64&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=hlSMyjRH8LMAX_glfhz&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfB4FtzbViC5m2Pxf1sluoXHqqGaviQdyleo8mbcNZWVuQ&oe=645BB450"
													className="home_status_comment_avatar"
												/>
												<div className="home_status_comment_center">
													<div className="home_status_comment_option">
														<div className="home_status_comment_center_container">
															<div className="home_status_comment_wrap">
																<p className="home_status_comment_center_name">
																	Lan Hoàng Milano
																</p>
																<p className="home_status_comment_center_p">
																	không hiểu sao nhìn phong cách có hơi giống CL
																	🙂
																</p>
															</div>

															<div className="home_status_comment_center_bottom">
																<span className="comment_liked">Thích</span>
																<span>Phản hồi</span>
																<p>3 tuần</p>
															</div>
														</div>
														<BiDotsHorizontalRounded className="home_status_setting-comment-icon" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="home_right">
					<div className="home_right_qc">
						<div className="home_right_qc_option">
							<img
								src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t45.1600-4/343868678_6377132470726_839788404929596323_n.png?stp=cp0_dst-jpg_fr_q90_spS444&_nc_cat=104&ccb=1-7&_nc_sid=67cdda&_nc_ohc=EaVbtWbS3ZoAX9RzULc&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfD1YsYZu64aVgMaMC1x4oDhKHyh4ptmg2ROqCl3Hlorow&oe=645C5924"
								className="qc_img"
							/>
							<p>thinkpro.vn</p>
						</div>
						<div className="home_right_qc_option">
							<img
								src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t45.1600-4/327433192_23853247023040529_1522809593379235617_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=100&ccb=1-7&_nc_sid=67cdda&_nc_ohc=8uDFZ3lX3xcAX9ZSFbL&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDQqO1Gff4bE562HKl307qinE1LgwGRoB1ewwX1b9x91g&oe=645CB9E9"
								className="qc_img"
							/>
							<p>daesang.vn</p>
						</div>
					</div>
					<div className="home_right_content">
						<p className="home_right_title">Người liên hệ</p>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, i) => (
							<div className="home_right_friend online" key={i}>
								<div className="home_right_friend_avatar">
									<img
										src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/333531261_1210179862939677_2905014069334199617_n.jpg?stp=c0.17.74.74a_cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5fxAabzyzEcAX-kSWt_&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBD-tAgz-c0PZO4uXbZPm-K0it-9Z7zaPDEpnL6H60vEw&oe=645C8FAA"
										className="home_right_friend_img"
									/>
								</div>
								<p>Bảo Thy</p>
							</div>
						))}

						<div className="home_right_friend">
							<div className="home_right_friend_avatar">
								<img
									src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/333531261_1210179862939677_2905014069334199617_n.jpg?stp=c0.17.74.74a_cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5fxAabzyzEcAX-kSWt_&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBD-tAgz-c0PZO4uXbZPm-K0it-9Z7zaPDEpnL6H60vEw&oe=645C8FAA"
									className="home_right_friend_img"
								/>
							</div>
							<p>Bảo Thy</p>
						</div>
						<div className="home_right_friend">
							<div className="home_right_friend_avatar">
								<img
									src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/333531261_1210179862939677_2905014069334199617_n.jpg?stp=c0.17.74.74a_cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5fxAabzyzEcAX-kSWt_&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBD-tAgz-c0PZO4uXbZPm-K0it-9Z7zaPDEpnL6H60vEw&oe=645C8FAA"
									className="home_right_friend_img"
								/>
							</div>
							<p>Bảo Thy</p>
						</div>
						<div className="home_right_friend online">
							<div className="home_right_friend_avatar">
								<img
									src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/333531261_1210179862939677_2905014069334199617_n.jpg?stp=c0.17.74.74a_cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5fxAabzyzEcAX-kSWt_&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBD-tAgz-c0PZO4uXbZPm-K0it-9Z7zaPDEpnL6H60vEw&oe=645C8FAA"
									className="home_right_friend_img"
								/>
							</div>
							<p>Bảo Thy</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
