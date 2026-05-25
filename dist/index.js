// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var monumentsData = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0421, 27.1751],
    description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.",
    yearBuilt: "1632-1653",
    dynasty: "Mughal",
    primaryModel: "/models/taj_mahal_present.glb",
    historicalModels: {
      past: "/models/taj_mahal_1900.glb",
      ancient: "/models/taj_mahal_original.glb"
    },
    facts: [
      "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983.",
      "It took approximately 20,000 artisans to complete the construction.",
      "The central dome reaches a height of 73 meters (240 feet).",
      "The edifice contains semi-precious stones sourced from all over Asia."
    ],
    visitingHours: "Sunrise to Sunset, closed on Fridays",
    entryFee: "\u20B91,100 for foreign tourists, \u20B950 for Indian nationals",
    UNESCO: true
  },
  {
    id: "red-fort",
    name: "Red Fort",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.241, 28.6562],
    description: "The Red Fort is a historic fort in the city of Delhi that served as the main residence of the Mughal Emperors. Built in 1639 by the fifth Mughal Emperor Shah Jahan, the fort represents the peak of Mughal architecture.",
    yearBuilt: "1639-1648",
    dynasty: "Mughal",
    primaryModel: "/models/red_fort_present.glb",
    historicalModels: {
      past: "/models/red_fort_1900.glb",
      ancient: "/models/red_fort_original.glb"
    },
    facts: [
      "The Red Fort was the ceremonial and political center of the Mughal government.",
      "It covers a total area of about 254.67 acres.",
      "The fort's massive walls are 33 meters (108 ft) high.",
      "It was designated a UNESCO World Heritage Site in 2007."
    ],
    visitingHours: "Tuesday to Sunday, 9:30 AM to 4:30 PM",
    entryFee: "\u20B9600 for foreign tourists, \u20B935 for Indian nationals",
    UNESCO: true
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.1855, 28.5245],
    description: "The Qutub Minar is a minaret and victory tower that forms part of the Qutub complex. It is a UNESCO World Heritage Site in the Mehrauli area of Delhi, India. The tower is 73 meters tall.",
    yearBuilt: "1192-1220",
    dynasty: "Mamluk",
    primaryModel: "/models/qutub_minar_present.glb",
    historicalModels: {
      past: "/models/qutub_minar_1900.glb",
      ancient: "/models/qutub_minar_original.glb"
    },
    facts: [
      "It's the tallest brick minaret in the world.",
      "The construction was started by Qutub-ud-din Aibak and completed by his successor Iltutmish.",
      "The tower has five distinct storeys, each marked by a projecting balcony.",
      "The first three storeys are made of red sandstone, while the fourth and fifth are of marble and sandstone."
    ],
    visitingHours: "Sunrise to Sunset, all days of the week",
    entryFee: "\u20B9600 for foreign tourists, \u20B930 for Indian nationals",
    UNESCO: true
  }
];
var MemStorage = class {
  users;
  monuments;
  visits;
  currentId;
  visitId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.monuments = monumentsData;
    this.visits = [];
    this.currentId = 1;
    this.visitId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getAllMonuments() {
    return this.monuments;
  }
  async getMonumentById(id) {
    return this.monuments.find((monument) => monument.id === id);
  }
  async recordMonumentVisit(monumentId) {
    const visit = {
      id: this.visitId++,
      monumentId,
      visitDate: /* @__PURE__ */ new Date(),
      lastAction: /* @__PURE__ */ new Date()
    };
    this.visits.push(visit);
    return visit;
  }
  async getIndiaMapData() {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [68.7, 8.4],
                // Bottom-left
                [97.25, 8.4],
                // Bottom-right
                [97.25, 37.6],
                // Top-right
                [68.7, 37.6],
                // Top-left
                [68.7, 8.4]
                // Close the polygon
              ]
            ]
          },
          properties: {
            name: "India"
          }
        }
      ]
    };
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/monuments", async (req, res) => {
    try {
      const monuments = await storage.getAllMonuments();
      res.json(monuments);
    } catch (error) {
      console.error("Error fetching monuments:", error);
      res.status(500).json({ message: "Error fetching monuments" });
    }
  });
  app2.get("/api/monuments/:id", async (req, res) => {
    try {
      const monument = await storage.getMonumentById(req.params.id);
      if (!monument) {
        return res.status(404).json({ message: "Monument not found" });
      }
      res.json(monument);
    } catch (error) {
      console.error(`Error fetching monument ${req.params.id}:`, error);
      res.status(500).json({ message: "Error fetching monument details" });
    }
  });
  app2.post("/api/monuments/:id/visit", async (req, res) => {
    try {
      const result = await storage.recordMonumentVisit(req.params.id);
      res.json(result);
    } catch (error) {
      console.error(`Error recording visit for monument ${req.params.id}:`, error);
      res.status(500).json({ message: "Error recording monument visit" });
    }
  });
  app2.get("/api/map/india", async (req, res) => {
    try {
      const mapData = await storage.getIndiaMapData();
      res.json(mapData);
    } catch (error) {
      console.error("Error fetching India map data:", error);
      res.status(500).json({ message: "Error fetching map data" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import glsl from "vite-plugin-glsl";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    glsl()
    // Add GLSL shader support
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  // Add support for large models and audio files
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.mp3", "**/*.ogg", "**/*.wav"]
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = Number(process.env.PORT) || 5700;
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
})();
