import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
router.post("/post", async (req, res) => {
    const status = req.body.status || req.query.status;
    if (!status || typeof status !== "string") {
        return res.status(400).send("Status is required");
    }
    const baseUrl = process.env.MASTODON_BASE_URL;
    const accessToken = process.env.MASTODON_ACCESS_TOKEN;
    const url = `${baseUrl}/api/v1/statuses`;
    const params = new URLSearchParams();
    params.append("status", status);
    try {
        const response = await fetch(url, {
            method: "POST",
            body: params,
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            }
        });
        const data = (await response.json());
        console.log(data);
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error });
        }
        res.status(200).send("Post successful");
    }
    catch (error) {
        console.error('Error posting to Mastodon:', error);
        res.status(500).send("An error occurred while posting to Mastodon");
    }
});
export default router;
