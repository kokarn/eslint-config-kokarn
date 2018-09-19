const fs = require( 'fs' );
const path = require( 'path' );

const DEFAULT_CONFIG = {
    extends: 'kokarn'
};
const DEFAULT_TEST_COMMAND = 'eslint *.js';
const DEFAULT_ENGINE = process.version.replace( 'v', '^' ) || '^10.10.0';
const PACKAGE_PATH = path.join( __dirname, '../../../', 'package.json' );
let packageData = '';
let write = false;

try {
    packageData = JSON.parse( fs.readFileSync( PACKAGE_PATH, 'utf8' ) );
} catch ( error ) {
    console.log( `Failed to load package.json in ${ PACKAGE_PATH }, skipping setup` );
    process.exit( 0 );
}

if( !packageData.scripts ){
    packageData.scripts = {
        pretest: DEFAULT_TEST_COMMAND
    };

    write = true;
} else if ( packageData.scripts && !packageData.scripts.pretest ){
    packageData.scripts.pretest = DEFAULT_TEST_COMMAND;

    write = true;
}

if ( !packageData.engines ){
    packageData.engines = {
        node: DEFAULT_ENGINE
    };

    write = true;
}

if ( !packageData.eslintConfig ) {
    packageData.eslintConfig = DEFAULT_CONFIG;

    write = true;
}

if ( write ) {
    fs.writeFileSync( PACKAGE_PATH, JSON.stringify( packageData, null, 2 ) );
}
