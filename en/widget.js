/****************************************************************************************
 * ENGLISH (American)
 ****************************************************************************************/
export default {
    'genericError': 'Oops! Something went wrong',

    'connection-status.offline': 'You are offline',

    /**
     * Time representation
     */
    'hourFormat': 12,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'minutes',
    'timeUnit.hours': 'hours',
    'timeUnit.days': 'days',
    'timeUnit.weeks': 'weeks',
    'timeUnit.months': 'months',
    'timeUnit.years': 'years',
    'timeUnit.forever': 'forever',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Signed in with Google',
    'commons.signedWith.facebook': 'Signed in with Facebook',
    'commons.signedWith.twitter': 'Signed in with Twitter',
    'commons.signedWith.linkedin': 'Signed in with LinkedIn',
    'commons.signedWith.email': 'Signed in with email',
    'commons.signedWith.jwt': 'Signed in on this site',

    'commons.close': 'Close', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'People viewing this page',
    'monitor.siteViewersTitle': 'People viewing this site',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'People present now',

    /**
     * Menu
     */
    'status-header.options': 'Options',
    'status-header.flushChat': 'Flush this chat',
    'status-header.disableChat': 'Disable this chat',
    'status-header.enableChat': 'Enable this chat',
    'status-header.help': 'Help',
    'status-header.issue': 'Report an Issue',
    'status-header.terms': 'Terms of Service',
    'status-header.privacy': 'Privacy Policy',
    'status-header.signout': 'Sign out',
    'status-header.signin': 'Sign in',
    'status-header.editUserProfile': 'Edit profile',

    'status-header.notRememberedLogin': 'Not remembered',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chat with other visitors of this page in real time',
    'tab.chatTitleSite': 'Chat with other visitors of this site in real time',

    'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Pages people are viewing now',

    'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Where people come from',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'No data',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'People on this site',
    'ranking.activeTitle': 'People chatting on this site',
    'ranking.foregroundSwitchLabel': 'VIEWERS', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CHATTERS', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'No data',
    'ranking.currentPage': 'Current page',

    'ranking.note': 'Showing top ten pages',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.welcomeMessage': 'Chat with the other visitors in real time. Messages are public and disappear after $N $A.',
    'chat.welcomeMessageJWT': 'Chat with the other visitors in real time. Messages may be public and disappear after $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message',
    'chat.messageDeleted.byAuthor': 'Message deleted by the author',
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator',
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin',
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin',
    'chat.messageDeleted.unknown': 'Message deleted',

    'chat.placeholder': 'Type a message',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'You are a bit too fast...\nPlease don\'t flood the chat',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Sorry... This message seems inappropriate',
    'chat.abortedError': 'Sign-in canceled or cookies disabled on this browser',
    'chat.mutedError': 'Oops! It looks like you have been muted',
    'chat.notPersistentError': 'The authentication will not be remembered due to your restricted privacy settings. Please enable cookies for Now4real in your browser to prevent this from happening.',
    'chat.disabledError': 'This chat has been disabled',

    'chat.disabledByAdmin': 'This chat has been disabled by the admin',
    'chat.disabledByModerator': 'This chat has been disabled by a moderator',
    'chat.signinRequired': '<a>Sign in</a> to chat',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'View-only mode',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Reply', // means "reply to this message"
    'chat.deleteBtn': 'Delete', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user"

    'chat.userIdenticon': 'User fingerprint',

    /**
     * Presence
     */
    'presence.all.a': '1 person on this page (of $N on this site)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N people on this page (of $M on this site)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 person on this page',
    'presence.page.b': '$N people on this page',

    'presence.site.a': '1 person on this site',
    'presence.site.b': '$N people on this site',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'People',
    'emoji-picker.nature': 'Nature',
    'emoji-picker.food': 'Food',
    'emoji-picker.activity': 'Activity',
    'emoji-picker.travel': 'Places',
    'emoji-picker.objects': 'Objets',
    'emoji-picker.symbols': 'Symbols',
    'emoji-picker.flags': 'Flags',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF',

    /**
     * Typing
     */
    'typing.a': '1 person is typing...',

    'typing.b': '$N people are typing...',
    // example: "5 people are typing..."

    'typing.c': '$A is typing...',
    // example: "Alex is typing..."

    'typing.d': '$A and $B are typing...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B, and $C are typing...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A and 1 other are typing...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A and $N others are typing...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B, and 1 other are typing...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, and $N others are typing...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C, and 1 other are typing...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C, and $N others are typing...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Sign in',
    'social-modal.header': 'Start chatting on any website that uses Now4real',

    // buttons:
    'social-modal.google': 'Sign in with Google',
    'social-modal.facebook': 'Sign in with Facebook',
    'social-modal.twitter': 'Sign in with Twitter',
    'social-modal.linkedin': 'Sign in with LinkedIn',
    'social-modal.email': 'Sign in with email',

    'social-modal.footer': 'Click “Sign in” above to accept Now4real\'s <a1>Terms of Service</a1> and <a2>Privacy Policy</a2>',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consent',

    'jwt-modal.header': 'To start chatting you should accept the <a1>Terms of Service</a1> and the <a2>Privacy Policy</a2> of Now4real (the chat service)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.button': 'Accept',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Mute User',

    'mute-modal.header': 'User $U has been muted until $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'User $U has been muted',

    'mute-modal.body.set': 'Mute user $U for:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Update mute period:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.',

    'mute-modal.body.deleteAlert': 'You are unmuting the user',

    'mute-modal.button': 'Confirm',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirm',
    'confirmation-modal.ok': 'Yes',
    'confirmation-modal.cancel': 'No',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?'
}