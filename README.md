# lookItUp

This little bit of JavaScript can be used as a bookmarklet to quickly Google a term, phrase, or any other selected text from your web browser.

## Setup

Setting up the bookmarklet varies by browser. In some browsers you can right click on the bookmarks bar and select **New** to create a new bookmark, then give it a name and copy the JavaScript code into the "URL" or "Web Address" field.  In others, you may have to add a bookmark first (for any website) then edit it to replace the website's URL with the bookmarklet code.  In either case, be sure that the code itself is preceded with `javascript:`.  (It's included in the `.js` file, but it doesn't always copy over.)

## Usage

To use the bookmarklet, select the text that you want to look up so it appears highlighted, then click the bookmarklet button.  A new browser tab (or window, if your browser doesn't use tabs) will open up with the Google search results for your selected text.  If you click the bookmarklet button without selecting any text -- or if the bookmarklet can't process your selection for some reason -- a blank Google search page will load in the new tab or window.

If you prefer to use a search engine othe than Google, you can modify the code by changing the Google URL to another search engine website.  Note that you'll probably also have to change the format of the search query that follows the web address (i.e. for Google it's `?gws_rd=ssl#safe=active&q=`) but you can find that information easily by doing a sample search from the search engine you want to use.

## Limitations

This bookmarklet won't work if clicked from an "empty" web page (such as the "about:blank" page that some browsers start at).
