/* 
  * Templates from codes for the application  *
*/
export const templates = {
  default: {
    langs: [
      {
        code: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title></title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="css/style.css" rel="stylesheet">
                </head>
                <body>
                  <h1>Default</h1>
                </body>
            </html>
        `,
      },
    ],
  },

  html5: {
    langs: [
      {
        code: `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title></title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="css/style.css" rel="stylesheet">
            </head>
            <body>
              <h1>Hello World!!!</h1>
            </body>
        </html>
        `,
      },
    ],
  },

  navbar_type_1: {
    langs: [
      {
        code: `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Food Website</title>
            <!-- font awesome cdn link -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <!-- links files css -->
            <link rel="stylesheet" href="./css/style.css">
            <link rel="stylesheet" href="./css/responsive.css">
        </head>
        <body>
          <!-- header section starts -->
          <header>
              <!-- logo -->
              <a href="#" class="logo"><i class="fas fa-utensils"></i> food</a>

              <!-- menu bar responsive -->
              <div id="menu-bar" class="fas fa-bars"></div>

              <!-- navbar starts -->
              <nav class="navbar">
                  <a href="#home">Home</a>
                  <a href="#speciality">Especialidade</a>
                  <a href="#popular">Popular</a>
                  <a href="#gallery">Galeria</a>
                  <a href="#review">Review</a>
                  <a href="#order">Pedido</a>
              </nav>
              <!-- navbar ends -->
          </header>
          <!-- header section ends -->
        </body>
        </html>
        `,
      },

      {
        code: `
        *{
            font-family: 'Nunito', sans-serif;
            margin: 0; padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            text-transform: capitalize;
            transition: all .2s linear;
        }

        header{
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            padding: 2rem 9%;
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
        }

        header .logo{
            font-size: 2.5rem;
            font-weight: bolder;
            color: #666;
        }

        header .logo i{
            padding-right: .5rem;
            color: var(--red);
        }

        header .navbar a{
            font-size: 2rem;
            margin-left: 2rem;
            color: #666;
        }

        header .navbar a:hover{
            color: var(--red);
        }

        #menu-bar{
            font-size: 3rem;
            cursor: pointer;
            color: var(--red);
            border:.1rem solid var(--red);
            border-radius: .3rem;
            padding:.5rem 1.5rem;
            display: none;
        }

        @media(max-width: 768px){
            #menu-bar{
                display: initial;
            }
            
            header .navbar{
                position: absolute;
                top:100%; left: 0; right:0;
                background: #f7f7f7;
                border-top: .1rem solid rgba(0,0,0,.1);
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            }
            
            header .navbar.active{
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            }

            header .navbar a{
                margin: 1.5rem;
                padding:1.5rem;
                display: block;
                border:.2rem solid rgba(0,0,0,.1);
                border-left:.5rem solid var(--red);
                background:#fff;
            }
        }

        `,
      },
    ],
  },

  social_menu_layers: {
    langs: [
      {
        code: `
        <!DOCTYPE html>
        <html lang="pt-br">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="dia1.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <title>30 Dias de CSS</title>
          </head>
          <body>
            <header>
              <h1>Dia - 1</h1>
              <h2>Icones de mídia com efeito de camadas</h2>
            </header>
            <div>
              <ul>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </body>
        </html>
        `,
      },

      {
        code: `
        body{
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #111;
          text-align: center;
        }

        /*
        ===============
          Header
        ===============
        */
        header{
          background: #3A1034;
          width: 100%; width: 100%;
          position: absolute;
          top: 0; 
          border-radius: 2px;
          border-bottom: 2px solid black;
        }

        header h1{
          font-family: "Courier";
          color: #fff;
          font-size: 3rem;
          font-weight: bolder;
          text-decoration: underline;
          text-transform: uppercase;
        }

        header h2{
          font-family: "Courier";
          color: #fff;
          font-size: 1.9rem;	
          font-weight: 600;
          font-style: italic;
        }

        /*
        ======================
          Container icons
        ======================
        */
        div{
          display: flex;
          text-align: center;
          justify-content: space-around;	
          margin-top: 6em;
          padding: 2em;
        }

        div ul{
          position: relative;
          margin: 0;
          padding: 0;
          padding-top: 3em;
          display: flex;
          flex-wrap: wrap;
          text-align: center;	
          justify-content: space-around;
        }

        div ul li{
          position: relative;
          list-style: none;
          width: 80px; height: 80px;
          margin: 0 3em;
          transform: rotate(-30deg) skew(25deg);
        }

        /*
        ===========
          Icons
        ===========
        */
        li a span{
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: #000;
          transition: 0.5s;
          display: flex !important;
          align-items: center;
          justify-content: center;
          font-size: 30px !important;
          color: #f2f2f2;
          border-radius: 6px;
        }


        ul li:hover span{
          box-shadow: -1px 1px 1px rgba(0,0,0,.1)
        }

        /*
        ==============
          Camadas
        ==============
        */
        ul li:hover span:nth-child(5){
          transform: translate(40px, -40px);
          opacity: 1;
        }

        ul li:hover span:nth-child(4){
          transform: translate(30px, -30px);
          opacity: .8;
        }

        ul li:hover span:nth-child(3){
          transform: translate(20px, -20px);
          opacity: .6;
        }

        ul li:hover span:nth-child(2){
          transform: translate(10px, -10px);
          opacity: .4;
        }

        ul li:hover span:nth-child(1){
          transform: translate(0, 0);
          opacity: .2;
        }

        /*
        ======================
          Cor das Camadas
        ======================
        */
        ul li:nth-child(1) span{
          background: #3b5999;
        }

        ul li:nth-child(2) span{
          background: #55acee;
        }

        ul li:nth-child(3) span{
          background: #dd4b39;
        }

        ul li:nth-child(4) span{
          background: #0077b5;
        }

        ul li:nth-child(5) span{
          background: #e44051;
        }
        `,
      },
    ],
  },

  loading_effect: {
    langs: [
      {
        code: `
        <!DOCTYPE html>
        <html lang="pt-br">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>30 Dias de CSS</title>
            <!-- file css -->
            <link rel="stylesheet" href="loader-2.css">
          </head>
          <body>
            <header>
              <h1>Dia - 2</h1>
              <p>Loader Animado - 1</p>
            </header>

            <section class="ring">
              >Loading<
              <span></span>
            </section>
          </body>
        </html>
        `,
      },

      {
        code: `
        *{
          box-sizing: border-box;
        }

        body{
          margin: 0;
          padding: 0;
          background: #262626;
        }

        header{
          width: 100%; height: auto;
          padding: 1em;
          text-align: center;
          background-color: #000;
          color: #ff3311;
          font-family: Courier;
          border-bottom: 2px solid #fff000;
        }

        header p{
          font-size: 1em;
        }

        .ring{
          position: absolute;	
          top: 50%; left: 50%;
          transform: translate(-50% ,-50%);
          width: auto; height: auto;
          padding: 1em;
          background: transparent;
          border: 3px solid #3c3c3c;
          border-radius: 50%;
          text-align: center;
          line-height: 150px;
          font-family: sans-serif;
          font-size: 20px;
          color: #fff000;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-shadow: 0 0 10px #fff000;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .ring:before{
          content: '';
          position: absolute;
          top: -3px; left: -3px;
          width: 100%; height: 100%;
          border: 3px solid transparent;
          border-top: 3px solid #fff000;
          border-right: 3px solid #fff000;
          border-radius: 50%;
          animation: animateCircle 2s linear infinite;
        }

        span{
          display: block;
          position: absolute;
          top: calc(50% - 2px);
          left: 50%;
          width: 50%; height: 0px;
          background: #fff000;
          transform-origin: left;
          animation: animate 2s linear infinite;
        }

        span:before{
          content: '';
          position: absolute;	
          top: -8px; right: -8px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #fff000;
          box-shadow: 0 0 20px #fff000;
        }

        @keyframes animateCircle{
          0%{
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
          }
        }

        @keyframes animate{
          0%{
            transform: rotate(45deg);
          }
          100%{
            transform: rotate(405deg);
          }
        }
        `,
      },
    ],
  },
}
