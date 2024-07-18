import { random } from "../shared/utility";

const app = document.getElementById("app");

const heading = document.createElement("h1");
heading.textContent = random().toString();

app?.append(heading);
