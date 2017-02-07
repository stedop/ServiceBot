'use strict';

import dotenv from 'dotenv';
import { each } from 'lodash';
import fs from 'fs';

class config {

    constructor(configFile) {
        console.log(configFile);
        fs.access(configFile, 'fwr', (err) => {
            throw new Error('Config file not found or is not readable',err);
        });
        this.config = new dotenv.config(
            {
                path: configFile
            }
        );
    }

    hasMany(keys = []) {
        let self = this;
        each(keys, function ( key ) {
            if ((self.has(key) === false)) {
                return false;
            }
        });
    }

    has(key = '') {
        let value = '';
        try {
            value = this.get(key);
        } catch (error ) {
            if (error instanceof TypeError) {
                return false;
            }
            throw error;
        }

        return value;
    }

    get(key = '') {
        return process.config[key];
    }

    set(key = '', value) {
        process.config[key] = value;
    }
}

export default config;