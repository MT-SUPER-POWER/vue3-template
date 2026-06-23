import { createRouter, createWebHistory } from "vue-router";

type RouteComponent = () => Promise<{ default: unknown }>;

const views = import.meta.glob<RouteComponent>("../views/**/*.vue");

function kebabCase(str: string) {
  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

function pathToRoute(filePath: string) {
  const relativePath = filePath.replace("../views/", "").replace(/\.vue$/, "");
  const segments = relativePath.split("/");
  const fileName = segments[segments.length - 1];
  const dirs = segments.slice(0, -1);

  if (relativePath === "Home") {
    return { path: "/", name: "home" };
  }

  const routeName = kebabCase(relativePath.replace(/\//g, "-"));
  const routePath =
    "/" +
    [...dirs, fileName === "index" ? "" : kebabCase(fileName)]
      .filter(Boolean)
      .join("/");

  return { path: routePath || "/", name: routeName };
}

const routes = Object.entries(views).map(([filePath, component]) => {
  const { path, name } = pathToRoute(filePath);
  return { path, name, component };
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
