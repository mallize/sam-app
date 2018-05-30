
const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';

exports.lambda_handler = async (event, context, callback) => {
    axios(url)
        .then(result => {
            callback(null, {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'hello world',
                    location: ret.data.trim()
                })
            })
        })
        .catch(error => {
            console.log(error);
            callback(error, null);
        });

};
