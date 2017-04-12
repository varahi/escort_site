
TCEMAIN.table.pages {
  disablePrependAtCopy = 1
  disableHideAtCopy = 1
}
TCEMAIN.table.tt_content {
  disablePrependAtCopy = 1
  disableHideAtCopy = 1
}


TCEFORM.tt_content.header_layout {
/*
    altLabels {
        1 = h1
        2 = h2
        3 = h3
        4 = h4
        5 = h5
    }
    addItems {
        #10 = h1 с разделителями
        #11 = h2 с разделителями
        12 = h3 gray color        
    }   
*/
}


tx_news.templateLayouts {
  1 = LLL:typo3conf/ext/escort_site/Resources/Private/Language/locallang.xlf:news.feedbackList
  2 = LLL:typo3conf/ext/escort_site/Resources/Private/Language/locallang.xlf:news.newsList
}


RTE.default.contentCSS = typo3conf/ext/escort_site/Resources/Public/Styles/rte.css
RTE.classes {           
    gray-text {
      name = Gray Text
      value = color: #000000;
   }  
    small-gray {
      name = Small Gray Text
      value = color: #000000;
   }          
}

RTE.default.proc.denyTags = font,dl,dt,dd,style
RTE.default {

#showButtons = *
showButtons (
        class, blockstylelabel, blockstyle, textstylelabel, textstyle,
        formatblock, bold, italic, subscript, superscript,
        orderedlist, unorderedlist, outdent, indent, textindicator,
        insertcharacter, link, table, findreplace, chMode, removeformat, undo, redo, about,
        toggleborders, tableproperties,
        rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
        columninsertbefore, columninsertafter, columndelete, columnsplit,
        cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge,
        fontstyle, formatblock, fontsize, bgcolor, textcolor, image
)
    
  enableWordClean = 1
  removeTrailingBR = 1
  removeComments = 1
  removeTags = center, o:p, sdfield, font, dt, dl, dd,style
  removeTagsAndContents = style,script

  proc.allowedClasses (
    external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail,
    align-left, align-center, align-right, align-justify,
    csc-frame-frame1, csc-frame-frame2,
    component-items, action-items,
    component-items-ordered, action-items-ordered,
    important, name-of-person, detail, indent-bot, bold, 
    gray-text, small-gray,
    indent
  )
  
  buttons.blockstyle.tags.table.allowedClasses = csc-frame-frame1, csc-frame-frame2
  buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
  buttons.textstyle.tags.span.allowedClasses = important, name-of-person, detail, gray-text, small-gray, 
  
  inlineStyle.ul (
    ul.component-items { color: #186900; list-style-type: circle; }
    ul.action-items { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
  )
  inlineStyle.ol (
    ol.component-items-ordered { color: #10007B; list-style-type: lower-roman; }
    ol.action-items-ordered { color: #8A0020; list-style-type: lower-greek; }
    ol.indent-bot { color: #8A0020; list-style-image: url(img/red_arrow_bullet.gif); }
  ) 
  inlineStyle.inline-text (
    span.important { color: #8A0020; }
    span.name-of-person { color: #10007B; }
    span.detail { color: #186900; }
    span.gray-text { color: #186900; }
    span.small-text { color: #186900; }
  )
  classesParagraph (
    align-left, align-center, align-right,
    csc-frame-frame1, csc-frame-frame2, 
    gray-text, small-gray
  )
  classesTable = csc-frame-frame1, csc-frame-frame2
  classesTD = align-left, align-center, align-right
  classesLinks = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
  classesCharacter = important, name-of-person, detail, bold, gray-text, small-gray

    ## Configuration of the anchor accessibility feature (htmlArea RTE only)
    ## These classes should also be in the list of allowedClasses.
  classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
  classesAnchor.default {
    page = internal-link
    url = external-link-new-window
    file = download
    mail = mail
  }

  HTMLparser_rte {
    removeTags >
    removeTags = font,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
  }
  HTMLparser_db {
    removeTags >
    removeTags = font,dl,dt,dd,style
    denyTags >
    denyTags = font,dl,dt,dd,style
    denyTags  < RTE.default.proc.denyTags
    keepNonMatchedTags = 1
  } 
}

tx_csseo {
  # new index and table name of the model
  1 = tx_escortmodels_domain_model_model
  2 = tx_news_domain_model_news
  # if the get parameter is set in the URL the cs_seo properties will be shown
  1.enable = GP:tx_escortmodels_escortmodels|model
  2.enable = GP:tx_news_pi1|news
  # if the model already has fields like title etc. define them as fallback
  1.fallback {
  # cs_seo title field fallback = mymod title field
    title = title
    # cs_seo description field fallback = mymod description field
    description = description
  }
  2.fallback {
    title = title
    description = description
  }  
}