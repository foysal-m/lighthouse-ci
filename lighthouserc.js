module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      url: ["http://localhost:3000/"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
