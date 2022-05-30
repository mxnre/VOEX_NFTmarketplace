import React from "react";

const CardList = [
	{
		title: "Moralis",
		description:
			"The Ultimate Web3 Development Platform. Join 5,000+ blockchain projects that use Moralis software and APIs to build & scale their dApps without the cost & complexity.",
		link: "https://moralis.io/",
	},
	{
		title: "Documentation",
		description:
			'Think "Firebase of crypto". Moralis provides managed backend for blockchain projects. Automatically syncing the balances of your users into the database, allowing you to set up on-chain alerts, watch smart contract events, build indexes, and so much more. All features are accessed through an easy-to-use SDK. All features Moralis provides are cross-chain by default.',
	},
	{
		title: "React Moralis",
		description: "Hooks and components to use Moralis in a React app",
		link:
			"https://github.com/MoralisWeb3/react-moralis#update-the-user-with-setuserdata",
	},
	{
		title: "Author (GitHub)",
		description:
			"YosephKS is the author of this template. Note that this template is unofficial and independently made by third party that has no association with Moralis.",
		link: "https://github.com/YosephKS",
	},
];


const Dashboard = (props) => {
	const { user } = props;

	return (
		<div>
			<h1>Hi {user.get("username")}!</h1>
			<h1>
				Welcome to the Moralis React App Template
			</h1>
			<div>
				{CardList.map((card) => {
					const { title, description } = card;
					return (

						<div>
							<div>

								<div>
									{title}
								</div>
								<div>
									{description.substring(0, 80)}
									{description.length >= 80 && "..."}
								</div>

							</div>
							<div>
								<button>
									Learn More
								</button>
							</div>
						</div>

					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
