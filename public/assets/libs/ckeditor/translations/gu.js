(function(i) {
  const n = (i.gu = i.gu || {});
  n.dictionary = Object.assign(n.dictionary || {}, {
    'Block quote': ' વિચાર ટાંકો',
    Bold: 'ઘાટુ - બોલ્ડ્',
    'Cannot upload file:': 'ફાઇલ અપલોડ ન થઇ શકી',
    Code: '',
    Italic: 'ત્રાંસુ - ઇટલિક્',
    Strikethrough: '',
    Subscript: '',
    Superscript: '',
    Underline: 'નીચે લિટી - અન્ડરલાઇન્'
  });
  n.getPluralForm = function(i) {
    return i != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
