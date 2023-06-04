exports.emailverifica = (verifykan) => {
return `<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>verifique sua conta</title>
    <meta name="description"content="uma api rest 100% profissional e confiável para os seus negócios, aqui você encontrará diversas apis de diferentes conteúdos."/>


    <link href="https://rsms.me/inter/inter-ui.css" rel="stylesheet">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="https://tohka.tech/css/red.css" id="theme-color">
</head>
<body>



    <section class="py-5"></section>
<section class="py-5 bg-dark" id="pricing">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <i class="fas fa-sync fa-10x"></i>
                <h2 class="heading-black text-primary">🖥</h2>
                <p class="text-muted lead" style="font-style: italic;">VERIFIQUE SUA CONTA CLICANDO NO BOTÃO ABAIXO.</p>
            </div>
        </div>
        <div class="row pt-5 pricing-table">
            <div class="col-12 mx-auto">
                <div class="card-deck pricing-table">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title pt-3">OU COPIE E COLE EM SEU NAVEGADOR:</h3>
                            <div class="text-muted font-weight-medium mt-2">${verifykan}</div>
                            <a href="${verifykan}" class="btn btn-primary">
                                VERIFICAR
                            </a>
                        </div>
                    </div>
</section>

<section class="py-2">
    <div class="col-12 text-muted text-center">
        <a href="https://wa.me/5562936180708" target="_blank">2020 Breno - Todos os direitos reservados</a>
    </div>
</section>

<div class="scroll-top">
    <i class="fa fa-angle-up" aria-hidden="true"></i>
</div>

<section>
<div class="container">
    <div class="switcher-wrap">
        <div class="switcher-trigger">
            <span class="fa fa-gear"></span>
        </div>
        <div class="color-switcher">
            <h6>Mudar Cores</h6>
            <ul class="mt-3 clearfix">
                <li class="bg-teal active" data-color="default" title="Default Teal"></li>
                <li class="bg-purple" data-color="purple" title="Purple"></li>
                <li class="bg-blue" data-color="blue" title="Blue"></li>
                <li class="bg-red" data-color="red" title="Red"></li>
                <li class="bg-green" data-color="green" title="Green"></li>
                <li class="bg-indigo" data-color="indigo" title="Indigo"></li>
                <li class="bg-orange" data-color="orange" title="Orange"></li>
                <li class="bg-cyan" data-color="cyan" title="Cyan"></li>
                <li class="bg-yellow" data-color="yellow" title="Yellow"></li>
                <li class="bg-pink" data-color="pink" title="Pink"></li>
            </ul>
            <p>Você pode mudar a cor do tema</p>
        </div>
    </div>
</div>
</section>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.3/feather.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
<script src="https://tohka.tech/js/script.js"></script>
</body>
</html>
`
}

