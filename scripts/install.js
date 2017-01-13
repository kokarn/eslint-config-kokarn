const fs = require( 'fs' );
const path = require( 'path' );

const DEFAULT_CONFIG = {
    extends: 'kokarn'
};
const DEFAULT_TEST_COMMAND = 'eslint *.js';
const DEFAULT_ENGINE = '^6.9.4';
const PACKAGE_PATH = path.join( __dirname, '../../../', 'package.json' );

try {
    const packageData = JSON.parse( fs.readFileSync( PACKAGE_PATH, 'utf8' ) );
} catch ( error ) {
    console.log( `Failed to load package.json in ${ PACKAGE_PATH }, skipping setup` );
    process.exit( 0 );
}

if( !packageData.scripts ){
    packageData.scripts = {
        pretest: DEFAULT_TEST_COMMAND
    };
} else if ( packageData.scripts && !packageData.scripts.pretest ){
    packageData.scripts.pretest = DEFAULT_TEST_COMMAND;
}

if ( !packageData.engines ){
    packageData.engines = {
        node: DEFAULT_ENGINE
    };
}

packageData.eslintConfig = DEFAULT_CONFIG;

fs.writeFileSync( PACKAGE_PATH, JSON.stringify( packageData, null, 2 ) );
