config.doctype(
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="de"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="de"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="de"> <![endif]-->
<!--[if gt IE 8]><!-->
)
config.htmlTag_setParams = class="no-js" lang="de"><!--<![endif]--

page.meta {
  # Use the meta tag 'description' from the constants as default value
  # If the meta field description in the page properties is filled, then this will override the default.
  description = {$plugin.meta.description}
  description.override.field = description

  author = {$plugin.meta.author}
  author.override.field = author

  keywords = {$plugin.meta.keywords}
  keywords.override.field = keywords

  robots.value = {$plugin.meta.robots}
  #revisit = {$plugin.meta.revisit}
  #copyright = {$plugin.meta.copyright}

  viewport = width=device-width
}

page.headerData.10=TEXT
page.headerData.10.value (
  <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="touch-icon-ipad.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="touch-icon-iphone4.png" />
)
