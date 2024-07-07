// pages/api/cards.js
import fs from 'node:fs/promises';
import path from 'node:path';
const transformString = (input) => input.replace(/([A-Z])/g, (_match, p1, offset) => offset > 0 ? ` ${p1}` : p1);

export default async function handler(req, res) {
    const directoryPath = path.join("../../", req.query.path.replaceAll(".", "/"));
    try {
        const files = await fs.readdir(directoryPath);
        const cards = files
            .filter(file => path.extname(file) === '.mdx')
            .map(file => ({
                title: transformString(file.slice(0, -4)),
                href: `/${req.query.path.replace("pages.", "").replaceAll(".", "/")}/${file.slice(0, -4)}`,
            }));
        res.status(200).json(cards);
    } catch (err) {
        console.error("Could not list the directory.", err);
        res.status(500).json({ message: "Failed to load cards." });
    }
}