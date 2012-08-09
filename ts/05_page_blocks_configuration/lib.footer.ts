lib.footer = COA
lib.footer {

  stdWrap {
    required = 1
    wrap = <footer>|</footer>
  }

  10 = TEXT
  10 {
    data = date : U
    strftime = %Y
    wrap = <span class="notice"></span>
  }

  20 < menu_footer

}