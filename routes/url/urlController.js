const express = require("express");
const URLMetadata = require("../../Models/UrlMetadataResponse")
const { parser } = require("html-metadata-parser")
const router = express.Router();

router.get("/extractMetadata", async (req, res) => {
    try {
        const url = req.query["url"];
        console.log(url);
        if (url != null) {
            parser(url).then(result => {
                const title = result["og"]["site_name"];
                const description = result["meta"]["title"]
                const imageURL = result["og"]["image"]
                return res.status(200)
                    .json(new URLMetadata(1, url, title, description, imageURL)
                        .toJSON());
            })
        } else {
            return res.status(500)
                .json(new URLMetadata(0, "URL not entered", null, null, null)
                    .toJSON());
        }
    } catch (error) {
        console.log(error);
        return res.status(500)
            .json(new URLMetadata(0, null, null, null, null)
                .toJSON());
    }
})

module.exports = router;