'use strict';

import Snoowrap from 'snoowrap';
import { defaults, each } from 'lodash';
import path from 'path';
import Config from './config';

class bot {

    /**
     * Build the bot
     *
     * @param configFile
     * @param services
     * @param events
     */
    constructor( {
        configFile,
        services,
        events
    } = {} ) {
        defaults( this, {
            configFile,
            services,
            events
        }, {
            configFile: path.resolve( __dirname ) + '/.env',
            services: {},
            events: {}
        } );

        try {
            this.config = {};
            this.__initConfig();
            this.__initSnooWrap();
        } catch (error) {
            throw (error);
        }
    }

    __initConfig() {
        this.__config = new Config( this.configFile );
    }

    __initSnooWrap() {
        if ( this.__config.hasMany( [
                'userAgent', 'clientId', 'clientSecret', 'refreshToken'
            ] ) ) {
            this.reddit = new Snoowrap( {
                userAgent: this.__config.get( 'userAgent' ),
                clientId: this.__config.get( 'clientId' ),
                clientSecret: this.__config.get( 'clientSecret' ),
                refreshToken: this.__config.get( 'refreshToken' )
            } );
        } else {
            throw new Error( 'Missing reddit configuration' );
        }
    }
}


export default bot;