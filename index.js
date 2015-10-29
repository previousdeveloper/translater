var request = require('request');
var colors = require('colors');
var argv = require('yargs').argv;


if (argv._.length > 2) {
    request('http://mymemory.translated.net/api/get?q=' + argv._[0] + '&langpair=' + argv._[1] + '|' + argv._[2], function (error, response, body) {

        if (response.statusCode === 200) {

            var data = JSON.parse(body.trim());

            data.matches.forEach(function (val, index, theArray) {

                console.log(colors.green(val.translation));

            });
        }else{
            console.error(colors.red('translating error !'));

        }


    });
} else {

    console.error(colors.red('missing parameters'));
}
