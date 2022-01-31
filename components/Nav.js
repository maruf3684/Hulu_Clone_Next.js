import Movies from "../utils/request";
import { v4 as id } from "uuid";
import { useRouter } from "next/router";

const Nav = () => {
	const router = useRouter();
	return (
		<nav className="relative mt-8">
			<div className="flex px-10 text-2xl whitespace-nowrap space-x-8
             overflow-x-scroll scrollbar-hide   sm:px-[70px] sm:text-base">
				{Object.entries(Movies).map(([zero, { title, url }], index) => (
					<h2
						className="cursor-pointer hover:scale-125 transition duration-100 transform
                        hover:text-white active:text-red-500 last:pr-24"
						key={id()}
						onClick={() => router.push(`/?genre=${zero}`)}
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
		</nav>
	);
};

export default Nav;


