const { createNodeMiddleware, createProbot } = require("probot");

const app = require("../../../app");
const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.WEBHOOK_SECRET,
  },
});


module.exports = createNodeMiddleware(app, { octokit, webhooksPath: '/api/github/webhooks' });
