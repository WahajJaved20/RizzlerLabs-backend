class URLMetadata {
    constructor(success, link, title, description, imageURL) {
        this.success = success;
        this.link = link;
        this.meta = {
            "title": title,
            "description": description,
            "image": {
                "url": imageURL
            }
        }
    }
    toJSON() {
        return {
            success: this.success,
            link: this.link,
            meta: this.meta
        }
    }
}

module.exports = URLMetadata;