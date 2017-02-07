import bot from './servicebot';
import path from 'path';

try {
    let configFile = path.resolve( __dirname ) + '/../.env';
    let newBot = new bot({configFile});

    newBot.reddit.getSubreddit( 'dopscsstesting' );

    console.log( bot );
} catch (error) {
    console.log(error);
}