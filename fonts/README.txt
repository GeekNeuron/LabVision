LabVision — Self-hosting the Vazirmatn font (optional, for 100% guaranteed offline rendering)
================================================================================================

The project's CSS already points to Vazirmatn as the primary font and will use it automatically
if it's already installed on your system (common on Persian Linux distros, or if you've ever
installed Telegram Desktop or the official Vazirmatn package). If it's not installed, the app
still works fine — it just falls back to Tahoma / Segoe UI / Arial.

To make Vazirmatn render exactly, even on a machine that has never had it installed and is
fully disconnected from the internet, download these 2 files ONCE (while online) and place them
directly in this "fonts" folder:

  1. Vazirmatn-Regular.woff2
  2. Vazirmatn-Bold.woff2

Official, safe download sources (pick one):

  A) Official GitHub repo (recommended):
     https://github.com/rastikerdar/vazirmatn/tree/master/fonts/webfonts
     -> click "Vazirmatn-Regular.woff2" -> click the download icon
     -> click "Vazirmatn-Bold.woff2"    -> click the download icon

  B) jsDelivr CDN mirror of the same files (right-click > Save As):
     https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2
     https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Bold.woff2

  C) Google Fonts (also the same typeface):
     https://fonts.google.com/specimen/Vazirmatn -> "Download family" -> extract the
     ttf files, or convert to woff2 with any online/offline converter.

License: Vazirmatn is released under the SIL Open Font License 1.1 (free for personal and
commercial use, redistribution allowed) — see https://github.com/rastikerdar/vazirmatn/blob/master/OFL.txt

Once both files are in this folder, the app is fully self-contained and Vazirmatn will render
correctly with zero network requests, even on an air-gapped machine.

--------------------------------------------------------------------------------
Note from Claude: my sandbox environment could not download the binary font files itself
(no outbound network access for file downloads, and GitHub's raw file host blocks automated
fetching), so this final step needs to be done manually, once, on a machine with internet access.
Everything else in the project is already 100% offline.
