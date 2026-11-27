// Auto Glance Sync: mirrors website theme changes into this Figma file.
// 1) Any text containing "wa.me/94711911006" -> "Chat on WhatsApp"
// 2) Removes "Detailing Packages" nav item from headers only (not footers)
(async () => {
  const page = figma.currentPage;
  const report = { replaced: 0, removed: 0, skippedFooter: 0, errors: [] };

  const isInFooter = (n) => {
    let p = n.parent;
    while (p && p.type !== 'PAGE') {
      if (/footer/i.test(p.name)) return true;
      p = p.parent;
    }
    return false;
  };

  // 1) WhatsApp text
  for (const t of page.findAllWithCriteria({ types: ['TEXT'] })) {
    if (!/wa\.me\/94711911006/i.test(t.characters)) continue;
    try {
      const fonts = t.getStyledTextSegments(['fontName']).map(s => s.fontName);
      for (const f of fonts) await figma.loadFontAsync(f);
      t.characters = 'Chat on WhatsApp';
      report.replaced++;
    } catch (e) { report.errors.push(t.id + ': ' + e.message); }
  }

  // 2) Detailing Packages nav item (header only)
  for (const t of page.findAllWithCriteria({ types: ['TEXT'] })) {
    if (t.removed) continue;
    if (t.characters.trim() !== 'Detailing Packages') continue;
    if (isInFooter(t)) { report.skippedFooter++; continue; }
    try {
      // remove the nav item wrapper if the text is its only child, else the text
      let target = t;
      if (t.parent && t.parent.type !== 'PAGE' && 'children' in t.parent && t.parent.children.length === 1 && !/nav|header/i.test(t.parent.name.replace(/nav.?item|nav.?link/i, 'x') ) ) {
        target = t.parent;
      } else if (t.parent && t.parent.children && t.parent.children.length === 1 && /nav.?(item|link)/i.test(t.parent.name)) {
        target = t.parent;
      }
      target.remove();
      report.removed++;
    } catch (e) { report.errors.push(t.id + ': ' + e.message); }
  }

  figma.closePlugin(
    'Done: ' + report.replaced + ' text updated, ' + report.removed +
    ' nav item(s) removed, ' + report.skippedFooter + ' footer link(s) kept' +
    (report.errors.length ? ', errors: ' + report.errors.length : '')
  );
})();
