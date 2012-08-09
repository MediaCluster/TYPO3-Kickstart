## remove default style if necessary
#plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >
#plugin.tt_news._CSS_DEFAULT_STYLE >
#plugin.tx_indexedsearch._CSS_DEFAULT_STYLE >

page.includeCSS {
  10 = {$filepaths.css}style.css
  10.media = all

  20 = {$filepaths.css}holmes.min.css
  20.media = screen

}