
# SCSS
page.includeCSS {
  css_file1_bootstrap = {$template_path}/Resources/Public/Scss/bootstrap/bootstrap.scss
  css_file1_bootstrap.outputdir = {$template_path}/Resources/Public/CompiledCss/ 

  css_file3 = {$template_path}/Resources/Public/Styles/fonts/stylesheet.css
  css_file10 = {$template_path}/Resources/Public/Styles/sm-core-css.css
  css_file11 = {$template_path}/Resources/Public/Styles/sm-clean/sm-clean.css 
  css_file12 = {$template_path}/Resources/Public/Styles/animate.css 

  css_file49 = {$template_path}/Resources/Public/Styles/cities.css  
  css_file50 = {$template_path}/Resources/Public/Styles/style.css
  css_file51 = {$template_path}/Resources/Public/Styles/menu.css
  
  css_file52_style = {$template_path}/Resources/Public/Scss/style.scss
  css_file52_style.outputdir = {$template_path}/Resources/Public/CompiledCss/  

  css_file99 = {$template_path}/Resources/Public/Styles/rte.css
  css_file100 = {$template_path}/Resources/Public/Styles/media_queries.css 
  css_file101 = {$template_path}/Resources/Public/Styles/banners.css 
}

# Jquery
page.includeJSFooter {
  #js_file1 = https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js
  #js_file2 = {$template_path}/Resources/Public/Javascript/bootstrap.min.js
  js_file3 = {$template_path}/Resources/Public/Javascript/jquery.smartmenus.js
  #js_file4 = {$template_path}/Resources/Public/Javascript/parallax.min.js
  #js_file5 = {$template_path}/Resources/Public/Javascript/jquery.maskedinput.min.js 
  #js_file6 = {$template_path}/Resources/Public/Javascript/jquery.lazy.min.js 
  js_file7 = {$template_path}/Resources/Public/Javascript/jquery.viewportchecker.min.js 
  #js_file8 = {$template_path}/Resources/Public/Javascript/pace.min.js   
  js_file50 = {$template_path}/Resources/Public/Javascript/main.js
}

#[system = mac]
#[browser = safari]

[globalVar = TSFE:id = 2] || [useragent = *iPhone*]
  page.includeCSS {
    css_file12 >  
  }
  page.includeJSFooter {
  	js_file7 >
    js_file50 >
    js_file50 = {$template_path}/Resources/Public/Javascript/main_light.js  
  }
[global]
