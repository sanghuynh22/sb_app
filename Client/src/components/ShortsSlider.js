import { useState, useRef } from "react";
import "../index.css";
import { AiOutlinePlus } from "react-icons/ai";

function ShortsSlider() {
	const shorts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const containerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNextClick = () => {
		const newIndex = Math.min(activeIndex + 5, shorts.length - 1);
		setActiveIndex(newIndex);
		scrollToIndex(newIndex);
		console.log("index", newIndex);
	};

	const handlePrevClick = () => {
		const newIndex = Math.max(activeIndex - 5, 0);
		setActiveIndex(newIndex);
		scrollToIndex(newIndex);
		console.log("index", newIndex);
	};

	const scrollToIndex = (index) => {
		const container = containerRef.current;
		container.scrollTo({
			left: container.offsetWidth * index,
			behavior: "smooth",
		});
	};

	return (
		<>
			{/* <div className="shorts_slider_content_container" ref={containerRef}> */}
			<div className="home_shorts_content" ref={containerRef}>
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
				{shorts.map((value, i) => {
					return (
						<div className="home_shorts_content_option" key={i}>
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
					);
				})}
				{activeIndex != 0 && (
					<button
						className="shorts_slider_prev_button"
						onClick={handlePrevClick}
					>
						{"<"}
					</button>
				)}
				{activeIndex + 4 < shorts.length - 1 && (
					<button
						className="shorts_slider_next_button"
						onClick={handleNextClick}
					>
						{">"}
					</button>
				)}
			</div>
			{/* </div> */}
		</>
	);
}

export default ShortsSlider;
