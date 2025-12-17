import ProfileInfo from "../components/ProfileInfo";
import { useRouteLoaderData } from "react-router";
import Login from "./Login";

export default function Profile() {
	const ProfileData = useRouteLoaderData("profile")

	return (
		<>
			{(ProfileData.login &&
				<main className="main-content">
					<section className="content-profile-sec">
						<ProfileInfo data={ProfileData.result} />
					</section>
				</main>)}

			{(!ProfileData.login &&
				<Login type={"login"} />
			)}
		</>
	)
}