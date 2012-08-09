config {
	# cat=config; type=boolean; label=Admin Panel: Turn on admin panel (mainly for testing purposes only)
	adminPanel = 0

	# cat=config; type=boolean; label=Caching: Turn off caching (testing purposes only)
	no_cache = 1

	# cat=config; type=boolean; label=Debugging: Turn on debugging (testing purposes only)
	debug = 0
	
	# cat=config; type=string; label=Domain name for Base URL: (excluding slashes and protocol like http://)
	domain = <FQDN>
}

filepaths {
	# cat=filepaths; type=string; label=HTML Templates: Location of the (X)HTML templates relative to site
	templates = fileadmin/templates/main/
	
	# cat=filepaths; type=string; label=CSS: Location of the Cascading Style Sheets relative to site
	css = fileadmin/templates/main/css/
	
	# cat=filepaths; type=string; label=Images: Location of the images relative to site
	img = fileadmin/templates/main/img/

	# cat=filepaths; type=string; label=Scripts: Location of the Javascript files relative to site
	js = fileadmin/templates/main/js/

	# cat=filepaths; type=string; label=Fonts: Location of the Javascript files relative to site
	fonts = fileadmin/templates/main/fonts/

	# cat=filepaths; type=string; label=HTML Templates for extensions: Location of the (X)HTML templates for extensions
	extensiontemplates = fileadmin/templates/extensions/
}

menu {
	# cat=navigation menus; type=int+; label= Top-menu pages: Comma separated list of page id's to be included in top-right menu.
	top.pages = <PID>
}

plugin.tt_news {
	# cat=plugin.tt_news; type=int+; label= pid_list: Comma separated list of folder id's containing which contain news records.
	pid_list = <PID>
	
	# cat=plugin.tt_news; type=int+; label= singlePid: Default ID of the page containing the tt_news SINGLE-view plugin
	singlePid = <PID>
	
	# cat=plugin.tt_news; type=int+; label= limit: Default maximum number of items to be shown in LIST-view
	limit = 10
	
	# Date and time formats according to active locales
	dateformat = %x
	dateandtimeformat = %c
	
	# Short notation date format according to international ISO standard
	shortdateformat = %Y-%m-%d
	timeformat = %H:%M
}

plugin.tx_indexedsearch {
	# cat=plugin.indexed_search; type=int+; label= Search Page ID: UID of the page which contains the indexed search plugin.
	searchpageID = <PID>
}

plugin.meta {
	# cat=plugin.meta; type=string; label= Description: Write a short abstract for your website.
	description = 

	# cat=plugin.meta; type=string; label= Keywords: Enter a comma separated list of keywords.
	keywords = 

	# cat=plugin.meta; type=string; label= Robots: Use for instance these codes: Index all pages: "all".  Index no pages: "none". Only this page: "index,nofollow".  Only subpages: "noindex,follow"
	robots = all

	# cat=plugin.meta; type=string; label= Copyright info: Enter copyright information, eg. "Me Myself and I, 2001. All rights reserved."
	copyright = 

	# cat=plugin.meta; type=string; label= Reply-to email
	email = 

	# cat=plugin.meta; type=string; label= Author: Enter name of author.
	author = 

	# cat=plugin.meta; type=int+; label= Revisit after: Number of days between search engine visits.
	revisit = 7


	# The meta tags below are not used on this website, if you want to use these, you can configure that in TypoScript template page.meta
	
	# cat=plugin.meta; type=boolean; label=Always include global.
	includeGlobal = 

	# cat=plugin.meta; type=options[,Arabic=ar,Chinese=zh,Danish=dk,Dutch=nl,English=en,Finnish=fi,French=fr,German=de,Greek=el,Hebrew=he,Icelandic=is,Italian=it,Japanese=ja,Norwegian=no,Polish=pl,Portuguese=pt,Russian=ru,Spanish=es,Swedish=sv,Turkish=tr,Multi language=mul]; label= Language: Select language of the content.
	language = de
	
	# cat=plugin.meta; type=string; label= Distribution
	distribution = GLOBAL
	
	# cat=plugin.meta; type=options[,General,Mature,14 years,Restricted]; label= Rating
	rating = General	
}

styles.content {
	# This defines the maximum width of images inserted in content records of type Images or Text-with-images.
	# There are seperate settings for images floated next to text (..InText)
	imgtext {
		maxW = 800
		maxWInText = 450
		borderThick = 1
		linkWrap.newWindow = 1
	}
	uploads {
		jumpurl_secure = 1
		jumpurl_secure_mimeTypes = pdf=application/pdf, doc=application/msword
		jumpurl = 1
	}
}

# Set the language of meta tag with DC.language to English, when in English
[globalVar = GP:L = 1]
plugin.meta.language = en
[global]