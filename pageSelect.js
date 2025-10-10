import About from "./page/about.js";
import Contact from "./page/contact.js";
import Home from "./page/home.js";
import NotFound from "./page/not-found.js";

export const pageSelect = (url, res) => {
  if (url === "/") {
    res.end(Home());
  } else if (url === "/about") {
    res.end(About());
  } else if (url === "/contact") {
    res.end(Contact());
  } else {
    res.end(NotFound());
  }
};
