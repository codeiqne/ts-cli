import fs from "node:fs/promises";
import {open} from "node:fs";

function testConfig(file: string) {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await fs.readFile(file, {encoding: "utf8"});
            const json = JSON.parse(data);
            try {
                parserUtil_checkRequiredFields(json, ["name", "version"]);
            } catch (err) {
                reject(err);
            }
            resolve(json);
        } catch (err) {
            reject(err);
        }
    });
}

function parserUtil_checkRequiredFields(obj: object, required: string[]) {
    for (const key of required) {
        if (!(key in obj)) {
            throw new SyntaxError(`Field '${key}' is required but not present in the config file.`);
        }
    }
}

export {testConfig};
