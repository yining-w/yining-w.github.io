"""Inline data/tool-data.json into src/index.template.html -> index.html."""
import sys
from pathlib import Path
root = Path(sys.argv[1] if len(sys.argv) > 1 else '.')
data = (root / 'data/tool-data.json').read_text().replace('</', '<\\/')
tpl = (root / 'src/index.template.html').read_text()
assert '/*__DATA__*/' in tpl
html = tpl.replace('/*__DATA__*/', data)
assert "/*__LAYOUT__*/'grid'" in html
(root / 'index.html').write_text(html)                                                   # grid layout
(root / 'index-force.html').write_text(html.replace("/*__LAYOUT__*/'grid'", "'force'"))  # d3-force layout
print('wrote index.html and index-force.html')
