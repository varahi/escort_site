# Setting "felogin" plugin TypoScript
plugin.tx_felogin_pi1 = USER_INT
plugin.tx_felogin_pi1 {
	userFunc = TYPO3\CMS\Felogin\Controller\FrontendLoginController->main

	# storagePid - where are the user records? use single value or a comma separated list
	storagePid = {$styles.content.loginform.pid}
	recursive =

	# Location of the template file, it is EXT:felogin/Resources/Private/Templates/FrontendLogin.html by default
	templateFile = {$styles.content.loginform.templateFile}
	#templateFile = typo3conf/ext/escort_site/Resources/Private/Extensions/felogin/Felogin.html

	# baseURL for the link generation
	feloginBaseURL =

	# should a wrapper class be set for this content element
	wrapContentInBaseClass = 1

	# typolink-configuration for links / urls
	# parameter and additionalParams are set by extension
	linkConfig {
		target =
		ATagParams = rel="nofollow"
	}

	# preserve GET vars - define "all" or comma separated list of GET-vars that should be included by link generation
	preserveGETvars = all

	# additional fields
	showForgotPasswordLink =
	showPermaLogin =

	# time in hours how long the link for forget password is valid
	forgotLinkHashValidTime = 12

	# when setting a new password, this is the minimum amount of characters
	newPasswordMinLength = 6

	welcomeHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	welcomeMessage_stdWrap {
		wrap = |
		htmlSpecialChars = 1
	}

	successHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	successMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}

	logoutHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	logoutMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}

	errorHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	errorMessage_stdWrap {
		wrap = <div class="error">|</div>
		htmlSpecialChars = 1
	}

	forgotHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	forgotMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	forgotErrorMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	forgotResetMessageEmailSentMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	changePasswordNotValidMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	changePasswordTooShortMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	changePasswordNotEqualMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}

	changePasswordHeader_stdWrap {
		wrap = <h3>|</h3>
		htmlSpecialChars = 1
	}
	changePasswordMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
	}
	changePasswordDoneMessage_stdWrap {
		wrap = <div>|</div>
		htmlSpecialChars = 1
    }

	cookieWarning_stdWrap {
		wrap = <p style="color:red; font-weight:bold;">|</p>
		htmlSpecialChars = 1
	}

	# stdWrap for fe_users fields used in Messages
	userfields {
		username {
			htmlSpecialChars = 1
			wrap = <strong>|</strong>
		}
	}

	# redirect options
	redirectMode =
	redirectFirstMethod =
	redirectPageLogin =
	redirectPageLoginError =
	redirectPageLogout =

	# disable redirect with one switch
	redirectDisable =

	email_from =
	email_fromName =
	replyTo =

	# Allowed Referrer-Redirect-Domains:
	domains =

	# Show logout form direct after login
	showLogoutFormAfterLogin =

	dateFormat = Y-m-d H:i

	# Expose the information on whether or not the account for which a new password was requested exists. By default, that information is not disclosed for privacy reasons.
	exposeNonexistentUserInForgotPasswordDialog = 0

	_CSS_DEFAULT_STYLE (
		.tx-felogin-pi1 label {
			display: block;
		}
	)
}