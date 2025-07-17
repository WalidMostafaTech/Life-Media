const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const axios = require("axios");

const BASE_URL = "https://lifemediaeg.com";
const API_URL = "https://backend.lifemediaeg.com/api";
const sitemap = new SitemapStream({ hostname: BASE_URL });

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

// static routes
const staticRoutes = [
  "/",
  "/about",
  "/contact-us",
  "/projects",
  "/services",
  "/media/designs",
  "/media/videos",
];

const fetchDynamicRoutes = async () => {
  try {
    const headers = { lang: "en" };

    const [projectsRes, solutionsRes, pagesRes] = await Promise.all([
      axios.get(`${API_URL}/projects`, { headers }),
      axios.get(`${API_URL}/solutions`, { headers }),
      axios.get(`${API_URL}/pages`, { headers }),
    ]);

    const projectRoutes = projectsRes.data.data.map(
      (project) => `/projects/${project.id}`
    );

    const solutionRoutes = solutionsRes.data.data.map(
      (solution) => `/solutions-we-offer/${solution.id}`
    );

    const pageRoutes = pagesRes.data.data.map((page) => `/pages/${page.slug}`);

    const allRoutes = [
      ...staticRoutes,
      ...projectRoutes,
      ...solutionRoutes,
      ...pageRoutes,
    ];

    allRoutes.forEach((url) => {
      sitemap.write({ url, changefreq: "weekly", priority: 0.8 });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log("✅ Sitemap created successfully at /public/sitemap.xml");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
  }
};

fetchDynamicRoutes();
