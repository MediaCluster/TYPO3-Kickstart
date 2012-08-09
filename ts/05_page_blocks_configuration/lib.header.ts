lib.header = COA
lib.header {

  wrap = <header class="navbar navbar-fixed-top"><div class="navbar-inner">|</div></header>

  10 = COA
  10 {
    wrap = <div class="container">|</div>

    1 = HTML
    1.value (

     <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
     </a>   

     )

    2 < menu_meta

    3 = COA
    3 {
      wrap = <div class="container  mainnavi">|</div>

      1 = HTML
      1 {
        value = MairDumont Media
        stdWrap.typolink.parameter = 1
        stdWrap.typolink.ATagParams = class="logo"
        stdWrap.wrap = <h1>|</h1>
       }

      2 < menu_main

    }

  }

}