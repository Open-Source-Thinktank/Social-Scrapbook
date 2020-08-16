const { google } = require('googleapis');
const jwtDecode = require('jwt-decode');

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

loginController.afterConsent = async (req, res, next) => {

    const oauth2Client = new google.auth.OAuth2(
        '559739375459-cg35egmegke4g3b3cbi66ria81b66nro.apps.googleusercontent.com',
        '35JN7BXlmbYPTurgXFGwQWSA',
        'http://localhost:3000/api/login/google'
    );
    
    const { tokens } = await oauth2Client.getToken(req.query.code)
    //console.log('I am in afterConsentController');
    oauth2Client.setCredentials(tokens);

    // console.log(tokens.id_token)
    const decoded = jwtDecode(tokens.id_token);
    console.log(decoded);

    return next();
}

module.exports = loginController;