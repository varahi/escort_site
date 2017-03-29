plugin.dd_googlesitemap_dmf {
  # selector for your extension (same as GET selector=news)
  models {

    # uid is NECESSARY in the sqlSelect field
    sqlMainTable = tx_escortmodels_domain_model_model

    # if catList depends of column of sqlMainTable (Column name like city or country)
    sqlCatColumn = 
    
    # if catList depends on sqlMMTable (Only works if uid_foreign and uid_local is in use)
    #sqlMMTable = tx_news_domain_model_news_category_mm
    
    # order of the XML output
    sqlOrder = tstamp DESC
    
    # last modified timestamp column (inside of sqlMainTable)
    sqlLastUpdated = tstamp
    
    # sql column of the title
    sqlTitle = title

    # sql column of keywords
    sqlKeywords = keywords

    # frequency
    frequency = 

    # typolink additionalParam (must belong to the uid of the sqlMainTable)
    linkParams = tx_escortmodels_escortmodels[model]

    # csv Pid's of the stored elements. Rootline is not checked with this setting
        pidList = 35

        # detail page id where the link should point at
        singlePid = 36

        # filter by category which is inside of the main table -> sqlCatColumn
        catList =

        # csv filter by mm related table -> sqlMMTable
        catMMList =

        # disable the language check through GLOBALS['TSFE']->sys_language_uid
        disableLanguageCheck = 0
  }

    # sitemap eID urls for the crawler
  crawler {
      1 = http://beispiel.de?eID=dd_googlesitemap

      # more than one sitemap
      # 2 =  http://beispiel.de?eID=dd_googlesitemap&more-configuration
  }
}