page.meta {
  revisit             = 1
  revisit-after       = 7 days
  imagetoolbar        = no
  keywords.field      = keywords
  keywords.ifEmpty    = {$page.meta.keywords}
  description.field   = description
  description.ifEmpty = {$page.meta.description}  
  #abstract.field      = abstract
  #abstract.ifEmpty    = {$page.meta.abstract}  
  #page-topic.field    = title
  #page-topic.ifEmpty  = {$page.meta.topic} 
  local_all           = de_DE
  language            = de
  #author              = {$page.meta.autor}  
  #robots              = index,follow
  robots               = noindex,nofollow
  viewport             = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes
  #MSSmartTagsPreventParsing = true
  SKYPE_TOOLBAR        = SKYPE_TOOLBAR_PARSER_COMPATIBLE
  
  
         # OpenGraph Tags
         /*
        og:title {
            attribute = property
            field = title
        }
        og:site_name {
            attribute = property
            data = TSFE:tmpl|setup|sitetitle
        }
        og:description = {$page.meta.description}
        og:description {
            attribute = property
            field = description
        }
        og:image {
            attribute = property
            stdWrap.cObject = FILES
            stdWrap.cObject {
                references {
                    data = levelfield:-1, media, slide
                }
                maxItems = 1
                begin = 1
                renderObj = COA
                renderObj {
                    10 = IMG_RESOURCE
                    10 {
                        file {
                            import.data = file:current:uid
                            treatIdAsReference = 1
                            maxWidth = 500c
                            #height = 720c
                        }
                        stdWrap {
                            typolink {
                                parameter.data = TSFE:lastImgResourceInfo|3
                                returnLast = url
                                forceAbsoluteUrl = 1
            }
          }
        }
      }
    }
  }  
  */
}

[globalVar = GP:L = 0]
  page.meta {
    local_all           = en_EN
    language            = en
  }  
[global]