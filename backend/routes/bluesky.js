import express from "express";
import { BskyAgent, RichText } from "@atproto/api";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const agent = new BskyAgent({
    service: 'https://bsky.social'
});
if (!process.env.BLUESKY_API_KEY) {
    throw new Error("BLUESKY_PASSWORD is not set");
}
await agent.login({
    // * Change identifies with your own bluesky
    identifier: 'jaycruz.bsky.social',
    password: process.env.BLUESKY_API_KEY
});
router.post("/post", async (req, res) => {
    const { content } = req.body;
    const rt = new RichText({ text: content });
    await rt.detectFacets(agent);
    await agent.post({
        $type: 'app.bsky.feed.post',
        text: rt.text,
        facets: rt.facets,
        createdAt: new Date().toISOString(),
    });
    res.status(200).send("Post successful");
});
export default router;
