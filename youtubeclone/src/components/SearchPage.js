import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />

			<ChannelRow
				image="https://yt3.ggpht.com/ytc/AKedOLTTWxZeWRBBNl1XUtfNvaD1R9AIad2fWbdYt8XUFw=s88-c-k-c0x00ffffff-no-rj"
				channel="Emergency Awesome"
				verified
				subs="3.96M"
				noOfVideos="4,767"
				description="All the best Game Of Thrones, Star Wars The Mandalorian, The Batman Movie, Avengers Endgame and Marvel Movies, The Boys, ... "
			/>
			<hr />

			<VideoRow
				views="192K views"
				subs="3.96M"
				description="Rick and Morty Season 5 Episode 5 Amortycan Grickfitti. TOP 10, Easter Eggs. "
				timestamp="1 day ago"
				channel="Emergency Awesome"
				title="Rick and Morty Season 5 Episode 5 TOP 10 Breakdown, Easter Eggs and Things You Missed"
				image="https://i.ytimg.com/an_webp/Zp-nePBFRUU/mqdefault_6s.webp?du=3000&sqp=CKX43YcG&rs=AOn4CLDrWVPDSnnpJaLhhGFdy_6UQNksNQ"
			/>
			<VideoRow
				views="192K views"
				subs="3.96M"
				description="How Loki and Kang Setup All Marvel Phase 4 Movies. What If Episodes, Spider-Man No Way Home Trailer, Loki Episode 6 ..."
				timestamp="24 minutes ago"
				channel="Emergency Awesome"
				title="Rick and Morty Season 5 Episode 5 TOP 10 Breakdown, Easter Eggs and Things You Missed"
				image="https://i.ytimg.com/vi/pFDdO3qQ2sA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlsWTWlS_0ZRn61hJox6HvzYsIjw"
			/>
			<VideoRow
				views="192K views"
				subs="3.96M"
				description="Covering Full Loki Episode 6 Every Kang Version, Kang Variants Explained. Kang The Conqueror, He Who Remains, and many ..."
				timestamp="1 day ago"
				channel="Emergency Awesome"
				title="Rick and Morty Season 5 Episode 5 TOP 10 Breakdown, Easter Eggs and Things You Missed"
				image="https://i.ytimg.com/an_webp/W7CbbzaB4ZU/mqdefault_6s.webp?du=3000&sqp=CLDv3YcG&rs=AOn4CLCJP0taSqMelwzZzRUGXO3AJp75og"
			/>
			<VideoRow
				views="192K views"
				subs="3.96M"
				description="Covering new Black Widow Movie Ending, Black Widow Post Credit Scene Full Breakdown and Easter Eggs, Marvel Phase 4 ..."
				timestamp="2 days ago"
				channel="Emergency Awesome"
				title="Black Widow Movie Ending - Post Credit Scene Breakdown and Marvel Phase 4 Easter Eggs"
				image="https://i.ytimg.com/an_webp/0fi3plA5Vrg/mqdefault_6s.webp?du=3000&sqp=CPDO3YcG&rs=AOn4CLBq0dWFqwR1eWrVQy-905s8ufoLDQ"
			/>
			<VideoRow
				views="192K views"
				subs="3.96M"
				description="Covering new The Boys Season 3 Teaser Trailer. Jensen Ackles New Superhero Character Explained. Marvel Avengers Movies ..."
				timestamp="9 months ago"
				channel="Emergency Awesome"
				title="The Boys Season 3 Teaser Trailer - Jensen Ackles Marvel Avengers Easter Eggs Breakdown"
				image="https://i.ytimg.com/an_webp/NUMvy1d8EYI/mqdefault_6s.webp?du=3000&sqp=CLzd3YcG&rs=AOn4CLDHrdNLFYyURVu_WxEN78MQz1Rtzg"
			/>
		</div>
	);
}

export default SearchPage;
