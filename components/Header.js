import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto shadow-md">
			<div className="flex flex-grow gap-x-1 justify-evenly max-w-2xl ">
				<HeaderItem title="Home" Icon={HomeIcon} />
				<HeaderItem title="Trending" Icon={LightningBoltIcon} />
				<HeaderItem title="Verified" Icon={BadgeCheckIcon} />
				<HeaderItem title="Collections" Icon={CollectionIcon} />
				<HeaderItem title="Search" Icon={SearchIcon} />
				<HeaderItem title="User" Icon={UserIcon} />
			</div>
			<Image
				className="object-contain "
				src="https://links.papareact.com/ua6"
				alt="logo"
				width={200}
				height={100}
			/>
		</header>
	);
};

export default Header;
