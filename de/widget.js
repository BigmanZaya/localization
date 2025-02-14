/****************************************************************************************
 * GERMAN (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Hoppla! Etwas ist schief gelaufen',

    'connection-status.offline': 'Sie sind offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'Protokoll',
    'timeUnit.hours': 'Std',
    'timeUnit.days': 'Tage',
    'timeUnit.weeks': 'Wochen',
    'timeUnit.months': 'Monate',
    'timeUnit.years': 'Jahre',
    'timeUnit.forever': 'forever', // TODO

    /**
     * Commons
     */
    'commons.signedWith.google': 'Angemeldet über Google',
    'commons.signedWith.facebook': 'Angemeldet über Facebook',
    'commons.signedWith.twitter': 'Angemeldet über Twitter',
    'commons.signedWith.linkedin': 'Angemeldet über LinkedIn',
    'commons.signedWith.email': 'Angemeldet über email',
    'commons.signedWith.jwt': 'Angemeldet in diesem Webseite',

    'commons.close': 'Schließen', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Seitenbesucher jetzt',
    'monitor.siteViewersTitle': 'Webseitenbesucher jetzt',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Menschen präsentieren jetzt',

    /**
     * Menu
     */
    'status-header.options': 'Optionen',
    'status-header.flushChat': 'Flush this chat', // TODO
    'status-header.disableChat': 'Disable this chat', // TODO
    'status-header.enableChat': 'Enable this chat', // TODO
    'status-header.help': 'Hilfe',
    'status-header.issue': 'Ein Problem melden',
    'status-header.terms': 'Nutzungsbedingungen',
    'status-header.privacy': 'Datenschutz-Bestimmungen',
    'status-header.signout': 'Ausloggen',
    'status-header.signin': 'Sign in', // TODO
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Nicht gespeichert',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
    'tab.chatTitleSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',

    'tab.rankingTabLabel': 'SEITEN', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Auf welcher Seite sind die Besucher',

    'tab.heatmapTabLabel': 'KARTE', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Woher kommen die Besucher',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'SEITE', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'WEBSEITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Keine Daten',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Besucher auf dieser Webseite',
    'ranking.activeTitle': 'Besucher auf dieser Webseite chatten',
    'ranking.foregroundSwitchLabel': 'ZUSCHAUER', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CHATTEN', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Keine Daten',
    'ranking.currentPage': 'Aktuelle Seite',

    'ranking.note': 'Die besten 10 Seiten werden angezeigt',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.welcomeMessage': 'Chatten Sie mit den anderen Besuchern in Echtzeit. Nachrichten sind öffentlich und verschwinden nach $N $A.',
    'chat.welcomeMessageJWT': 'Chatten Sie mit den anderen Besuchern in Echtzeit. Nachrichten können öffentlich sein und verschwinden nach $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message', // TODO
    'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.unknown': 'Message deleted', // TODO

    'chat.placeholder': 'Schreiben',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Sorry... diese Nachricht scheint unangemessen',
    'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
    'chat.mutedError': 'Hoppla! Es sieht so aus, als wären Sie stummgeschaltet worden',
    'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',
    'chat.disabledError': 'This chat has been disabled', // TODO

    'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
    'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
    'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Nur Betrachter -Modus',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Antworten', // means "reply to this message"
    'chat.deleteBtn': 'Löschen', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user" // TODO

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 Besucher auf dieser Seite (von $N auf dieser Webseite)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N Besucher auf dieser Seite (von $M auf dieser Webseite)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 Besucher auf dieser Seite',
    'presence.page.b': '$N Besucher auf dieser Seite',

    'presence.site.a': '1 Besucher auf dieser Webseite',
    'presence.site.b': '$N Besucher auf dieser Webseite',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'Menschen',
    'emoji-picker.nature': 'Natur',
    'emoji-picker.food': 'Essen',
    'emoji-picker.activity': 'Activität',
    'emoji-picker.travel': 'Orte',
    'emoji-picker.objects': 'Objekte',
    'emoji-picker.symbols': 'Symbole',
    'emoji-picker.flags': 'Fahnen',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF', // TODO

    /**
     * Typing
     */
    'typing.a': 'Eine Person schreibt...',

    'typing.b': '$N Leute schreiben...',
    // example: "5 people are typing..."

    'typing.c': '$A schreibt...',
    // example: "Alex is typing..."

    'typing.d': '$A und $B schreiben...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B und $C schreiben...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A und eine andere Person schreiben...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A und $N andere Leute schreiben...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B und eine andere Person schreiben...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B und $N andere Leute schreiben...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C und eine andere Person schreiben...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C und $N andere Leute schreiben...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Anmelden',
    'social-modal.header': 'Chatten Sie jetzt auf einer Website, die Now4real verwendet',

    // buttons:
    'social-modal.google': 'Anmelden via Google',
    'social-modal.facebook': 'Anmelden via Facebook',
    'social-modal.twitter': 'Anmelden via Twitter',
    'social-modal.linkedin': 'Anmelden via LinkedIn',
    'social-modal.email': 'Anmelden via email',

    'social-modal.footer': 'Klick “Anmelden” und akzeptiere damit die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Zustimmung',

    'jwt-modal.header': 'Um mit dem Chatten zu beginnen, sollen Sie die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real (der chat service)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.button': 'Akzeptieren',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Mute User', // TODO

    'mute-modal.header': 'User $U has been muted until $E', // TODO
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'User $U has been muted', // TODO

    'mute-modal.body.set': 'Mute user $U for:', // TODO
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Update mute period:', // TODO
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

    'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

    'mute-modal.button': 'Confirm', // TODO

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirm', // TODO
    'confirmation-modal.ok': 'Yes', // TODO
    'confirmation-modal.cancel': 'No', // TODO

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?' // TODO
}