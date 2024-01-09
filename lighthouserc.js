module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      url: ["http://localhost:3000/"],
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "c75e2acf-4533-4eb0-a068-42b0e336883a",
    },
  },
};
