# Logo
lib.logo >
lib.logo = COA
lib.logo {
  wrap = |
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/logo.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 470
    file.height = 80
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

lib.accessLink = COA
lib.accessLink {
  wrap = |
  10 = TEXT
  10 {
    stdWrap.typolink.ATagParams = class="access"  
    #value = {$page.content.news.allReviewsTitle}  
    stdWrap.wrap = |
    stdWrap.typolink.parameter = 12
  }
}


[usergroup = *]
lib.accessLink >
lib.accessLink = COA
lib.accessLink {
  wrap = <div class="login-links">|</div>
  5 = TEXT
  5.data = TSFE:fe_user|user|username
  5.wrap = |
  5.required = 1
  
  10 = TEXT
  10.value = {$page.header.profileText}
  10.stdWrap.typolink.parameter = {$page.header.profileLink}
  10.stdWrap.wrap = |
  10 >
  20 = TEXT
  20 {
    wrap = |
    value= Logout
    lang.de = {$page.header.logout}
    typolink.parameter = 20
    #typolink.parameter.data = page:uid
    typolink.additionalParams.cObject = COA
    typolink.additionalParams.cObject {
      10 = TEXT
      10.value = &logintype=logout
      20 = TEXT
      20.data = GP : L
      20.wrap = &L=|
      20.required = 1
      20.stdWrap.typolink.ATagParams = class="access"  
    }
  }
}
[global]



lib.bottomLogo >
lib.bottomLogo = COA
lib.bottomLogo {
  wrap = <div class="bottom-logo">|</div>
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/logo2.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 520
    file.height = 121
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

# Image Teaser on top
lib.topImage = COA
lib.topImage {
  wrap = |
  10 = IMG_RESOURCE
  10 {
    file {
      treatIdAsReference = 1
      import.data = levelmedia: -1,slide
      import.listNum = 0
      import.override.field = media
      width = 1920c 
      format = jpg
      quality = 100     
    }
   altText.data = page:title    
   #params = class="bw"  
  }
}

lib.bannerCaption >
lib.bannerCaption = COA
lib.bannerCaption {
	wrap = <div class="banner-caption">|</div>
	10 = TEXT
	10 {
  	#data = field:abstract
  	data = levelfield : -1, abstract, slide
    #stripHtml = 1
    #htmlSpecialChars = 1
	}
}

lib.phones = COA
lib.phones {
  wrap = <div class="phones">|</div>
	10 = TEXT
	10 {
	  wrap = <div class="phone phone1">|</div>
	  value = {$page.header.phone1}  
	}
  20 = TEXT
  20 {
    wrap = <div class="phone phone2">|</div>
    value = {$page.header.phone2}  
  }	
}

lib.copyright = TEXT
lib.copyright {
  wrap = <div class="copyright">|</div>
  value = {$page.footer.copyright}  
}
