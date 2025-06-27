import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function Pattern() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("a", { href: "https://www.google.com/search?q=calculator&rlz=1C5CHFA_enPK961PK961&oq=calcul&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxiDARixAxiABBiKBTISCAAQABhDGIMBGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIGCAMQRRg5Mg0IBBAAGIMBGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAuGIAEMgcICBAAGI8CMgcICRAAGI8C0gEIMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8", children: "x" }) }),
    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("a", { href: "https://www.google.com/search?q=calculator&rlz=1C5CHFA_enPK961PK961&oq=calcul&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxiDARixAxiABBiKBTISCAAQABhDGIMBGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIGCAMQRRg5Mg0IBBAAGIMBGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAuGIAEMgcICBAAGI8CMgcICRAAGI8C0gEIMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8", children: "/" }) }),
    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("a", { href: "https://www.google.com/search?q=calculator&rlz=1C5CHFA_enPK961PK961&oq=calcul&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxiDARixAxiABBiKBTISCAAQABhDGIMBGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIGCAMQRRg5Mg0IBBAAGIMBGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAuGIAEMgcICBAAGI8CMgcICRAAGI8C0gEIMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8", children: "+" }) }),
    /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("a", { href: "https://www.google.com/search?q=calculator&rlz=1C5CHFA_enPK961PK961&oq=calcul&gs_lcrp=EgZjaHJvbWUqEggAEAAYQxiDARixAxiABBiKBTISCAAQABhDGIMBGLEDGIAEGIoFMgwIARAAGEMYgAQYigUyDAgCEAAYQxiABBiKBTIGCAMQRRg5Mg0IBBAAGIMBGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAuGIAEMgcICBAAGI8CMgcICRAAGI8C0gEIMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8", children: "-" }) })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Pattern, {})
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DZAi_oRo.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DU_sr2Vi.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CFuE9YUv.js", "imports": ["/assets/chunk-NL6KNZEE-CfxFt-pq.js"], "css": ["/assets/home-D1aT-SFi.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-2870cda6.js", "version": "2870cda6", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
