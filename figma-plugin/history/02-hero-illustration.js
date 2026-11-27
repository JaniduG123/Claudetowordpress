// Auto Glance: replace hero car with a car-wash illustration (original SVG art)
const SPARK = (x,y,s,c)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -12 L2.5 -2.5 L12 0 L2.5 2.5 L0 12 L-2.5 2.5 L-12 0 L-2.5 -2.5 Z" fill="${c}"/></g>`;
const DROP = (x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -9 C5 -2 7 3 0 8 C-7 3 -5 -2 0 -9 Z" fill="#7df3ff" fill-opacity="0.85"/></g>`;
const BUB = (x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" fill-opacity="0.14" stroke="#7df3ff" stroke-width="1.6"/><circle cx="${x-r*0.35}" cy="${y-r*0.35}" r="${Math.max(1.5,r*0.22)}" fill="#ffffff" fill-opacity="0.9"/>`;
const FOAM = (x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" fill-opacity="0.95"/><circle cx="${x}" cy="${y}" r="${r}" stroke="#bdf6ff" stroke-width="1.2" fill="none"/>`;
const wheel = (cx)=>`<circle cx="${cx}" cy="292" r="38" fill="#0b1120" stroke="#1b2a4a" stroke-width="3"/><circle cx="${cx}" cy="292" r="25" fill="url(#rim)"/><circle cx="${cx}" cy="292" r="25" stroke="#ffffff" stroke-opacity="0.5" stroke-width="1.5"/><path d="M${cx} 268 L${cx} 316 M${cx-24} 292 L${cx+24} 292 M${cx-17} 275 L${cx+17} 309 M${cx+17} 275 L${cx-17} 309" stroke="#0b1120" stroke-opacity="0.55" stroke-width="3"/><circle cx="${cx}" cy="292" r="8" fill="#0b1120"/><circle cx="${cx}" cy="292" r="3" fill="#7df3ff"/>`;
const svg = `<svg width="520" height="380" viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="body" x1="0" y1="176" x2="0" y2="298" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff9a3a"/><stop offset="0.5" stop-color="#ff5a00"/><stop offset="1" stop-color="#b93800"/></linearGradient>
<linearGradient id="glass" x1="0" y1="186" x2="0" y2="226" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b6f9ff"/><stop offset="1" stop-color="#0aa6c8"/></linearGradient>
<linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2fbff"/><stop offset="1" stop-color="#7fa6c0"/></linearGradient>
<radialGradient id="floor" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 332) scale(250 26)"><stop offset="0" stop-color="#00e5ff" stop-opacity="0.5"/><stop offset="1" stop-color="#00e5ff" stop-opacity="0"/></radialGradient>
<linearGradient id="jet" x1="500" y1="30" x2="340" y2="172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7df3ff" stop-opacity="0"/><stop offset="0.5" stop-color="#7df3ff" stop-opacity="0.9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.95"/></linearGradient>
<linearGradient id="beam" x1="490" y1="252" x2="520" y2="252" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff6c8" stop-opacity="0.9"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></linearGradient>
</defs>
<ellipse cx="260" cy="332" rx="250" ry="24" fill="url(#floor)"/>
<ellipse cx="260" cy="328" rx="225" ry="9" fill="#000000" fill-opacity="0.45"/>
<path d="M30 282 C30 262 44 250 70 244 L138 228 C164 196 204 176 256 176 L334 176 C380 176 410 198 430 226 L470 236 C486 240 492 254 492 272 L492 292 C492 296 488 298 484 298 L36 298 C32 298 30 296 30 292 Z" fill="url(#body)"/>
<path d="M150 226 C176 196 212 184 256 184 L334 184 C372 184 398 204 416 228" stroke="#ffffff" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round"/>
<path d="M44 262 C150 252 330 252 478 258" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
<path d="M154 226 C176 198 210 186 252 186 L296 186 L296 226 Z" fill="url(#glass)"/>
<path d="M308 186 L336 186 C366 188 390 204 408 226 L308 226 Z" fill="url(#glass)"/>
<path d="M300 190 L300 276" stroke="#7a2a00" stroke-opacity="0.45" stroke-width="2"/>
<rect x="268" y="238" width="24" height="5" rx="2.5" fill="#ffd9b8"/>
<rect x="30" y="252" width="11" height="20" rx="4" fill="#ff2d2d"/>
<path d="M464 244 L488 248 L488 260 L460 257 Z" fill="#fff6c8"/>
<path d="M490 252 L520 238 L520 270 Z" fill="url(#beam)"/>
<path d="M84 292 A46 46 0 0 1 176 292 Z" fill="#0b1120"/>
<path d="M346 292 A46 46 0 0 1 438 292 Z" fill="#0b1120"/>
${wheel(130)}${wheel(392)}
<path d="M500 30 Q430 52 340 172" stroke="url(#jet)" stroke-width="6" stroke-linecap="round"/>
<path d="M512 62 Q440 84 372 184" stroke="url(#jet)" stroke-width="3.5" stroke-linecap="round"/>
<path d="M486 8 Q410 34 306 170" stroke="url(#jet)" stroke-width="3" stroke-linecap="round"/>
${FOAM(178,200,8)}${FOAM(200,190,10)}${FOAM(224,182,9)}${FOAM(250,177,11)}${FOAM(276,175,12)}${FOAM(304,176,10)}${FOAM(328,178,9)}${FOAM(352,184,8)}${FOAM(386,196,7)}${FOAM(404,208,8)}${FOAM(422,222,7)}${FOAM(150,226,8)}${FOAM(132,234,7)}${FOAM(262,190,6)}${FOAM(236,196,5)}
${BUB(150,150,14)}${BUB(192,126,9)}${BUB(330,140,16)}${BUB(374,108,10)}${BUB(414,150,12)}${BUB(250,116,7)}${BUB(92,190,10)}${BUB(60,232,6)}${BUB(470,196,8)}
${DROP(440,86,0.9)}${DROP(384,120,0.8)}${DROP(356,150,0.7)}${DROP(462,130,0.8)}${DROP(300,150,0.7)}
${SPARK(300,196,1,'#ffffff')}${SPARK(182,214,0.7,'#7df3ff')}${SPARK(424,206,0.85,'#ffffff')}${SPARK(112,262,0.6,'#ffd9b8')}${SPARK(456,268,0.7,'#ffffff')}
</svg>`;

(async () => {
  const card = await figma.getNodeByIdAsync('1:80');
  if (!card || card.type !== 'FRAME') { figma.closePlugin('Hero Visual Card (1:80) not found'); return; }
  const removeIds = ['1:83','1:84','1:94','1:95','1:96','1:97','1:98','1:99','1:100','1:101'];
  let removed = 0;
  for (const id of removeIds) { const n = await figma.getNodeByIdAsync(id); if (n && n.parent === card) { n.remove(); removed++; } }
  const art = figma.createNodeFromSvg(svg);
  art.name = 'Hero Car Wash Illustration';
  art.resize(520, 380);
  art.x = 40; art.y = 130;
  card.insertChild(Math.min(2, card.children.length), art);
  figma.closePlugin('Done: car wash illustration added, ' + removed + ' old layers replaced');
})();
