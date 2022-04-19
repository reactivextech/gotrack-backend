const nodemailer = require('nodemailer');
const accountTransport = require("./account_transport.json");

const mail_rover = nodemailer.createTransport(accountTransport);

<<<<<<< HEAD
const authorization1 = 'key=AAAAoaFkKTM:APA91bFK1IYAQRvxhbDZ0fo-KKRKeBKyCMnE2V5EJ7ZG5MW769hbMw5UngdyY1EMWbIlN9yzzxT46L88tDPtPrGeSL78uHaqfcC-cvGvnNhPxVZnWVHaMQIgnj8mvhTeA2FpBvszFZdX';
=======
const authorization1 = 'key=AAAAoaFkKTM:APA91bFK1IYAQRvxhbDZ0fo-KKRKeBKyCMnE2V5EJ7ZG5MW769hbMw5UngdyY1EMWbIlN9yzzxT46L88tDPtPrGeSL78uHaqfcC-cvGvnNhPxVZnWVHaMQIgnj8mvhTeA2FpBvszFZdX';
>>>>>>> 81905476e82e72feec78111d6f401831e493ca46

module.exports = {
    auth, dir, send, restringirApp, code_PMZ, key_PMZ, nombre, isExplorer
};

function nombre(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return 'Gotrack';
        default:
            return 'Gotrack';
    }
};

function isExplorer(idCliente) {
    var id = 0;
    try {
        var id = parseInt(idCliente);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_EXPLORER_APP_1:
            return true;
        default:
            return false;
    }
};

function restringirApp(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case -1:
            return 1; //Restringimos las solicitudes desde el APP ID a las motos con configuraciones en cliente_settings
        default:
            return 0;
    }
};

function code_PMZ(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            if (_ENVIRONMENT_ === 'developing') {
                return '';
            } else {
                return '';
            }
        default:
            return '';
    }
};

function key_PMZ(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            if (_ENVIRONMENT_ === 'developing') {
                return '';
            } else {
                return '';
            }
        default:
            return '';
    }
};

function auth(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return authorization1;
        default:
            return authorization1;
    }
};

//Directorios de storage
function dir(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse dir app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return 'cr';
        default:
            return 'df';
    }
};

//Envia un mail
function send(idAplicativo, calback) {
    var id = 0;
    try {
        var id = parseInt(idAplicativo);
    } catch (error) {
        console.log(`error parse idAplicativo feedback.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            json = {
                url: _SERVER + 'gotrack/', mail: mail_rover, app: 'GOTRACK', from: 'Gotrack <somosgotrack@gmail.com>',
                to: 'GOTRACK <somosgotrack@gmail.com>',
                slogan: 'De que llega, llega',
                body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'Si de entregas se trata, nosotros lo sabemos hacer.',
                bcc: 'Info <somosgotrack@gmail.com>', head: head, footer: footer
            };
            return calback(json);
        default:
            json = {
                url: _SERVER + 'gotrack/', mail: mail_rover, app: 'GOTRACK', from: 'Gotrack <somosgotrack@gmail.com>',
                to: 'GOTRACK <somosgotrack@gmail.com>',
                slogan: 'De que llega, llega',
                body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'Si de entregas se trata, nosotros lo sabemos hacer.',
                bcc: 'Info <somosgotrack@gmail.com>', head: head, footer: footer
            };
            return calback(json);
    }
}

var head =
    '<!DOCTYPE html>' +
    '<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">' +
    '<head>' +
    '<meta charset="utf-8"> ' +
    '<meta name="viewport" content="width=device-width"> ' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge"> ' +
    '<meta name="x-apple-disable-message-reformatting"> ' +
    '<title>Gotrack</title> ' +
    '</head>';

var footer =
    '<table align="center" style="text-align: center;">' +
    '<tr>' +
    '<td>' +
    '<img src="' + _SERVER + 'gotrack/' + 'facebook.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'gotrack/' + 'twitter.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'gotrack/' + 'google.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'gotrack/' + 'linkedin.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr> ' +
    '<tr>' +
    '<td bgcolor="#ffffff">' +
    '<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">' +
    '<tr>' +
    '<td style="padding: 40px 40px 10px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'GOTRACK</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 0px 40px 10px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'Si usted recibió este correo por error por favor comuniquese con: somosgotrack@gmail.com</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 0px 40px 40px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'Copyright &copy; 2021 <b>Gotrack</b>, Todos los derechos reservados.</p>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr> ' +
    '</table>' +
    '</div>' +
    '</center>' +
    '</body>' +
    '</html>';
