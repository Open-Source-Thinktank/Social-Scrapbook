const { google } = require('googleapis');


const loginController = {};

loginController.oAuth = async (req, res, next) => {

    const oauth2Client = new google.auth.OAuth2(
        '559739375459-cg35egmegke4g3b3cbi66ria81b66nro.apps.googleusercontent.com',
        '35JN7BXlmbYPTurgXFGwQWSA',
        'http://localhost:3000/api/login/google'
    );

    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/classroom.profile.photos',
        'https://www.googleapis.com/auth/userinfo.email'
    ];

    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        response_type: 'code',
        prompt: 'consent',
    })

    res.locals.url = url;
    return next();
};

loginController.afterConsent = (req, res, next) => { // PUT ASYNC BACK IN LATER

    const oauth2Client = new google.auth.OAuth2(
        '559739375459-cg35egmegke4g3b3cbi66ria81b66nro.apps.googleusercontent.com',
        '35JN7BXlmbYPTurgXFGwQWSA',
        'http://localhost:3000/api/login/google'
    );
    
    oauth2Client.getToken(req.query.code)
    .then(data => {
        // console.log('data: ', data)
        const { tokens } = data;
        oauth2Client.setCredentials(tokens);
        // console.log(typeof tokens);
        // console.log('tokens: ', tokens.id_token);
        // console.log('tokens.id_token: ', tokens.id_token);
        res.locals.token = tokens.id_token;
        // console.log('this is the token: ', res.locals.token)
        return next();
    })
    .catch(err => {
        if (err) console.log('afterConsent .catch block: ', err)
    })
    
    // res.locals.hi = tokens.id_token;
    // console.log(res.locals.hi)
    // console.log('We are right before next');
    // return next();
    
    //console.log('I am in afterConsentController');
    

 }

    //  try {
//     const oauth2Client = new google.auth.OAuth2(
//         '559739375459-cg35egmegke4g3b3cbi66ria81b66nro.apps.googleusercontent.com',
//         '35JN7BXlmbYPTurgXFGwQWSA',
//         'http://localhost:3000/api/login/google'
//     );
    
//     const { tokens } = await oauth2Client.getToken(req.query.code)
//     //console.log('I am in afterConsentController');
//     oauth2Client.setCredentials(tokens);
//     console.log('tokens: ', tokens);
//     console.log('tokens.id_token: ', tokens.id_token);
//     // console.log(tokens.id_token)

//     // console.log(decoded);
//     res.locals.hi = tokens.id_token;
//     console.log(res.locals.hi)
//     console.log('We are right before next');
    
//     return next();
//  } catch (err) {
//      console.log('afterConsent catch block: ', err)
//  }


module.exports = loginController;