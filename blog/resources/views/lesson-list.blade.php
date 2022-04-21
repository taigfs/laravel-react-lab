<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{asset('static/css/main.min.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <!-- <div id="lesson-list-page" data="{{ $data }}"></div> -->
        <!-- <script src="{{asset('js/app.js')}}" ></script> -->
        <div id="root" data="{{ $data }}"></div>
        <script src="{{asset('static/js/main.min.js')}}" ></script>
    </body>
</html>