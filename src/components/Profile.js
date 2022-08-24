import React from "react";

export default function Profile() {
	return (
		<main
			className="profile"
			// style={{
			// 	backgroundImage: 'url("/pencil_background.jpg")',
			// }}
		>
			<section className="profile-content">
				<h1>Sanket Patil</h1>
				<h2>Full-Stack Developer</h2>
				<p>
					Creative and driven Full-Stack and Android Developer with
					experience in architecting and building Full Stack apps for
					mobile devices and web.
				</p>
			</section>
			<section className="work-experience">
				<h2>Work Experience</h2>
				<section className="job-item">
					<div className="job-details">
						<h3>Project Intern</h3>
						<p>Jan 2018 - June 2018</p>
					</div>
					<div className="job-summary">
						Worked for the new division of the company as a
						Technical Intern where I single handedly developed
						Website and an Android App for the same.
					</div>
				</section>
			</section>
			<section className="education">
				<h2>Education</h2>
				<section>
					<h3>
						St. Vincent Pallotti College of Engineering and
						Technology - Nagpur, MH
					</h3>
					<p>Electronics and Telecommunication, 2019</p>
				</section>
				<section>
					<h3>
						Sri Chaitanya Technical Institutions - Hyderabad, AP
					</h3>
					<p>MPC, 2011-2013</p>
				</section>
				<section>
					<h3>T.V.M - Nagpur, MH</h3>
					<p>SSC, 2000-2011</p>
				</section>
			</section>
		</main>
	);
}
