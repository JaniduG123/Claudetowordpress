# Auto Glance Sync (Figma plugin)

Local development plugin that applies website changes to the Figma file
"Auto Glance - Website Design" (code -> Figma).

- `manifest.json` - plugin name and entry file
- `code.js` - the current script (hero photo blended into the banner with a radial alpha mask)
- `history/` - earlier scripts (WhatsApp text + nav cleanup, hero illustration, photo in card)

Import once in the Figma desktop app: Quick actions (Ctrl+/) -> "Import plugin from manifest..." -> select `manifest.json`.
Run: Quick actions -> "Auto Glance Sync".

Note: `code.js` replaces itself for each change; it embeds a stock preview photo that needs a proper
license before use on the live site.
