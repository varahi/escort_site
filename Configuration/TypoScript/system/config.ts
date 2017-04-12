config {
  doctype = html5
  xmlprologue = none
  metaCharset = utf8
  renderCharset = utf-8
  admPanel = 0
  spamProtectEmailAddresses = 0
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://{$domain}/
  #sys_language_mode = content_fallback
  pageTitleFirst = 1
  removeDefaultJS = 1
# Deafult language
  sys_language_uid = 1
  language = de
  locale_all = de_DE
  htmlTag_langKey  = de
  sys_language_uid = 0
  linkVars = L,type,cHash
  uniqueLinkVars = 1
  #absRefPrefix = http://{$domain}/
  prefixLocalAnchors = all   
  
  concatenateJs = 1
  concatenateCss = 1
  compressJs = 1
  compressCss = 1  
  
}

config {
  typolinkLinkAccessRestrictedPages = 12
  #typolinkLinkAccessRestrictedPages_addParams = &return_url=###RETURN_URL###
}

# Extbase exceptions
config.contentObjectExceptionHandler = 0

page.config.headerComment (
  Dmitry Vasilev dmitry@typo3.ru.net
  ___________________________________
)

page.shortcutIcon = favicon.ico

config {
 pageTitleFirst = 1
 pageTitleSeparator = 
 pageTitleSeparator.noTrimWrap = | | |
}

[globalVar = TSFE:id = 10]
	config.titleTagFunction >
	/*
	page {
		### SEO & Social Meta ###
		headerData.654 = COA
		headerData.654 {


			### Open graph ###
			30 = COA
			30 {
				### og:type ###
				5 = TEXT
				5.value = <meta property="og:type" content="website" />

				### og:title ###
				10 = TEXT
        10 >

				### og:description ###
				20 = TEXT
        20 >

				### og:site_name ###
				40 = TEXT
        40 >
			}
		}
	}	
	*/
[global]

