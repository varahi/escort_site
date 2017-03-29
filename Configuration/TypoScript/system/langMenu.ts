################
# Lang Menu 
################

lib.langMenu >
lib.langMenu = HMENU
lib.langMenu {   
  wrap = <ul class="lang-menu">|</ul>  
      special = language
      special.value = 0,1
      special.normalWhenNoLanguage = 0
      1 = TMENU
      1 {
      noBlur = 1
      NO = 1
      NO {
        additionalParams.cObject = COA
        additionalParams.cObject {
          5 = TEXT
          5.wrap = &L=1
         
          #10 = TEXT
          #10.data = GPvar : tx_news_pi1|controller
          #10.wrap = &tx_news_pi1[controller]=News
          #10.required = 1
          
          #15 = TEXT
          #15.data = GPvar : tx_news_pi1|action
          #15.wrap = &tx_news_pi1[action]=Detail
          #15.required = 1          
     
          20 = TEXT
          20.data = GP:tx_news_pi1|news
          20.wrap = &tx_news_pi1[news]=|
          20.required = 1
     
          30 = TEXT
          30.data = GPvar : cHash
          30.wrap = &cHash=|
          30.required = 1  
          
          40 = TEXT
          40.data = GP:tx_escortmodels_escortmodels|model
          40.wrap = &tx_escortmodels_escortmodels[model]=|
          40.required = 1
     
          50 = TEXT
          50.data = GPvar : cHash
          50.wrap = &cHash=|
          50.required = 1                  
        }
      linkWrap = <li class="en">|</li>||<li class="de last">|</li>
      stdWrap.override = En || De 
      doNotLinkIt = 0
      #stdWrap.typolink.parameter.data = page:uid
      stdWrap.typolink.additionalParams = &L=1||&L=0
      stdWrap.typolink.addQueryString = 1
      stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
      stdWrap.typolink.addQueryString.method = GET 
      stdWrap.typolink.useCacheHash = 1
      stdWrap.typolink.no_cache = 0
    }
      # Active
      ACT = 1
      ACT < .NO
      ACT.linkWrap = <li class="active en">|</li>||<li class="active de last">|</li>
      #ACT.ATagParams = class="cur"
      #USERDEF1 <.NO
      #USERDEF2 < .ACT
  }
}

