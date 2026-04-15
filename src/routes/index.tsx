import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<h1>Welcome to hammelev.com</h1>
			<p>
				This is the personal website of Mikkel Hammelev. More information coming
				soon.
			</p>
			<p>
				Now build with{" "}
				<a href="https://tanstack.com/start/latest">Tanstack Start</a>
			</p>
		</main>
	);
}
