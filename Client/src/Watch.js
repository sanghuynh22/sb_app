import React from "react";
import Header from "./components/Header";
import {
	BiDotsHorizontal,
	BiLike,
	BiDotsHorizontalRounded,
} from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";

const Watch = () => {
	return (
		<div className="container">
			<Header />
			<div className="watchs">
				{[1, 2].map(() => (
					<div className="watch">
						<div className="watch_top">
							<div className="watch_infos">
								<img
									src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/326541183_533342822196346_470002771017237599_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=UvKygj7ZhQ8AX_bWTez&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfDoy45pvL8OWuWt3HGOP9-mwkPdF7lyUjdlLRkH5GIRRA&oe=645E3DFB"
									className="watch_info_img"
								/>
								<div className="watch_info">
									<p className="watch_info_name">Yeah1Show</p>
									<p className="watch_info_date">5 tháng 5 lúc 13:50</p>
								</div>
							</div>
							<BiDotsHorizontal className="watch_setting-icon" />
						</div>
						<div className="watch_content">
							<p>Hello goodmorning!</p>
						</div>
						<div className="watch_video">
							<video
								src="https://player.vimeo.com/external/387217430.sd.mp4?s=d72c5730170f7ff638cdebdc676d1dbcfbcc8c63&profile_id=164&oauth2_token_id=57447761"
								type="video/mp4"
								controls
							></video>
						</div>
						<div class="watch_emotions">
							<div class="watch_emotions_left">
								<div class="watch_emotion_left">
									<BiLike className="watch_emotion_icon" />
									<p className="watch_emotion_p">Thích</p>
								</div>
								<div class="watch_emotion_left">
									<FaRegCommentAlt className="watch_emotion_icon" />
									<p className="watch_emotion_p">Bình luận</p>
								</div>
								<div class="watch_emotion_left">
									<RiShareForwardLine className="watch_emotion_icon" />
									<p className="watch_emotion_p">Chia sẻ</p>
								</div>
							</div>
							<div className="watch_emotions_right">
								<div className="watch_emotion_right">
									<img
										src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
										className="watch_emotion_img"
									/>
									<p className="watch_emotion_pr">100</p>
								</div>
								<div className="watch_emotion_right">
									<p className="watch_emotion_pr">23 bình luận</p>
								</div>
								<div className="watch_emotion_right">
									<p className="watch_emotion_pr">200 lượt xem</p>
								</div>
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
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Watch;
