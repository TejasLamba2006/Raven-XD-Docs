import fs from 'node:fs/promises';
import path from 'node:path';
const dirTree = require("directory-tree");
const transformString = (input) => input.replace(/([A-Z])/g, (_match, p1, offset) => offset > 0 ? ` ${p1}` : p1);

export default async function handler(req, res) {
    if (process.env.NODE_ENV !== 'development') {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }
    const data = dirTree(path.join(process.cwd(), 'pages'), { extensions: /\.mdx/ });

    const toStore = transformObject(data);
    fs.writeFile(path.join(process.cwd(), 'public', 'tree.json'), JSON.stringify(toStore, null, 2));
    res.status(200).json(data);

}

function transformObject(obj) {
    // Filter children with non-empty children array
    const children = obj.children?.filter((child) => child.children && child.children.length !== 0);
    if (!children) return [];
    if (children.length === 0) {
        const toStore = [];
        for (const child of obj.children) {
            if (child.name === "_app" || child.name === "_document" || child.name === "_error" || child.name === "api") continue;
            const fileNameWithoutExt = child.name.replace(/\.[^/.]+$/, "");
            const transformedName = transformString(fileNameWithoutExt);
            const href = child.path.split("pages")[1].replace(/\.[^/.]+$/, "");
            toStore.push({ name: transformedName, href: href });
        }
        return toStore;
    }

    const toStore = {};
    for (const child of children) {
        if (child.name === "_app" || child.name === "_document" || child.name === "_error" || child.name === "api" || !child.children) continue;
        toStore[child.name] = child.children.map(c => {
            if (c.name.includes(".")) return null;
            const fileNameWithoutExt = c.name.replace(/\.[^/.]+$/, "");
            const transformedName = transformString(fileNameWithoutExt);
            const href = c.path.split("pages")[1].replace(/\.[^/.]+$/, "");
            return { name: transformedName, href: href, children: transformObject(c) };
        }).filter(Boolean);
    }
    return toStore;
}