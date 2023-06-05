require('../configuração');
const express = require('express');
const { verificaNome, resetarAllLimit, resetTodayReq, banir, desbanir, checkBanimento, addcodiguin, enviar_email, verificarEmailv2 } = require('../backend/db');
const { adicionar_premium, deletar_premium, checkPremium, changeKey, resetOneLimit, setperfil, setmusica } = require('../backend/premium');
const { isAuthenticated } = require('../func.backend/auth');
const router = express.Router();
const { randomText } = require('../func.backend/function');
const codigogerado = randomText(4);

router.post('/add', isAuthenticated, async (req, res) => {
let { username, expired, customKey, token } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let checking = await verificaNome(username);
if (!checking) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/admin');
} else {
let checkPrem = await checkPremium(username)
if (checkPrem) {
req.flash('error_msg', 'Este usuário já tem Premium');
return res.redirect('/admin');
} else {
let checkMail = await verificarEmailv2(username)
adicionar_premium(username, customKey, expired)
enviar_email(`parabéns ${username} agora você e um usuário premium 👏\n\nDIAS: ${expired}`,checkMail )
req.flash('success_msg', `Premium adicionado para ${username} com sucesso`);
return res.redirect('/admin');
}
}
})

router.post('/delete', isAuthenticated, async(req, res) => {
let { username, token } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let checking = await verificaNome(username);
if (!checking) {
req.flash('error_msg', 'Este usuário não está registrado');
res.redirect('/admin');
} else {
let checkPrem = await checkPremium(username)
if (checkPrem) {
deletar_premium(username);
let checkMail = await verificarEmailv2(username)
enviar_email(`${username} seu premium foi deletado pelo administrador`, checkMail)
req.flash('success_msg', `Premium de ${username} foi deletado`);
res.redirect('/admin');
} else {
req.flash('error_msg', 'Este usuário não tem Premium');
res.redirect('/admin');
}
};
});


router.post('/codiguin', isAuthenticated, async(req, res) => {
let { username, valorcode, token } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let checking = await verificaNome(username);
if (!checking) {
req.flash('error_msg', 'Este usuário não está registrado');
res.redirect('/admin');
} else {
let checkMail = await verificarEmailv2(username)
enviar_email(`${username} parabéns você recebeu um código promocional no valor de ${valorcode} de dinheiro, resgate ele o quanto antes\n\nCÓDIGO: ${codigogerado}\npara resgatá-lo entre aqui: https://tohka.tech/resgatar`, checkMail)
addcodiguin(username, codigogerado, valorcode)
req.flash('success_msg', `Código gerado com sucesso, código para resgatá-lo ${codigogerado} envie para o comprador resgatar.`);
return res.redirect('/admin');
}
});

router.post('/banir', isAuthenticated, async (req, res) => {
let { username, expired, token, motivo } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let checking = await verificaNome(username);
if (!checking) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/admin');
} else {
let checkBan = await checkBanimento(username)
if (checkBan) {
req.flash('error_msg', 'Este usuário já esta banido');
return res.redirect('/admin');
} else {
banir(username, expired, motivo)
let checkMail = await verificarEmailv2(username)
enviar_email(`${username} sua conta foi baninda por desrespeitar nossas leis!, motivo do Banimento:\n\n${motivo}`, checkMail)
req.flash('success_msg', `A conta de ${username} foi banida com sucesso`);
return res.redirect('/admin');
}
}
})

router.post('/desbanir', isAuthenticated, async (req, res) => {
let { username, token } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let checking = await verificaNome(username);
if (!checking) {
req.flash('error_msg', 'O nome de usuário não está registrado');
return res.redirect('/admin');
} else {
let checkBan = await checkBanimento(username)
if (!checkBan) {
req.flash('error_msg', 'Este usuário não esta banido');
return res.redirect('/admin');
} else {
desbanir(username)
let checkMail = await verificarEmailv2(username)
enviar_email(`${username} parabéns  sua conta foi desbanida por um dos nossos administradores!`, checkMail)
req.flash('success_msg', `A conta de ${username} foi desbanida com sucesso`);
return res.redirect('/admin');
}
}
})

router.post('/custom', isAuthenticated, async (req, res) => {
let { customKey } = req.body;
let { nome_usuario, numero_zap } = req.user
console.log(nome_usuario)
let checkPrem = await checkPremium(nome_usuario);
if (checkPrem) {
changeKey(nome_usuario, customKey)
req.flash('success_msg', `Sua apikey foi customizada para ${customKey}`);
enviar_email(`❗ _APIKEY_ ❗\n\n Olá ${nome_usuario} você acabou de alterar sua apikey para : ${customKey}\n\n\npor ventura não foi você que mudou, contate algum administrador do site`, email)
res.redirect('/perfil');
} else {
req.flash('error_msg', 'Você não é um usuário premium');
res.redirect('/perfil');
}
})

router.post('/setperfil', isAuthenticated, async (req, res) => {
let { img } = req.body;
let { nome_usuario, numero_zap, email } = req.user
console.log(nome_usuario)
let checkPrem = await checkPremium(nome_usuario);
if (checkPrem) {
setperfil(nome_usuario, img)
req.flash('success_msg', `Sua foto de perfil foi customizada!`);
enviar_email(`❗ _FOTO_ ❗\n\n Olá ${nome_usuario} você acabou de alterar sua foto de perfil!\n\n\npor ventura não foi você que mudou, contate algum administrador do site`, email)
res.redirect('/perfil');
} else {
req.flash('error_msg', 'Você não é um usuário premium');
res.redirect('/perfil');
}
})

router.post('/setmusica', isAuthenticated, async (req, res) => {
let { music } = req.body;
let { nome_usuario, numero_zap, email } = req.user
console.log(nome_usuario)
let checkPrem = await checkPremium(nome_usuario);
if (checkPrem) {
setmusica(nome_usuario, music)
req.flash('success_msg', `Sua música foi customizada!`);
enviar_email(`❗ _MÚSICA_ ❗\n\n Olá ${nome_usuario} você acabou de alterar sua música\n\n\npor ventura não foi você que mudou, contate algum administrador do site`, email)
res.redirect('/perfil');
} else {
req.flash('error_msg', 'Você não é um usuário premium');
res.redirect('/perfil');
}
})

router.post('/limit',isAuthenticated, async(req, res) => {
let { username, token } = req.body;
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
}
let reset = await checkPremium(username);
if (!reset) {
resetOneLimit(username)
req.flash('success_msg', `A apikey do usuário ${username} foi resetada com sucesso para ${limitOfc}`);
res.redirect('/admin');
} else {
req.flash('error_msg', 'Você não pode resetar uma apikey premium');
res.redirect('/admin');
}
})

router.post('/resetall', isAuthenticated, async(req, res) => {
let { token } = req.body;
//console.log(token)
if (token != tokens) {
req.flash('error_msg', 'Token inválido');
return res.redirect('/admin');
} else {
resetarAllLimit(); 
resetTodayReq();
req.flash('success_msg', `limit de todas as apikey foram redefinidos com sucesso`);
return res.redirect('/admin');
}
})

module.exports = router;
