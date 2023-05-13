import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import { FaUserFriends } from "react-icons/fa";
import { MdSmartDisplay } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoMdSend, IoIosCloseCircleOutline } from "react-icons/io";
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
import avatar from "./assets/images/avatar-mac-dinh.jpeg";
import ShortsSlider from "./components/ShortsSlider";
import Reels from "./components/Reels";
import Status from "./components/Status";
import { createStatus } from "./actions/status/createStatus";
import { getAllStatus } from "./actions/status/getAllStatus";

const Home = () => {
	const fileRef = useRef();
	const dispatch = useDispatch();
	const [isReels, setIsReels] = useState(false);
	const [text, setText] = useState("");
	const [image, setImage] = useState("");
	const { currentUser } = useSelector((state) => state.user.auth);

	const HandleClickStory = () => {
		setIsReels(false);
	};

	const HandleClickReels = () => {
		setIsReels(true);
	};
	const handleClickFile = () => {
		fileRef.current.click();
	};
	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			const img = new Image();
			img.src = reader.result;

			img.onload = () => {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				// Calculate the new width and height
				const MAX_WIDTH = 400;
				const MAX_HEIGHT = 400;
				let width = img.width;
				let height = img.height;

				if (width > height) {
					if (width > MAX_WIDTH) {
						height *= MAX_WIDTH / width;
						width = MAX_WIDTH;
					}
				} else {
					if (height > MAX_HEIGHT) {
						width *= MAX_HEIGHT / height;
						height = MAX_HEIGHT;
					}
				}

				// Resize the image using the canvas
				canvas.width = width;
				canvas.height = height;
				ctx.drawImage(img, 0, 0, width, height);

				// Convert the canvas back to a data URL
				const imageType = "image/jpeg";
				const dataURL = canvas.toDataURL(imageType);
				setImage(dataURL);
			};
		};

		if (file) {
			reader.readAsDataURL(file);
		}
		console.log("image : ", image);
	};
	const handleEnter = async (e) => {
		let user = await currentUser._id;
		if (text) {
			if (e.key === "Enter") {
				console.log("userId : ", user);
				console.log("userCurrent : ", currentUser);

				dispatch(createStatus({ text, image, user })).then((status) => {
					dispatch(getAllStatus());
					setText("");
					setImage("");
					console.log(status);
				});
			}
		}
	};
	return (
		<div className="container">
			<Header />
			<div className="home">
				<div className="home_left">
					<div className="home_left_option">
						<img
							src={currentUser?.avatar ? currentUser.avatar : avatar}
							className="home_left_option_avatar"
						/>

						<p>{currentUser.username}</p>
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
					</div>
					<div className="home_create">
						<div className="home_create_top">
							<img
								src={currentUser?.avatar ? currentUser.avatar : avatar}
								className="home_create_top_img"
							/>
							<div className="home_create_top_bar">
								<input
									placeholder="Sang ơi, bạn đang nghĩ gì thế?"
									className="home_create_top_input"
									value={text}
									onChange={(e) => setText(e.target.value)}
									onKeyDown={(e) => handleEnter(e)}
								/>
							</div>
						</div>
						<div className="home_create_bottom">
							<div
								className="home_create_option"
								onClick={() => handleClickFile()}
							>
								<AiFillPicture className="home_create_option_icon photo" />
								<p>Ảnh/video</p>
								<input
									type="file"
									style={{ display: "none" }}
									ref={fileRef}
									onChange={(e) => handleFileUpload(e)}
								/>
							</div>
							{image && (
								<>
									<IoIosCloseCircleOutline
										style={{
											color: "#fff",
											fontSize: "30px",
											cursor: "pointer",
										}}
										onClick={() => setImage("")}
									/>
									<img src={image} className="home_create_bottom_img" />
								</>
							)}
						</div>
					</div>
					<Status />
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
						{currentUser.friends.map((friend, i) => (
							<div className="home_right_friend online" key={i}>
								<div className="home_right_friend_avatar">
									<img
										src={friend?.avatar ? friend.avatar : avatar}
										className="home_right_friend_img"
									/>
								</div>
								<p>{friend.username}</p>
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
