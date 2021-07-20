import "../styles/VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

// we destructure the props this way, because it's the ES6 standard and it's cleaner
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
	return (
		<div className="videoCard">
			<img className="videoCard__thumbnail" src={image} alt="" />
			<div className="videoCard__info">
				<Avatar
					className="videoCard__avatar"
					alt={channel}
					src={channelImage}
				/>
				<div className="videoCard__text">
					<h4>{title}</h4>
					<p>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
